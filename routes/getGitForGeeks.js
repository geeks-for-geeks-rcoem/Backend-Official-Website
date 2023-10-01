const express = require("express");
var router = express.Router();
const GitForGeeksDB = require("./../models/gitForGeeks");

router.get("/", async (req, res) => {
  try {
    const result = await GitForGeeksDB.find();
    const registrationCount = result.length;
    res
      .status(200)
      .send(`result : ${result} , registrationCount : ${registrationCount}`);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

module.exports = router;
