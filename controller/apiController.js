const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/api/users", (req, res) => {
  db.User.create(req.body)
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
