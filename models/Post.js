//This is the main model for the Breaddit clone. It will have full CRUD, but its only components are going to be a title and a body. KISS for the win.
//Now that we're adding comments as a sub document, we'll need to attach them to posts. It will make the process of being able to create and view comments much easier. It'll make deleting them a pain, but we'll burn that bridge when we get there
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
