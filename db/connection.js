//This is the DB connection it will include how our database and Express.js will be connected using Mongoose.
const mongoose = require("../models/Post");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/breaddit123", {
    useNewUrlParser: true
  });
}

mongoose.Promise = Promise;

module.exports = mongoose;
