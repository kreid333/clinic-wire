// DEFINING VARIABLES
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECTING TO MONGOOSE
mongoose.connect("mongodb://localhost/", {
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

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
