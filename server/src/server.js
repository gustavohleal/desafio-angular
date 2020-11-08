const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const app = express();

const swaggerDocument = require('./swagger.json');

if ( process.env.NODE_ENV === "dev"){
    require('dotenv').config();
    app.use(cors());
} else {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });
}


app.use ( express.json() );
app.use ( routes );
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen ( process.env.PORT || 3333 );