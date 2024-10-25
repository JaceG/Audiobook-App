// imports
const express = require('express');

// Single routing
const router = express.Router();

router.post('/add', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

router.delete('/delete', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

router.get('/list', function (req, res, next) {
    console.log("Router Working");
    res.end();
})

module.exports=router;