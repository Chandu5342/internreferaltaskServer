const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  referralCode: String // ✅ corrected here
});

module.exports = mongoose.model('Users', UserModel);
