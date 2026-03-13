const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// Swagger route
routes.use('/', require('./swagger'));

// Home route
routes.get('/', (req, res) => { 
  res.send("Hello World"); 
});

// Contacts routes
routes.get('/contacts', contactsController.getAll); 
routes.get('/contacts/:id', contactsController.getSingle); 
routes.post('/contacts', contactsController.createContact);
routes.put('/contacts/:id', contactsController.updateContact);
routes.delete('/contacts/:id', contactsController.deleteContact);

module.exports = routes;