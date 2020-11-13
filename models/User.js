const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  clinic: {
    type: Schema.Types.ObjectId,
    ref: "Clinic",
  },
  fullName: String,
  gender: String,
  age: String,
  emailAddress: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
