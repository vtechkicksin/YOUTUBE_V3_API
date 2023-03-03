const dotenv = require("dotenv").config()
const express = require('express')
const videoModel = require('../model/videoModel')
const router = new express.Router();
const controller = require("../controller/index")



router.get(
'/getAllData',
controller.getAllData
);


router.get(
'/details', 
controller.searching
);  

module.exports = router;