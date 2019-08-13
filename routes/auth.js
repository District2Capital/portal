const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const winston = require("winston");
const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const passport = require('passport');

router.post('/', async (req, res) => {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log('errors:', error);

    console.log('Searching for user...');
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');
    console.log('User found!');

    console.log('Validating password...');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');
    console.log('Password validated...');

    console.log('Returning jwt authentication token...');
    const token = user.generateAuthToken();
    res.send(token);
});

router.post('/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        winston.debug(req);
        res.send('Google Auth successful');
    });

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;