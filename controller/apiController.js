const db = require("../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/api/users", (req, res) => {
  const { gender, fullName, emailAddress, password, age } = req.body;
  if (!emailAddress.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        db.User.create({
          gender: gender,
          fullName: fullName,
          age: age,
          emailAddress: emailAddress,
          password: hashedPassword,
        })
          .then((newUser) => {
            const token = jwt.sign(
              {
                _id: newUser._id,
                gender: newUser.gender,
                fullName: newUser.fullName,
                emailAddress: newUser.emailAddress,
                age: newUser.age,
              },
              process.env.SECRET
            );

            res.json({
              error: false,
              data: token,
              message: "Successfully signed up.",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to signup.",
            });
          });
      })
      .catch((err) => {
        res.status(500);
      });
  }
});

router.post("/api/login", (req, res) => {
  // Pull user provided email address and password from the body.
  const { emailAddress, password } = req.body;
  // See if there is a matching user in the database.
  db.User.findOne({ emailAddress: emailAddress })
    .then((foundUser) => {
      if (foundUser) {
        console.log(foundUser);
        console.log("Hashed password from DB", foundUser.password);
        console.log("Plain text password from user", password);
        // If there is a matching user, compare the plaintext password with the stored, hashed password.
        bcrypt
          .compare(password, foundUser.password)
          .then(function (result) {
            // result == true
            console.log("The passwords match: ", result);
            if (result) {
              const token = jwt.sign(
                {
                  _id: foundUser._id,
                  gender: foundUser.gender,
                  fullName: foundUser.fullName,
                  emailAddress: foundUser.emailAddress,
                  age: foundUser.age,
                },
                process.env.SECRET
              );
              res.json({
                error: false,
                data: token,
                message: "Successfully logged in.",
              });
            } else {
              // If the passwords don't match, send back an error.
              res.status(401).json({
                error: true,
                data: null,
                message: "Failed to sign in.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              error: true,
              data: null,
              message: "Failed to sign in.",
            });
          });
      } else {
        res.status(401).json({
          error: true,
          data: null,
          message: "Failed to sign in.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to sign in.",
      });
    });
});

router.post("/api/appointments", (req, res) => {
  db.Appointment.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

router.get("/api/appointments/:id", (req, res) => {
  db.Appointment.find({ patient: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

router.get("/api/users", (req, res) => {
  db.User.find()
    .populate("appointments")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
