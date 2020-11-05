const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

if ( process.env.NODE_ENV === "dev"){
    require('dotenv').config();
}


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use ( express.json() );
app.use ( routes );

app.listen ( 3333 );