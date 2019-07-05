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
        var resultObject = {};
        var xmlLink = 'https://sec.gov';
        await axios.get(`${req.query.link}l`).then(async res => {
            // Parse data with cheerio
            const $ = cheerio.load(res.data);
            xmlLink = xmlLink + $('table.tableFile tr:nth-child(2) td:nth-child(3) a').attr('href');
            winston.info('Filing Loaded using reference:', xmlLink);
            await axios.get(xmlLink).then(linkresult => {
                resultObject = linkresult.data;
            }).catch(error => {
                winston.error('Issue with sending json');
            })
        }).catch(error => {
            winston.error(`Fetching data FAILED from ${req.query.link}l`);
        });
        result.format({
            'application/json': function () {
                result.send({ link: xmlLink, html: resultObject, htmllink: req.query.link });
            }
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