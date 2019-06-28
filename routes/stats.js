const express = require('express');
const router = express.Router();
const winston = require("winston");
const db = require('../models/secData');

router.get('/getData', async (req, res) => {
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

module.exports = router;