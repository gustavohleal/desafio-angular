const express = require('express');
const routes = express.Router();

const FormController = require('./controllers/FormController');
const TableController = require('./controllers/TableController');

const FileController = require('./controllers/FileController');


routes.get( '/formulario', FormController.generateForm );

routes.get( '/arquivo/:nome', FileController.getFile );
 
routes.get( '/tabela', TableController.getTable );

module.exports = routes;