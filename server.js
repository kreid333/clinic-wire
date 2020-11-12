// RECOGNIZING .env FILE
require("dotenv").config();

// DEFINING VARIABLES
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

// CONNECTING TO MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/clinicWireDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// CONFIRMING MONGOOSE CONNECTION
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log(`Mongoose error: ${err}`);
});

// TEST ROUTES
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    message: "Successfully made API call!",
  });
});

// API ROUTES
const apiRoutes = require("./controller/apiController");
app.use(apiRoutes);

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// REACT INDEX.HTML
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
