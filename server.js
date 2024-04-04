// Imports
const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({path : './config/config.env'});

const app = express();

// Rouate files
const bootcamps = require('./routes/bootcamps')

// Pt Middleware
const logger = (req, res, next) =>{
  req.hello = "Hello World";
  console.log("Middleware ran");
  next();

}

app.use(logger);

// Mount router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;


app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  );