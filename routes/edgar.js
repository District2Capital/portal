const express = require('express');
const router = express.Router();
const Data = require('../models/edgarData');
const htmlToJson = require('html-to-json');
const winston = require("winston");
const db = require('../models/edgarData');

router.get('/getData', async (req, res) => {
    var data = null;
    try {
        var promise = htmlToJson.request(`https://www.sec.gov/Archives/edgar/xbrlrss.all.xml`, {
            'items': ['item', function ($item) {
                let date_time = (new Date($item.find('pubDate').text())).toLocaleString();
                return {
                    'title': $item.find('title').text(),
                    'formType': $item.find('description').text(),
                    'filingDate': date_time,
                    'fileLink': $item.find('guid').text().slice(0, -8) + 'index.htm'
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
        if (req.query.number !== "All") {
            items = items.splice(0, req.query.number)
        }
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