const dotenv = require("dotenv").config();
const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended:false})); // this is to parse the request ,or simply to use req.body
app.use(bodyParser.json());

const Port = process.env.PORT || 3000; //either from .env


mongoose.connect('mongodb://localhost:27017/YT_test', { useNewUrlParser: true })
.then(()=>{
    app.listen(Port,()=>{
        console.log(`We are flying on Port ${Port}`);
    })
    require("./schedule/job");
})