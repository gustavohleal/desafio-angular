"use strict";

var express = require('express');

var routes = express.Router();

var FormController = require('./controllers/FormController');

var TableController = require('./controllers/TableController');

var FileController = require('./controllers/FileController');

routes.get('/formulario', FormController.generateForm);
routes.get('/arquivo/:nome', FileController.getFile);
routes.get('/tabela', TableController.getTable);
module.exports = routes;