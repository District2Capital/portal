const express = require('express');
const inputGoogleSheets = require('../models/googleSheets');
const router = express.Router();
const Data = require('../models/secData');
const htmlToJson = require('html-to-json');
const winston = require("winston");
const db = require('../models/secData');

router.get('/getData', async (req, res) => {
    var data = null;
    try {
        winston.info('Sending Request to SEC...');
        var promise = await htmlToJson.request(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=${req.query.cik}&type=${req.query.type}&company=${req.query.company}&dateb=&owner=include&start=0&count=100&output=atom`, {
            'items': ['entry', function ($item) {
                let title = $item.find('title').text();
                let type = $item.find('category').attr('term');
                let date_time = (new Date($item.find('updated').text())).toLocaleString();
                let link = $item.find('link').attr('href');
                return {
                    'title': title,
                    'formType': type,
                    'filingDate': date_time,
                    'fileLink': link
                };
            }]
        }, async function (err, result) {
            var items = result.items;
            winston.debug("Number of items: " + items.length);
            for (var index = 0; index < items.length; index++) {
                let item = await db.find({ title: items[index].title }, async function (err, results) {
                    if (results.length === 0) { winston.debug(items[index]); }
                    if (!results.length) {
                        let newItem = new db(items[index]);
                        await newItem.save();
                        inputGoogleSheets(newItem.title, newItem.formType, newItem.filingDate, newItem.fileLink);
                    }
                });
            }
            res.status(200).send(result);
            winston.info(`${req.url} Request Successful`);
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getHistoricalData', async (req, res) => {
    var data = null;
    try {
        let items = await db.find({});
        items = items.splice(0, req.query.number)
        winston.debug("Number of items: " + items.length);
        res.status(200).send(items);
        winston.info(`${req.url} Request Successful`);
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/', (req, res) => {
    winston.info(`${req.url} Request Successful`);
    res.status(200).send('Request success');
});

module.exports = router;