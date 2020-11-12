const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  doctorName: String,
  dateScheduled: String,
  timeScheduled: String,
  doctorNotes: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
