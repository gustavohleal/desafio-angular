"use strict";

var express = require('express');

var routes = require('./routes');

var cors = require('cors');

var swaggerUi = require('swagger-ui-express');

var app = express();

var swaggerDocument = require('./swagger.json');

if (process.env.NODE_ENV === "dev") {
  require('dotenv').config();

  app.use(cors());
} else {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
  });
}

app.use(express.json());
app.use(routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.PORT || 3333);