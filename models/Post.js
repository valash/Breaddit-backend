//This is the main model for the Breaddit clone. It will have full CRUD, but its only components are going to be a title and a body. KISS for the win.
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Post = new Schema({
	title: String,
	body: String,
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
});

module.exports = mongoose.model('Post', Post);
