const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:false})); // this is to parse the request ,or simply to use req.body
app.use(bodyParser.json());

const Port = process.env.PORT || 3000; //either from .env

app.listen(()=>{
    console.log(`We are flying on Port ${Port}`);
})