const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const winston = require('winston');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Static Assets - Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};

app.use(forceSSL());

require('./startup/logging')(app);
require('dotenv').config();
require('./startup/db')();
require('./startup/config')();
require('./startup/routes')(app);

app.set('port', process.env.PORT || process.env.API_PORT || 3001);

if (process.env.NODE_ENV === "production") {
  // Right before your app.listen(), add this:
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });
  app.listen(app.get('port'));
}
else {
  app.listen(app.get('port'), 'localhost', function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log(`listening at http://${host}:${port}`);
  });
}