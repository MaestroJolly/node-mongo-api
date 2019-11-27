"use strict";

const mongoose = require('mongoose');
const usersModel = require('../models/users');
const users = {};


users.create = function (params) {
    return new Promise((resolve, reject) => {
        usersModel.create(params)
        .then(response =>{
            resolve(response.toJSON());
        }).catch(err=>{
            reject(err);
        })
    })
}

users.find = function (params) {
    return new Promise((resolve, reject) => {
        usersModel.find({ name: params.name })
        .then((response) =>{
            resolve(response);
        }).catch(err =>{
            reject(err);
        })
    })
}

users.findAll = function (params){
    // return async (params) => {
    //     try {
    //         return await usersModel.find();
    //     } catch (error) {
    //         return error;
    //     }
    // }
    return new Promise((resolve, reject) => {
        usersModel.find()
        .then((response) =>{
            resolve(response);
        }).catch((err) =>{
            reject(err);
        })
    })
}

users.update = function (params){
    return new Promise((resolve, reject) =>{
        usersModel.updateMany(params)
        .then(response =>{
            resolve(response);
        }).catch(err =>{
            reject(err);
        })
    })
}

module.exports = users;