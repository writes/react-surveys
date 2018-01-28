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

//Create GoogleStrategy instance
// passport.use as generic register
passport.use(
  new GoogleStrategy(
    {
      //passport recognizes as 'google' during authenticate()
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
