const express = require('express');
const inputGoogleSheets = require('../models/googleSheets');
const router = express.Router();
const Data = require('../models/secData');
const htmlToJson = require('html-to-json');
const winston = require("winston");
const db = require('../models/secData');

router.get('/getData', async (req, res) => {
    // try{
    //     axios.get()
    // }
    res.status(200).send('Queried api/filingdoc/getData route successfully.');
});

module.exports = router;