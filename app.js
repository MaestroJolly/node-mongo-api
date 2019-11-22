'use strict';

const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({path:`${__dirname}/.env`});
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || '3000';
const app = express();
const users = require('./components/routes');
const url = process.env.MONGOURL;

const mongoObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', users);

app.get('*', (req, res)=>{
    res.send({
        greetings: 'Hello World'
    });
});

mongoose.connect(url, mongoObject)
.then(() =>{
  console.log("Database Connection successful");
}).catch((err) =>{
    console.log(`An error has occurred with the database connection - ${err}`);
})
 

app.listen(PORT, ()=>{
    console.log(`Application is listening to PORT: ${PORT}`);
})