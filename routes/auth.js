const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const winston = require("winston");
const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const passport = require('passport');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

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

router.post('/forgotPassword', async (req, res) => {
    let user = User.findOne({ email: req.body.email });
    if (!user) res.status(400).send('email not in db');
    const token = crypto.randomBytes(20).toString('hex');
    await user.update({
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 36000
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`
        }
    });

    const mailOptions = {
        from: `${process.env.EMAIL_ADDRESS}`,
        to: `${req.body.email}`,
        subject: 'Link to Reset Password',
        text:
            `You are receiving this because you (or somebody else) requested a password reset for your account. \n\n` +
            `Please click on the following link or paste it into the browser to complete the password reset process (link is only active for one hour): \n\n` +
            `http://portal.district2capital.com/reset/${token}\n\n` +
            `If you did not request this, please ignore the email and your password will remain unchanged.`
    };

    transporter.sendMail(mailOptions, function (err, response) {
        if (err) {
            winston.error('Error sending password reset email.');
        } else {
            winston.info('Email sent to: ' + response.accepted[0]);
            res.status(200).send('recovery email sent');
        }
    });
});

router.get('/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
        // winston.debug(req);
        // res.send('Google Auth successful');
    });

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;