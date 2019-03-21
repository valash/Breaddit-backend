//The config directory is where we are going to put all the code to build out passport and our JWTs.

//this is a secret key for the JSON web tokens
module.exports = {
  jwtSecret: "JwtS3cr3tK3Y",
  jwtSession: {
    session: false
  }
};
