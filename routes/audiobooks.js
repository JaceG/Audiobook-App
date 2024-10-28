// imports
const express = require('express');
const audiobookMetadata = require('music-metadata');
const Audiobook = require('../models/audiobooks');

// Single routing
const router = express.Router();

router.post('/add', async function (req, res, next) {
	console.log('Router Working');

	const { title, author, narrator, description, year } = req.body;

	// const metadata = await audiobookMetadata.parseFile(req.file.path);
	// console.log(metadata);

	await Audiobook.create({
		title,
		author,
		narrator,
		description,
		year,
		file: req.file.path,
		userId: req.userId,
	});
	res.json({
		message: 'Audiobook uploaded succesfully!',
	});
});

router.delete('/delete', function (req, res, next) {
	console.log('Router Working');
	res.end();
});

router.get('/list', function (req, res, next) {
	console.log('Router Working');
	res.end();
});

module.exports = router;
