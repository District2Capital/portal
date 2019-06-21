const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
    const dbRoute =
        `mongodb+srv://${process.env.D2C_MONGODB_USERNAME}:${process.env.D2C_MONGODB_PASSWORD}@portal-twav4.mongodb.net/test?retryWrites=true&w=majority`;
    //`mongodb://${process.env.D2C_MONGODB_USERNAME}:${process.env.D2C_MONGODB_PASSWORD}@ds231377.mlab.com:31377/d2c`;
    mongoose.connect(dbRoute, { useNewUrlParser: true });

    let db = mongoose.connection;
    db.once('open', () => {
        winston.info('Connected to MongoDB');
        console.log('LOG::Connected to MongoDB');
    });

    db.on('error', () => {
        console.error.bind(console, 'MongoDB connection error:');
        winston.error('MongoDB connection error');
    });
}