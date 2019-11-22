"use strict";

const express = require('express');
const router = express.Router();
const users = require('./handlers/users');

router.post('/create', users);

module.exports = router;