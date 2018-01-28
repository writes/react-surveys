const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Model Class
const User = mongoose.model('users');

// user.id is not google profile.id. it is oid: in the db
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize token/cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// GoogleStrategy instance
// passport.use as generic register
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have record with the given id
          done(null, existingUser);
        } else {
        //we wnt to create a new user record with this ID, make new record
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
        }
      });
    }
  )
);
