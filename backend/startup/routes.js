const express = require('express');
const edgar = require('../routes/edgar');
const sec = require('../routes/sec');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/edgar', edgar);
    app.use('/api/sec', sec);
}