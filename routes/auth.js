// imports
const express = require('express');

// Single routing
const router = express.Router();

router.post('/register', function (req, res, next) {
    console.log("Router Working");
    res.end();
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