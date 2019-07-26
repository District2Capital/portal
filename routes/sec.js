const express = require('express');
const inputGoogleSheets = require('../models/googleSheets');
const router = express.Router();
const Data = require('../models/secData');
const htmlToJson = require('html-to-json');
const winston = require("winston");
const db = require('../models/secData');
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/getData', async (req, res) => {
    try {//https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${company.cik}&type=&dateb=&owner=exclude&count=10&output=xml
        // * First case, only form type is queried
        var queryURL = '';
        var companiesBool = false;
        if (req.query.type && (!req.query.cik && !req.query.company)) {
            queryURL = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=${req.query.type}&company=&dateb=&owner=include&start=0&count=100&output=atom`;
        }
        else if (req.query.company && !req.query.cik) {
            companiesBool = true;
            await axios.get(`https://www.sec.gov/cgi-bin/browse-edgar?company=${req.query.company}&owner=exclude&action=getcompany`).then(async secresults => {
                // * Parse data with cheerio
                // * SEC has two results - list of companies or it spits back filings
                const $ = cheerio.load(secresults.data);
                if ($('div.companyInfo span.companyName a').text()) {
                    let companySearchName = $('div.companyInfo span.companyName').text().split('&amp;').join('&');
                    companySearchName = companySearchName.slice(0, companySearchName.indexOf('CIK'));
                    let companySearchCIK = $('div.companyInfo span.companyName a').text().slice(0, 10);
                    let companySearchLocation = '';
                    $('div.companyInfo p.identInfo a').each(function (i, row) {
                        if ($(this).attr('href').indexOf('State')) {
                            companySearchLocation = $(this).attr('href').slice($(this).attr('href').indexOf('State') + 6, $(this).attr('href').indexOf('State') + 8);
                        }
                    });
                    // * Iterate through filings
                    // * Parse data with cheerio
                    // * Cheerio each() function doesn't work due to synchronous nature
                    var arrayFilings = [];
                    var rows = $("table.tableFile2").find("tr");
                    for (var i = 1; i < rows.length; i++) {
                        var current = rows[i];
                        let title = $(current).children('td:nth-child(3)').text().split('&amp;').join('&');
                        let type = $(current).children('td:nth-child(1)').text();
                        let date_time = (new Date($(current).children('td:nth-child(4)').text())).toLocaleString();
                        let link = "https://sec.gov" + $(current).children('td:nth-child(2)').attr('href');
                        arrayFilings.push({
                            'title': title,
                            'formType': type,
                            'filingDate': date_time,
                            'fileLink': link
                        });
                        winston.info(arrayFilings[i - 1]);
                    }
                    res.status(200).send({ items: arrayFilings });
                }
                else {
                    var arrayCompanies = [];
                    $('table.tableFile2 tbody tr').each(function (i, row) {
                        if (i > 0) {
                            arrayCompanies.push({
                                cik: $(this).find('td:nth-child(1) a').text(),
                                companyName: $(this).find('td:nth-child(2)').html().split("<br>")[0].split('&amp;').join('&'),//.text(),
                                location: $(this).find('td:nth-child(3) a').text()
                            });
                        }
                    });
                    // * Return companies and companiesBool in res object
                    res.status(200).send({ companiesBool, data: arrayCompanies });
                }
            }).catch(error => {
                winston.error(`Fetching data FAILED`);
            });
        }
        else if (!(req.query.type || (req.query.cik || req.query.company))) {
            queryURL = 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&output=atom';
        }
        else {
            queryURL = `https://www.sec.gov/cgi-bin/browse-edgar?CIK=${req.query.cik}&company=${req.query.company}&type=${req.query.type}&owner=exclude&action=getcompany&output=atom`;
        }
        // * BREAKING CHANGE - SEC can display list of companies if company name isn't individual
        if (!companiesBool) {
            var promise = await htmlToJson.request(queryURL, {
                'items': ['entry', function ($item) {
                    let title = $item.find('title').text().split('&amp;').join('&');
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
                winston.info(result);
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
        }
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

router.get('/getCompanies', async (req, res) => {
    try {
        var companyString = req.query.company;
        var arrayCompanies = [];
        await axios.get(`https://www.sec.gov/cgi-bin/browse-edgar?company=${companyString}&owner=exclude&action=getcompany`).then(async secresults => {
            // * Parse data with cheerio
            // * SEC has two results - list of companies or it spits back filings
            const $ = cheerio.load(secresults.data);
            if ($('div.companyInfo span.companyName a').text()) {
                let companySearchName = $('div.companyInfo span.companyName').text().split('&amp;').join('&');
                companySearchName = companySearchName.slice(0, companySearchName.indexOf('CIK'));
                let companySearchCIK = $('div.companyInfo span.companyName a').text().slice(0, 10);
                let companySearchLocation = '';
                $('div.companyInfo p.identInfo a').each(function (i, row) {
                    if ($(this).attr('href').indexOf('State')) {
                        companySearchLocation = $(this).attr('href').slice($(this).attr('href').indexOf('State') + 6, $(this).attr('href').indexOf('State') + 8);
                    }
                });
                arrayCompanies.push({
                    cik: companySearchCIK,
                    companyName: companySearchName,
                    location: companySearchLocation
                });
            }
            else {
                $('table.tableFile2 tbody tr').each(function (i, row) {
                    if (i > 0) {
                        arrayCompanies.push({
                            cik: $(this).find('td:nth-child(1) a').text(),
                            companyName: $(this).find('td:nth-child(2)').html().split("<br>")[0].split('&amp;').join('&'),//.text(),
                            location: $(this).find('td:nth-child(3) a').text()
                        });
                    }
                });
            }
        }).catch(error => {
            winston.error(`Fetching data FAILED`);
        });
        res.format({
            'application/json': function () {
                res.send({ companies: arrayCompanies });
            }
        });
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