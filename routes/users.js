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

router.get("/savedFilings", async (req, res) => {
    const token = req.query["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var userSavedFilings = await User.findById(decoded._id).select("savedFilings");
        winston.info("Successfully queried /savedFilings");
        res.format({
            'application/json': function () {
                res.status(200).send(userSavedFilings);
            }
        });
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
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
            $push: {
                "recentFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('User saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/addSavedFiling", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "savedFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "historicalSavedFilings": {
                    $each: [{
                        fileLink: req.body.fileLink,
                        badgeColor: req.body.badgeColor,
                        formType: req.body.formType,
                        title: req.body.title,
                        filingDate: req.body.filingDate
                    }],
                    $position: 0
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/removeSavedFiling", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        var user = await User.findById(decoded._id).select("-password");
        await User.updateOne({ "_id": decoded._id }, {
            $pull: {
                "savedFilings": {
                    //$each: [{
                    fileLink: req.body.fileLink,
                    badgeColor: req.body.badgeColor,
                    formType: req.body.formType,
                    title: req.body.title,
                    filingDate: req.body.filingDate
                    //}]
                }
            }
        });
        winston.info("Successfully queried", req.url);
        res.status(200).send('Filing saved successfully.');
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
});

router.post("/updateRecentSearches", async (req, res) => {
    const token = req.body["x-auth-token"];
    var decoded = null;
    try {
        decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        // * Similar Search Code to find the search in DB
        // var similarSearch = await User.find({ "_id": decoded._id }, {
        //     "recentSearches": {
        //         $elemMatch: {
        //             companySearchString: req.body.companySearchString,
        //             cikSearchString: req.body.cikSearchString,
        //             formTypeSearchString: req.body.formTypeSearchString
        //         }
        //     }
        // });
        var results = await User.updateOne({ "_id": decoded._id }, {
            $push: {
                "recentSearches": {
                    $each: [{
                        companySearchString: req.body.companySearchString,
                        cikSearchString: req.body.cikSearchString,
                        formTypeSearchString: req.body.formTypeSearchString,
                        dateSearched: Date.now()
                    }],
                    $position: 0
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
