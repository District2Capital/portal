const passport = require('passport');
const { User } = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const winston = require('winston');

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
        function (accessToken, refreshToken, profile, cb) {
            winston.debug(profile);
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return cb(err, user);
            });
        }
    ));
};