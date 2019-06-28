const express = require('express');
const edgar = require('../routes/edgar');
const sec = require('../routes/sec');
const auth = require('../routes/auth');
const users = require('../routes/users');
const filingdoc = require('../routes/filingdoc');
const stats = require('../routes/stats');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/edgar', edgar);
    app.use('/api/sec', sec);
    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.use('/api/filingdoc', filingdoc);
    app.use('/api/stats', stats);
}