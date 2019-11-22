"use strict";

const usersService = require('../../services/users');

function users(req, res) {

    usersService(req.body).then(response =>{
        res.status(201).json(response);
    }).catch(error =>{
        res.status(400).json(error);
    })
}

module.exports = users;