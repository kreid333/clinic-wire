const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  doctorName: String,
  dateScheduled: String,
  timeScheduled: String,
  doctorNotes: String,
});

const Appointments = mongoose.model("Appointments", appointmentsSchema);

module.exports = Appointments;
