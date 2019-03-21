//The config directory is where we are going to put all the code to build out passport and our JWTs.

//This is the cde to build out passport and have the user connected to an id.

const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const config = require("./config");

const mongoose = require("../models/User");
const User = mongoose.model("User");

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function() {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null;
    if (user) {
      return callback(null, { id: user.id });
    } else {
      return callback(new Error("User not found"), null);
    }
  });

  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", { session: false });
    }
  };
};
