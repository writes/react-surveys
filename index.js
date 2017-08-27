// Include express and create app
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// Create GoogleStrategy instance
// passport.use as generic register
passport.use(
  //passport recognizes as 'google' during authenticate()
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// access google profile and email
app.get(
'/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// second route handler
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
