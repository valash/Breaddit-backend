////Comments Model, it's going to be a submodel of the main post model. It'll only have one value for now, but that's all it needs in the short term

const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Comment = new Schema({
	text: String
});

module.exports = mongoose.model('Comment', Comment);
