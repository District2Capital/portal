const express = require('express');
const edgar = require('../routes/edgar');

module.exports = function(app) {
    //app.use('/', (req, res) => {res.send("Horray!"); console.log('success!!!');})
    app.use(express.json());
    app.use('/api/edgar', edgar);
}