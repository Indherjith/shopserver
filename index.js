const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());

const {stockRouter} = require('./Routes/stock.router')

const {connection} = require("./config/db")
require("dotenv").config();
const PORT =process.env.PORT || 5000;

server.use("/",stockRouter)



server.listen(PORT,async()=>{
    try{
        await connection;
        console.log("DataBase is Connected");
        console.log(`listerning on port ${PORT}`);
    }
    catch{
        console.log(err);
    }
})