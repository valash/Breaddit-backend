//This is the DB connection it will include how our database and Express.js will be connected using Mongoose.
const mongoose = require("../models/Post");
// const mongoUri = "mongodb://localhost/Breaddit";

// mongoose
//   .connect(mongoUri)
//   .then(connection => console.log(`Connection Established to db`))
//   .catch(connectionError => console.log("Connection Failed!", connectionError));

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/breaddit123");
}

mongoose.Promise = Promise;

module.exports = mongoose;
