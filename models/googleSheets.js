var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('../District2CapitalGoogleSheets.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1RV46luph_aEURrcXLLFC5C3NksRTM6uF_P2m6uoDR78');

function inputGoogleSheets(name, type, date, link) {
    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {
        if (name && type && date && link) {
            console.log(name, type, date, link);
            doc.addRow(2, {
                Title: name,
                Type: type,
                Date: date,
                Link: link
            }, function (err, row) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('New row created in google sheets:', row)
                }
            });
        }
    });
}

module.exports = inputGoogleSheets;