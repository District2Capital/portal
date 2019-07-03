const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const winston = require("winston");
const mongoose = require("mongoose");
const Fawn = require('fawn');
Fawn.init(mongoose);

router.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
});

router.post("/updateViewedFilings", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        /*new Fawn.Task()
            .update(
                "users",
                { "_id": decoded._id },
                { $addToSet: { "recents": req.body.htmlLink } }
            )
            .run();*/
        var results = await User.updateOne({ "_id": decoded._id }, {
            $addToSet: {
                "recentFilings": {
                    htmlLink: req.body.htmlLink,
                    badgeColor: req.body.badgeColor,
                    formType: req.body.formType,
                    title: req.body.title,
                    filingDate: req.body.filingDate
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/updateRecentSearches", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        var results = await User.updateOne({ "_id": decoded._id }, {
            $addToSet: {
                "recentSearches": {
                    searchText: req.body.searchString,
                    dateSearched: Date.now()
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

module.exports = router;
