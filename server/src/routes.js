const express = require('express');
const routes = express.Router();

const FormController = require('./controllers/FormController');


routes.get('/form', FormController.generateForm);

module.exports = routes;