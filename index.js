const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

const Port = process.env.PORT || 3000;
app.listen(()=>{
    console.log(`We are flying on Port ${Port}`);
})