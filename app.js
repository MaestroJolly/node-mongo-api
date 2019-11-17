'use strict';

const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({path:`${__dirname}/.env`});
const express = require('express');
const mongo = require('mongodb').MongoClient;
const PORT = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res)=>{
    res.send({
        greetings: 'Hello World'
    });
});

app.listen(PORT, ()=>{
    console.log(`Application is listening to PORT: ${PORT}`);
})