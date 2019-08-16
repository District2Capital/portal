const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    myLists: {
        type: Object,
        required: true
    },
    recentFilings: {
        type: Array,
        required: true
    },
    recentSearches: {
        type: Array,
        required: true
    },
    historicalSearches: {
        type: Array,
        required: true
    },
    savedFilings: {
        type: Array,
        required: true
    },
    historicalSavedFilings: {
        type: Array,
        required: true
    },
    savedCompanies: {
        type: Array,
        required: true
    },
    historicalSavedCompanies: {
        type: Array,
        required: true
    },
    savedFormTypes: {
        type: Array,
        required: true
    },
    historicalSavedFormTypes: {
        type: Array,
        required: true
    },
    recentCompanySearches: {
        type: Array,
        required: true
    },
    recentFormTypeSearches: {
        type: Array,
        required: true
    },
    profileImage: {
        data: Buffer,
        contentType: String
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email,
            isAdmin: this.isAdmin
        },
        config.get("jwtPrivateKey")
    );
    return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = {
        name: Joi.string()
            .min(2)
            .max(50)
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(5)
            .max(255)
            .required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;