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
const filingColors = require('./filings');
const inputGoogleSheets = require('../models/googleSheets');
const cheerio = require('cheerio');
const htmlToJson = require('html-to-json');
const axios = require('axios');

router.get("/getListNames", async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        let userListNames = _.keys(userLists.myLists);
        winston.info("Successfully queried", req.url);
        res.send(userListNames);
    }
    catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.get('/getListContents', async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const listName = req.query["listName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        let userListContents = _.values(userLists.myLists[listName]);
        winston.info("Successfully queried", req.url);
        res.send(userListContents);
    }
    catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.get('/getFormTypeLists', async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const FormType = req.query["FormType"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        var listsWithoutFormType = [];
        (_.keys(userLists.myLists)).forEach((list, index) => {
            if (userLists.myLists[list].FormTypes) {
                var inList = false;
                (_.values(userLists.myLists[list].FormTypes)).forEach((formTypeItem, index) => {
                    if (formTypeItem.FormType === FormType) {
                        inList = true;
                    }
                });
                if (!inList) {
                    listsWithoutFormType.push(_.keys(userLists.myLists)[index]);
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.send(listsWithoutFormType);
    } catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.get('/getCompanyLists', async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const Company = req.query["CompanyCik"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        var listsWithoutCompany = [];
        (_.keys(userLists.myLists)).forEach((list, index) => {
            if (userLists.myLists[list].Companies) {
                var inList = false;
                (_.values(userLists.myLists[list].Companies)).forEach((companyItem, index) => {
                    if (companyItem.cik == Company) {
                        inList = true;
                    }
                });
                if (!inList) {
                    listsWithoutCompany.push(_.keys(userLists.myLists)[index]);
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.send(listsWithoutCompany);
    } catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.get('/getFilingLists', async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const title = req.query["title"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        var listsWithoutFiling = [];
        (_.keys(userLists.myLists)).forEach((list, index) => {
            if (userLists.myLists[list].IndividualFilings) {
                var inList = false;
                (_.values(userLists.myLists[list].IndividualFilings)).forEach((FilingItem, index) => {
                    if (FilingItem.title === title) {
                        inList = true;
                    }
                });
                if (!inList) {
                    listsWithoutFiling.push(_.keys(userLists.myLists)[index]);
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.send(listsWithoutFiling);
    } catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.post('/createNewList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const listName = req.body["listName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        userLists.myLists[listName] = {
            'FormTypes': [],
            'Companies': [],
            'IndividualFilings': []
        };
        await User.update({ "_id": decoded._id }, {
            $set: {
                'myLists': userLists.myLists
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/deleteList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const listName = req.body["listName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        const deleteList = `myLists.${listName}`;
        var _unset = {};
        _unset[deleteList] = '';
        await User.update({ "_id": decoded._id }, {
            $unset: _unset
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/addFormTypeToList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const ListName = req.body["ListName"];
        const FormType = req.body["FormType"];
        const BadgeColor = req.body["BadgeColor"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (!userLists.myLists[ListName]['FormTypes'].includes(FormType)) {
            const myArray = `myLists.${ListName}.FormTypes`;
            const pushObject = {
                [myArray]: {
                    "FormType": FormType,
                    "BadgeColor": BadgeColor
                }
            };
            await User.updateOne({ "_id": decoded._id }, {
                $push: pushObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/removeFormTypeFromList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const ListName = req.body["ListName"];
        const FormType = req.body["FormType"];
        const BadgeColor = req.body["BadgeColor"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (userLists.myLists[ListName]['FormTypes'].filter((formtype) => formtype.FormType === FormType)) {
            const formtypeIndex = userLists.myLists[ListName]['FormTypes'].filter((formtype, index) => { if (formtype.FormType === FormType) { return index; } });
            const myArray = `myLists.${ListName}.FormTypes`;
            const pullObject = {
                [myArray]: {
                    'FormType': FormType,
                    'BadgeColor': BadgeColor
                }
            };
            await User.updateOne({ "_id": decoded._id }, {
                $pull: pullObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/addCompanyToList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const ListName = req.body["ListName"];
        const Company = req.body["Company"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (!userLists.myLists[ListName]['Companies'].includes(Company)) {
            const myArray = `myLists.${ListName}.Companies`;
            const pushObject = {
                [myArray]: Company
            };
            await User.updateOne({ "_id": decoded._id }, {
                $push: pushObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/removeCompanyFromList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const ListName = req.body["ListName"];
        const Company = req.body["Company"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (userLists.myLists[ListName]['Companies'].filter((company) => company.cik === Company.cik)) {
            const companyIndex = userLists.myLists[ListName]['Companies'].filter((company, index) => { if (company.cik === Company.cik) { return index; } });
            const myArray = `myLists.${ListName}.Companies`;
            const pullObject = {
                [myArray]: Company
            };
            await User.updateOne({ "_id": decoded._id }, {
                $pull: pullObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/addFilingToList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const filingItem = req.body['filingItem'];
        const ListName = req.body["ListName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (!userLists.myLists[ListName]['IndividualFilings'].includes(filingItem)) {
            const myArray = `myLists.${ListName}.IndividualFilings`;
            const pushObject = {
                [myArray]: filingItem
            };
            await User.updateOne({ "_id": decoded._id }, {
                $push: pushObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.post('/removeFilingFromList', async (req, res) => {
    try {
        const token = req.body["x-auth-token"];
        const filingItem = req.body['filingItem'];
        const ListName = req.body["ListName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        if (!userLists.myLists[ListName]['IndividualFilings'].includes(filingItem)) {
            const myArray = `myLists.${ListName}.IndividualFilings`;
            const pushObject = {
                [myArray]: filingItem
            };
            await User.updateOne({ "_id": decoded._id }, {
                $pull: pushObject
            });
        }
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (err) {
        winston.error('Internal Server Error');
        res.status(500).send('Internal Server Error. Please contact developer.');
    }
});

router.get("/getListFilings", async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const listName = req.query["listName"];
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        let userList = userLists.myLists[listName];
        if (userList) {
            // Fetch Filings for .FormTypes and .Companies
            fetchFilings(decoded, userList).then((result) => {
                winston.info("Successfully queried", req.url);
                res.send(result);
            });
        }
        else {
            // If no List, send empty array
            res.send([]);
        }
    }
    catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});
// * These two are tied together
async function fetchFilings(decoded, userList) {
    var filings = [];
    var identifier = 0;

    // * Fetch Filings For Companies List
    var badgeColors = Object.values(filingColors);
    var badgeColor = 'primary';
    var ftColor = 0;
    var company = '';
    var companyindex = 0;
    if (userList.Companies) {
        for (companyindex = 0; companyindex < userList.Companies.length; companyindex++) {
            company = userList.Companies[companyindex];
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
                    var filingDate = $(this).find('dateFiled').text().split("-");
                    filingDate = filingDate.concat(filingDate.shift()).join("/");
                    filings.push({
                        'cik': company.cik,
                        'identifier': identifier++,
                        'companyName': company.companyName.split('&amp;').join('&'),
                        'formType': $(this).find('type').text(),
                        'fileLink': $(this).find('filingHREF').text(),
                        'title': $(this).find('formName').text().split('&amp;').join('&'),
                        'filingDate': filingDate,
                        'badgeColor': badgeColor
                    });
                });
            }).catch(error => {
                winston.error(`Fetching data FAILED for company: ${company.cik}`);
            });
        }
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
    }

    if (userList.FormTypes) {
        // * Fetch Filings For FormTypes
        var FTindex = 0;
        for (FTindex = 0; FTindex < userList.FormTypes.length; FTindex++) {
            var promise = await htmlToJson.request(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=${userList.FormTypes[FTindex].FormType}&company=&dateb=&owner=include&start=0&count=100&output=atom`, {
                'items': ['entry', function ($item) {
                    let title = $item.find('title').text().split('&amp;').join('&');
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
                        'identifier': identifier++,
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
    }

    // * Sort filings by date
    filings.sort(function (a, b) {
        if (b.filingDate.split(" ")[0].split("/")[0] - a.filingDate.split(" ")[0].split("/")[0] === 0) {
            return (b.filingDate.split(" ")[0].split("/")[1] - a.filingDate.split(" ")[0].split("/")[1]);
        }
        return (b.filingDate.split(" ")[0].split("/")[0] - a.filingDate.split(" ")[0].split("/")[0]);
    });

    // * Sort filings by time
    filings.sort(function (a, b) {
        if (b.filingDate.split(" ")[0].split("/")[0] - a.filingDate.split(" ")[0].split("/")[0] === 0) {
            if (b.filingDate.split(" ")[0].split("/")[1] - a.filingDate.split(" ")[0].split("/")[1] === 0) {
                if (a.filingDate.split(" ")[1] && b.filingDate.split(" ")[1]) {
                    var bHour = parseInt(b.filingDate.split(" ")[1].split(":")[0]);
                    var aHour = parseInt(a.filingDate.split(" ")[1].split(":")[0]);
                    if (bHour != 12 && (b.filingDate.split(" ")[2] === "PM")) {
                        bHour += 12;
                    }
                    if (aHour != 12 && (a.filingDate.split(" ")[2] === "PM")) {
                        aHour += 12;
                    }
                    var secondDateTime = new Date(parseInt(b.filingDate.split(" ")[0].split("/")[2]), parseInt(b.filingDate.split(" ")[0].split("/")[0]), parseInt(b.filingDate.split(" ")[0].split("/")[1]), bHour, parseInt(b.filingDate.split(" ")[1].split(":")[1]), parseInt(b.filingDate.split(" ")[1].split(":")[2]), 0);
                    var firstDateTime = new Date(parseInt(a.filingDate.split(" ")[0].split("/")[2]), parseInt(a.filingDate.split(" ")[0].split("/")[0]), parseInt(a.filingDate.split(" ")[0].split("/")[1]), aHour, parseInt(a.filingDate.split(" ")[1].split(":")[1]), parseInt(a.filingDate.split(" ")[1].split(":")[2]), 0);
                    return (firstDateTime - secondDateTime);
                }
            }
        }
    });

    return filings;
}

module.exports = router;