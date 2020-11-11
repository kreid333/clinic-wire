const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new Schema({
  fullName: String
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
 