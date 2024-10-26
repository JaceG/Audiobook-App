// imports
const express = require('express');

// Single routing
const router = express.Router();

router.post('/add', async function (req, res, next) {
    console.log("Router Working");

    await Audiobook.create({
        title: 'Title',
        author: 'Author',
        narrator: 'Narrator',
        description: 'Book description',
        year: '2024',
        file: 'file.mp3',
        userId: Schema.Types.ObjectId
    });
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