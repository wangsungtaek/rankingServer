const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
        title: 'SSukSSuk API',
        version: '1.0.0',
        description: 'SSSS API with express',
    },
    host: 'localhost:3001',
    basePath: '/'
  },
  apis: ['./routes/*.js', './swagger/*']
};

const specs = swaggereJsdoc(options);
module.exports = {
    swaggerUi,
    specs
};