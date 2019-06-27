const config = require('config');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('../config/openapi');

module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}