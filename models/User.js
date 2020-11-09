const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  gender: String,
  emailAddress: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
