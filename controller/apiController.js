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

router.post("/api/appointments", (req, res) => {
  db.Appointments.create(req.body)
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
