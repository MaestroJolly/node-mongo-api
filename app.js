'use strict';

const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({path:`${__dirname}/.env`});
const express = require('express');
const mongo = require('mongodb').MongoClient;
const PORT = process.env.PORT || '3000';
const app = express();
const url = process.env.MONGOURL;

const dbName = process.env.DATABASENAME;

const mongoObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res)=>{
    res.send({
        greetings: 'Hello World'
    });
});

mongo.connect(url, mongoObject, (err, client) => {

  if (err) {
    console.error(err)
    return
  }
  
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  const collection = db.collection('users');

//   collection.insertOne({name: 'john doe'})
//   .then(item => {
//     console.log(item)
//   })
//   .catch(err => {
//   console.error(err)
//   })

  collection.findOne({name: 'john doe'})
  .then(item => {
    console.log(item)
  })
  .catch(err => {
  console.error(err)
  })
 
  client.close();
})

app.listen(PORT, ()=>{
    console.log(`Application is listening to PORT: ${PORT}`);
})