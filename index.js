const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require("./config/passport")();
const userController = require("./controllers/users.js");

app.use(passport.initialize());
app.use("/users", userController);
app.use(cors());
app.use(parser.json());

const postController = require("./controllers/posts");
app.use("/breaddit/", postController);

app.set("port", process.env.PORT || 3002);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
