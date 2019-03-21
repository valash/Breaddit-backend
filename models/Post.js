//This is the main model for the Breaddit clone. It will have full CRUD, but its only components are going to be a title and a body. KISS for the win.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const Post = new Schema({
<<<<<<< HEAD
  title: String,
  body: String
=======
	title: String,
	body: String,
	comments: [ Comment ]
>>>>>>> 0b3f13ae7e5b207ebf691e99294005c02242c16b
});

mongoose.model("Post", Post);

module.exports = mongoose;
