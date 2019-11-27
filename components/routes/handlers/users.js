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

users.findAll = function(req, res){
    usersService.findAll(req).then((response) => {
        res.status(200).send(response);
    }).catch((err) =>{
        res.status(400).send(err);
    })
    // async (req) => {
    //     try {
    //         await usersService.findAll();
    //     } catch(error){
    //         return error;
    //     }
    // }
}

users.update = function(req, res){
    usersService.update(req.body).then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        console.log(err);
        res.status(400).send(err);
    })
}

module.exports = users;