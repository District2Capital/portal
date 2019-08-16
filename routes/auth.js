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
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) res.status(400).send('email not in db');
        else {
            let token = crypto.randomBytes(20).toString('hex');
            let id = new mongoose.Types.ObjectId(user._id);
            let query = {
                '_id': id
            };
            let updateObject = {
                $set: {
                    'resetPasswordToken': token,
                    'resetPasswordExpires': Date.now() + 360000
                }
            };
            await User.update(query, updateObject);
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
                    `http://localhost:3000/reset/${token}\n\n` +
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
        }
    } catch (err) {
        winston.debug(err);
        res.status(500).send("internal server error");
    }
});

router.post('/changePassword', async (req, res) => {
    try {
        winston.debug(req.body.resetPasswordToken);
        winston.debug(req.body.password);
        let user = await User.findOne({
            $and: [{ resetPasswordToken: req.body.resetPasswordToken },
            {
                resetPasswordExpires: {
                    $gt: Date.now()
                }
            }]
        });
        winston.info('user object: ' + user);
        //console.dir(user);
        if (!user) res.status(400).send('failed to update password');
        else {
            winston.debug(user._id);
            let id = new mongoose.Types.ObjectId(user._id);
            let query = {
                '_id': id
            };
            let salt = await bcrypt.genSalt(10);
            let password = await bcrypt.hash(req.body.password, salt);
            let updateObject = {
                $set: {
                    'password': password
                }
            };
            await User.update(query, updateObject)
            const token = user.generateAuthToken();
            res.status(200)
                .header("x-auth-token", token)
                .header("access-control-expose-headers", "x-auth-token")
                .send(_.pick(user, ["_id", "name", "email"]));
        }
    } catch (err) {
        winston.debug(err);
        res.status(500).send("internal server error");
    }
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