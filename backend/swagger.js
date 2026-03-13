const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts API',
    description: 'Contacts API for CSE 341',
  },
  host: 'cse341-1-m8o4.onrender.com', 
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);