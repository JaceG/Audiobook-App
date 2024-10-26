// imports
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    title: String,
    author: String,
    narrator: String,
    description: String,
    year: Number,
    file: String,
    userId: Schema.Types.ObjectId
});

const User = mongoose.model('user', userSchema);
module.exports=User;