// imports
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const audiobooks = require('./routes/audiobooks');
const bodyParser = require('body-parser');

// intilization
const app = express();
app.use(bodyParser.json());

app.use('/auth', auth);
app.use('/audiobooks', audiobooks);

//routes
app.get('/', function (req, res) {
	res.send('<h1> Helloss33333 !! </h1>');
});

app.listen(8000, () => {
	console.log('server started 8000');
});

mongoose
	.connect('mongodb://127.0.0.1:27017/audiobooks')
	.then(() => console.log('Connected!'));
