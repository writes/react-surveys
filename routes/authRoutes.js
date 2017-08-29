const passport = require('passport');

module.exports = (app) => {

// access google profile and email
app.get(
'/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// second route handler
app.get('/auth/google/callback', passport.authenticate('google'));

}
