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
        winston.info(userListNames);
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
        winston.info(userListContents);
        res.send(userListContents);
    }
    catch (err) {
        winston.error(`Error with ${req.url} route.`);
    }
});

router.get("/getListFilings", async (req, res) => {
    try {
        const token = req.query["x-auth-token"];
        const listName = req.query["listName"];
        winston.info('list name: ' + listName);
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        let userLists = await User.findById(decoded._id).select("myLists");
        let userList = userLists.myLists[listName];
        if (userList) {
            // Fetch Filings for .FormTypes and .Companies
            fetchFilings(decoded, userList).then((result) => {
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

async function fetchFilings(decoded, userList) {
    var filings = [];
    var identifier = 0;

    // * Fetch Filings For Companies List
    var badgeColors = Object.values(filingColors);
    var badgeColor = 'primary';
    var ftColor = 0;
    var company = '';
    var companyindex = 0;
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

    // * Sort filings by date
    filings.sort(function (a, b) {
        if (b.filingDate.split(" ")[0].split("/")[0] - a.filingDate.split(" ")[0].split("/")[0] === 0) {
            return (b.filingDate.split(" ")[0].split("/")[1] - a.filingDate.split(" ")[0].split("/")[1]);
        }
        return (b.filingDate.split(" ")[0].split("/")[0] - a.filingDate.split(" ")[0].split("/")[0]);
    });

    // * Sort filings by time
    filings.sort(function (a, b) {
        winston.info(a.filingDate);
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