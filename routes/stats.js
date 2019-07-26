const express = require('express');
const router = express.Router();
const winston = require("winston");
const db = require('../models/secData');
const { User } = require("../models/user");
const config = require('config');
const jwt = require("jsonwebtoken");

router.get('/getFilingFrequencyData', async (req, res) => {
    var data = null;
    try {
        // Fetch array of distinct form types
        // For each item, count how many documents in database, place in array, sort, and return
        let distinctItems = await db.distinct('formType');
        var itemFrequency = {};
        const request = distinctItems.map(async (formType, index) => {
            let freq = await db.find({ 'formType': formType });
            itemFrequency[formType] = freq.length;
        });
        Promise.all(request).then(() => {
            var sortable = [];
            for (var form in itemFrequency) {
                sortable.push([form, itemFrequency[form]]);
            }
            sortable.sort(function (a, b) {
                return b[1] - a[1];
            });
            res.status(200).send(Object.entries(sortable).splice(0, req.query.count));
            winston.info(`${req.url} Request Successful`);
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getRecentlyViewedFilingData', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        // Get user document to find recent filings
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        res.status(200).format({
            'application/json': function () {
                res.send({ data: user.recentFilings });
            }
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getRecentSearchData', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        // Get user search queries
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        res.status(200).format({
            'application/json': function () {
                res.send({ data: user.recentSearches });
            }
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getRecentCompanySearchData', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        // Get user search queries
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        res.status(200).format({
            'application/json': function () {
                res.send({ data: user.recentCompanySearches });
            }
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getRecentFormTypeSearchData', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        // Get user search queries
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        res.status(200).format({
            'application/json': function () {
                res.send({ data: user.recentFormTypeSearches });
            }
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

router.get('/getRecentSavedFilings', async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        // Get user saved Filings
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        res.status(200).format({
            'application/json': function () {
                res.send({ data: user.historicalSavedFilings });
            }
        });
    } catch (e) {
        winston.error(`${req.url} Request Failure`);
        res.status(500);
    }
});

module.exports = router;