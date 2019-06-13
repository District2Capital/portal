const express = require('express');
const router = express.Router();
const Data = require('../models/data');
const htmlToJson = require('html-to-json');
const winston = require("winston");

router.get('/getData', async (req, res) => {
    var data = null;
    try {
        var promise = htmlToJson.request(`https://www.sec.gov/Archives/edgar/xbrlrss.all.xml`, {
            'items': ['item', function ($item) {
                return {
                    'title': $item.find('title').text(),
                    'formType': $item.find('description').text(),
                    'filingDate': $item.find('pubDate').text(),
                    'fileLink': $item.find('guid').text().slice(0, -8) + 'index.htm'
                };
            }]
            }, function (err, result) {
                console.log(result);
            });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
    res.status(200);
    winston.info(`${req.url} Request Successful`);
});

router.get('/', (req, res) => {
    winston.info(`${req.url} Request Successful`);
    res.status(200).send('Request success');
});

module.exports = router;