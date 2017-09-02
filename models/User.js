const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);

// No require statments to avoid
