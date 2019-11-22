"use strict";

const mongoose = require('mongoose');
const usersModel = require('../models/users');

function users(params) {   
    usersModel.create(params)
    .then(response =>{
        return response;
    }).catch(err=>{
        return err;
    })
}

module.exports = users;