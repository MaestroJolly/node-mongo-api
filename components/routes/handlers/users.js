"use strict";

const usersService = require('../../services/users');
const users = {};

users.create = function (req, res) {
    usersService.create(req.body).then(response =>{
       res.status(200).send(response);
    }).catch(err =>{
        res.status(400).send(err);
    });
}

users.find = function(req, res) {
    usersService.find(req.query).then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(400).send(err);
    })
}

module.exports = users;