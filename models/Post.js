//This is the main model for the Breaddit clone. It will have full CRUD, but its only components are going to be a title and a body. KISS for the win.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const Post = new Schema({
	title: String,
	body: String,
	comments: [ Comment ]
});

mongoose.model('Post', Post);

module.exports = mongoose;
