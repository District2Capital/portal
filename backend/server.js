const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const winston = require('winston');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./startup/logging')(app);
require('dotenv').config();
require('./startup/db')();
require('./startup/config')();
require('./startup/routes')(app);

app.set('port', process.env.API_PORT || 3001);

app.listen(app.get('port'), 'localhost', function () {
  var host = this.address().address;
  var port = this.address().port;
  console.log(`listening at http://${host}:${port}`);
});