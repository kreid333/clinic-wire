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
  emailAddress: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
