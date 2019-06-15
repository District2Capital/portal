const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        title: String,
        formType: String,
        filingDate: String,
        fileLink: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("SECData", DataSchema, "secData");