const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const winston = require("winston");
const mongoose = require("mongoose");
const db = require('../models/secData');
const inputGoogleSheets = require('../models/googleSheets');
const cheerio = require('cheerio');
const htmlToJson = require('html-to-json');
const axios = require('axios');
const filingColors = require('./filings');
const Fawn = require('fawn');
Fawn.init(mongoose);

router.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.get("/savedFilings", async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var userSavedFilings = await User.findById(decoded._id).select("savedFilings");
        winston.info("Successfully queried /savedFilings");
        res.format({
            'application/json': function () {
                res.status(200).send(userSavedFilings);
            }
        });
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.get("/savedCompanies", async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var userSavedCompanies = await User.findById(decoded._id).select("savedCompanies");
        winston.info("Successfully queried", req.url);
        res.format({
            'application/json': function () {
                res.status(200).send(userSavedCompanies);
            }
        });
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.get("/savedFormTypes", async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var userSavedFormTypes = await User.findById(decoded._id).select("savedFormTypes");
        winston.info("Successfully queried", req.url);
        res.format({
            'application/json': function () {
                res.status(200).send(userSavedFormTypes);
            }
        });
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.get('/followedCompanyFilings', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    var filings = [];
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var followedCompanyFilings = [];
        var userSavedCompanies = await User.findById(decoded._id).select("savedCompanies");
        var badgeColors = Object.values(filingColors);
        var badgeColor = 'primary';
        var ftColor = 0;
        var company = '';
        var companyindex = 0;
        for (companyindex = 0; companyindex < userSavedCompanies.savedCompanies.length; companyindex++) {
            company = userSavedCompanies.savedCompanies[companyindex];
            await axios.get(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${company.cik}&type=&dateb=&owner=exclude&count=10&output=xml`).then(async secresults => {
                // * Parse data with cheerio
                const $ = cheerio.load(secresults.data);
                $('results filing').each(function (i, row) {
                    // * Find BadgeColor
                    badgeColor = 'primary';
                    for (ftColor = 0; ftColor < badgeColors.length; ftColor += 1) {
                        if (badgeColors[ftColor].filingArray.includes($(this).find('type').text())) {
                            badgeColor = badgeColors[ftColor].color;
                        }
                    }
                    // * Push filing to filings array
                    filings.push({
                        'cik': company.cik,
                        'companyName': company.companyName,
                        'formType': $(this).find('type').text(),
                        'fileLink': $(this).find('filingHREF').text(),
                        'title': $(this).find('formName').text(),
                        'filingDate': $(this).find('dateFiled').text(),
                        'badgeColor': badgeColor
                    });
                });
            }).catch(error => {
                winston.error(`Fetching data FAILED for company: ${company.cik}`);
            });
        }
        // * Sort filings by date
        filings.sort(function (a, b) {
            if (b.filingDate.slice(0, 4) - a.filingDate.slice(0, 4) === 0) {
                if (b.filingDate.slice(5, 7) - a.filingDate.slice(5, 7) === 0) {
                    return (b.filingDate.slice(8, 10) - a.filingDate.slice(8, 10));
                }
                return (b.filingDate.slice(5, 7) - a.filingDate.slice(5, 7));
            }
            return (b.filingDate.slice(0, 4) - a.filingDate.slice(0, 4));
        });
        for (var index = 0; index < filings.length; index++) {
            // * Save filing to database if not there
            await db.find({ title: filings[index].title }, async function (err, results) {
                if (results.length === 0) { winston.debug(filings[index]); }
                if (!results.length) {
                    let newItem = new db(filings[index]);
                    await newItem.save();
                    inputGoogleSheets(newItem.title, newItem.formType, newItem.filingDate, newItem.fileLink);
                }
            });
        }
        winston.info(`${req.url} Request Successful`);
        res.format({
            'application/json': function () {
                res.send({ data: filings });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED`);
    }
});

router.get('/followedFormTypeFilings', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var filings = [];
        var badgeColors = Object.values(filingColors);
        var badgeColor = 'primary';
        var ftColor = 0;
        var userSavedFormTypes = await User.findById(decoded._id).select("savedFormTypes");
        // * Get Recent Filings of each form type
        var FTindex = 0;
        for (FTindex = 0; FTindex < userSavedFormTypes.savedFormTypes.length; FTindex++) {
            var promise = await htmlToJson.request(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=${userSavedFormTypes.savedFormTypes[FTindex].FormType}&company=&dateb=&owner=include&start=0&count=100&output=atom`, {
                'items': ['entry', function ($item) {
                    let title = $item.find('title').text();
                    let type = $item.find('category').attr('term');
                    let date_time = (new Date($item.find('updated').text())).toLocaleString();
                    let link = $item.find('link').attr('href');
                    for (ftColor = 0; ftColor < badgeColors.length; ftColor += 1) {
                        if (badgeColors[ftColor].filingArray.includes($item.find('category').attr('term'))) {
                            badgeColor = badgeColors[ftColor].color;
                        }
                    }
                    return {
                        'title': title,
                        'formType': type,
                        'filingDate': date_time,
                        'fileLink': link,
                        'badgeColor': badgeColor
                    };
                }]
            }, async function (err, result) {
                var items = result.items;
                for (var index = 0; index < items.length; index++) {
                    filings.push(items[index]);
                    let item = await db.find({ title: items[index].title }, async function (err, results) {
                        if (results.length === 0) { winston.debug(items[index]); }
                        if (!results.length) {
                            let newItem = new db(items[index]);
                            await newItem.save();
                            inputGoogleSheets(newItem.title, newItem.formType, newItem.filingDate, newItem.fileLink);
                        }
                    });
                }
            });
        }
        // * Sort filings by date
        filings.sort(function (a, b) {
            winston.info(a.filingDate.slice(0, 8));
            if (b.filingDate.slice(0, 8) - a.filingDate.slice(0, 8) === 0) {
                return (b.filingDate.slice(8) - a.filingDate.slice(8));
            }
            return (b.filingDate.slice(0, 8) - a.filingDate.slice(0, 8));
        });
        winston.info(`${req.url} Request Successful`);
        res.format({
            'application/json': function () {
                res.send({ data: filings });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED from ${req.query.link}l`);
    }
});

router.get('/verifySavedCompany', async (req, result) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var savedCompany = {};
        var name = await User.find({ "_id": decoded._id, "savedCompanies": { $elemMatch: { companyName: req.query.company } } });
        if (name["0"]) { savedCompany = true; }
        else { savedCompany = false; }
        result.format({
            'application/json': function () {
                result.send({ savedCompany: savedCompany });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED from ${req.query.link}l`);
    }
});

router.get('/verifySavedFormType', async (req, result) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var savedFormType = {};
        var name = await User.find({ "_id": decoded._id, "savedFormTypes": { $elemMatch: { FormType: req.query.FormType } } });
        if (name["0"]) { savedFormType = true; }
        else { savedFormType = false; }
        result.format({
            'application/json': function () {
                result.send({ savedFormType: savedFormType });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED from ${req.query.link}l`);
    }
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
});

router.post("/updateViewedFilings", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        /*new Fawn.Task()
            .update(
                "users",
                { "_id": decoded._id },
                { $addToSet: { "recents": req.body.htmlLink } }
            )
            .run();*/
        var results = await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "recentFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/addSavedCompany", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "savedCompanies": {
                    $each: [{
                        cik: req.body.cik,
                        companyName: req.body.companyName,
                        companyLocation: req.body.companyLocation
                    }],
                    $position: 0
                }
            }
        });
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "historicalSavedCompanies": {
                    $each: [{
                        cik: req.body.cik,
                        companyName: req.body.companyName,
                        companyLocation: req.body.companyLocation
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Company saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/removeSavedCompany", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $pull: {
                "savedCompanies": {
                    cik: req.body.cik,
                    companyName: req.body.companyName,
                    companyLocation: req.body.companyLocation
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Company removed successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/addSavedFiling", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "savedFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "historicalSavedFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/removeSavedFiling", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $pull: {
                "savedFilings": {
                    fileLink: req.body.fileLink,
                    badgeColor: req.body.badgeColor,
                    formType: req.body.formType,
                    title: req.body.title,
                    filingDate: req.body.filingDate
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing removed successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/addSavedFormType", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "savedFormTypes": {
                    $each: [{
                        FormType: req.body.FormType,
                        BadgeColor: req.body.BadgeColor
                    }],
                    $position: 0
                }
            }
        });
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "historicalSavedFormTypes": {
                    $each: [{
                        FormType: req.body.FormType,
                        BadgeColor: req.body.BadgeColor
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/removeSavedFormType", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        await User.updateOne({ "_id": decoded._id }, {
            $pull: {
                "savedFormTypes": {
                    FormType: req.body.FormType,
                    BadgeColor: req.body.BadgeColor
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing removed successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/updateRecentSearches", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        // * Similar Search Code to find the search in DB
        // var similarSearch = await User.find({ "_id": decoded._id }, {
        //     "recentSearches": {
        //         $elemMatch: {
        //             companySearchString: req.body.companySearchString,
        //             cikSearchString: req.body.cikSearchString,
        //             formTypeSearchString: req.body.formTypeSearchString
        //         }
        //     }
        // });
        var results = await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "recentSearches": {
                    $each: [{
                        companySearchString: req.body.companySearchString,
                        cikSearchString: req.body.cikSearchString,
                        formTypeSearchString: req.body.formTypeSearchString,
                        dateSearched: Date.now()
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/updateCompanySearches", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var results = await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "recentCompanySearches": {
                    $each: [{
                        companySearchString: req.body.companySearchString,
                        dateSearched: Date.now()
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/updateFormTypeSearches", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var results = await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "recentFormTypeSearches": {
                    $each: [{
                        FormTypeSearchString: req.body.FormTypeSearchString,
                        dateSearched: Date.now()
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

module.exports = router;
