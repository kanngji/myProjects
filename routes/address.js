// @ts-check

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("address");
});

module.exports = router;
