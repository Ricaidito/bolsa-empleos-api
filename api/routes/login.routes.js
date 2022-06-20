const express = require("express");
const router = express.Router();

// POST (do) login
router.post("/", (req, res) => {
  const login = {
    email: req.body.email,
    password: req.body.password,
  };
  res.status(201).json({
    message: "POST /login",
    newLogin: login,
  });
});

module.exports = router;
