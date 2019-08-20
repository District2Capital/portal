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
        required: true,
        default: {}
    },
    recentFilings: {
        type: Array,
        required: true,
        default: []
    },
    recentSearches: {
        type: Array,
        required: true,
        default: []
    },
    historicalSearches: {
        type: Array,
        required: true,
        default: []
    },
    savedFilings: {
        type: Array,
        required: true,
        default: []
    },
    historicalSavedFilings: {
        type: Array,
        required: true,
        default: []
    },
    savedCompanies: {
        type: Array,
        required: true,
        default: []
    },
    historicalSavedCompanies: {
        type: Array,
        required: true,
        default: []
    },
    savedFormTypes: {
        type: Array,
        required: true,
        default: []
    },
    historicalSavedFormTypes: {
        type: Array,
        required: true,
        default: []
    },
    recentCompanySearches: {
        type: Array,
        required: true,
        default: []
    },
    recentFormTypeSearches: {
        type: Array,
        required: true,
        default: []
    },
    stripeID: {
        type: String,
        required: true,
        default: ''
    },
    stripePlan: {
        type: String,
        required: true,
        default: 'basic_package'
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