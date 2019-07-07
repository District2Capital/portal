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
const axios = require('axios');
const { filings } = require('./filings');
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
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var followedCompanyFilings = [];
        var userSavedCompanies = await User.findById(decoded._id).select("savedCompanies");
        var filings = [];
        var title = '';
        var formType = '';
        var fileLink = '';
        var filingDate = '';
        winston.info(userSavedCompanies);
        userSavedCompanies.savedCompanies.map(async (company, companyindex) => {
            winston.info(company.cik);
            await axios.get(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${company.cik}&type=&dateb=&owner=exclude&count=10&output=xml`).then(async secresults => {
                // Parse data with cheerio
                //winston.debug(secresults.data);
                const $ = cheerio.load(secresults.data);
                $('results filing').each((i, row) => {
                    //winston.debug($(this).find('formName').text());
                    formType = $(this).find('type').text();
                    fileLink = $(this).find('filingHREF').text();
                    title = ($(this).find('formName').text());
                    filingDate = $(this).find('dateFiled').text();
                    winston.debug("Form Title:", title);
                    var badgeColors = Object.values(filings);
                    var badgeColor = 'primary';
                    var ftColor = 0;
                    // for (ftColor = 0; ftColor < badgeColors.length; ftColor += 1) {
                    //     if (badgeColors[ftColor].filingArray.includes(formType)) {
                    //         badgeColor = badgeColors[ftColor].color;
                    //     }
                    // }
                    filings.push({
                        cik: company.cik,
                        companyName: company.companyName,
                        formType: formType,
                        fileLink: fileLink,
                        title: title,
                        filingDate: filingDate,
                        badgeColor: badgeColor
                    });
                });
                // for (var index = 0; index < filings.length; index++) {
                //     let item = await db.find({ title: filings[index].title }, async function (err, results) {
                //         if (results.length === 0) { winston.debug(filings[index]); }
                //         if (!results.length) {
                //             let newItem = new db(filings[index]);
                //             await newItem.save();
                //             inputGoogleSheets(newItem.title, newItem.formType, newItem.filingDate, newItem.fileLink);
                //         }
                //     });
                // }
            }).catch(error => {
                winston.error(`Fetching data FAILED`);
            });
            winston.info(filings);
            followedCompanyFilings.concat(filings);
            return ('');
        });
        winston.info(`${req.url} Request Successful`);
        res.format({
            'application/json': function () {
                res.send({ followedCompanyFilings: followedCompanyFilings });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED`);
    }
});

// router.get('/followedFormTypeFilings', async (req, result) => {
//     const token = req.query["x-auth-token"];
//     var decoded = null;
//     try {
//         decoded = jwt.verify(token, config.get("jwtPrivateKey"));
//         var savedCompany = {};
//         var name = await User.find({ "_id": decoded._id, "savedCompanies": { $elemMatch: { companyName: req.query.company } } });
//         if (name["0"]) { savedCompany = true; }
//         else { savedCompany = false; }
//         result.format({
//             'application/json': function () {
//                 result.send({ savedCompany: savedCompany });
//             }
//         });
//     }
//     catch{
//         winston.error(`Fetching data FAILED from ${req.query.link}l`);
//     }
// });

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
