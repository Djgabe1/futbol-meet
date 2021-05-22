const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//conexion

const {conexion } = require('./sql/database');


const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(cors());
require('dotenv').config();

//Routes
app.use(require('./routes/games'));

//Port
const port = process.env.PORT;

//Starting on port
app.listen(port, ()=>{
    console.log('Server starting');
})