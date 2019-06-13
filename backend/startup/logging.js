const winston = require('winston');

module.exports = function(app){
    winston.add(new winston.transports.File({
        filename: './logs/uncaughtExceptions.log',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.timestamp()
        )
    }));
    
    winston.add(new winston.transports.File({ 
        filename: './logs/logfile.log',
        level: 'info',
        json: true,
        format: winston.format.combine(
            winston.format.timestamp()
        )
    }));

    winston.add(new winston.transports.Console({ 
        level: 'debug',
        json: true,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
}