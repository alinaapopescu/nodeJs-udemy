const express = require('express');
// Import metode din controller
const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps')
const router = express.Router();


module.exports = router;