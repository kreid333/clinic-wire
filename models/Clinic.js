const mongoose = require("mongoose");
const { Schema } = mongoose;

const clinicSchema = new Schema({
  name: String,
  doctors: [{ type: String }],
});

const Clinic = mongoose.model("Clinic", clinicSchema);

module.exports = Clinic;
