const express = require('express');
const inputGoogleSheets = require('../models/googleSheets');
const router = express.Router();
const Data = require('../models/secData');
const htmlToJson = require('html-to-json');
const winston = require("winston");
const db = require('../models/secData');
const axios = require('axios');
const cheerio = require('cheerio');
const { User, validate } = require("../models/user");
const config = require('config');
const jwt = require('jsonwebtoken');

router.get('/getData', async (req, result) => {
    try {
        var resultObject = [];
        var xmlLink = '';
        await axios.get(`${req.query.link}`).then(async function (res) {
            // * Parse data with cheerio
            // * Cheerio each() function doesn't work due to synchronous nature
            const $ = cheerio.load(res.data);
            var rows = $("table.tableFile").find("tr");
            for (var i = 0; i < rows.length; i++) {
                var current = rows[i];
                var description = $(current).children('td:nth-child(2)').text();
                var templink = $(current).children('td').find('a').attr('href');
                xmlLink = "https://sec.gov" + templink;
                if (templink) {
                    await axios.get(xmlLink).then(linkresult => {
                        resultObject.push({ title: description, data: linkresult.data, docLink: xmlLink });
                    }).catch(error => {
                        winston.error('Issue with sending json');
                    });
                }
            }
            result.format({
                'application/json': function () {
                    result.send({ link: xmlLink, htmlArray: resultObject, htmllink: req.query.link });
                }
            });
        }).catch(error => {
            winston.error(`Fetching data FAILED from ${req.query.link}l`);
        });
    }
    catch{
        winston.error(`Fetching data FAILED from ${req.query.link}l`);
    }
});

router.get('/verifyFilingSaved', async (req, result) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var savedFiling = {};
        var name = await User.find({ "_id": decoded._id, "savedFilings": { $elemMatch: { fileLink: req.query.link } } });
        if (name["0"]) { savedFiling = true; }
        else { savedFiling = false; }
        result.format({
            'application/json': function () {
                result.send({ savedFiling: savedFiling });
            }
        });
    }
    catch{
        winston.error(`Fetching data FAILED from ${req.query.link}l`);
    }
});

module.exports = router;