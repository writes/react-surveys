// Include express and create app
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// Create GoogleStrategy instance
// passport.use as generic register
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  }, accessToken => {
    console.log(accessToken);
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
