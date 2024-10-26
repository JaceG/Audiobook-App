// imports
const express = require('express');
const User = require('../models/user');

// Single routing
const router = express.Router();

router.post('/register', async function (req, res, next) {
    console.log("Router Working");

    await User.create({
        email: 'jace@gmail.com',
        phone: '6195559253',
        name: 'Jace',
        password: '*********',
        status: 1,
        role: 'user'
    });
    res.json({ message: 'user" registered successfully' });
})

router.post('/login', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

router.post('/forget-password', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

router.post('/change-password', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

module.exports=router;