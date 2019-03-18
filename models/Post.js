const mongoose = require();
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  body: String
});

module.exports = {
  Post: mongoose.model("Post", Post)
};
