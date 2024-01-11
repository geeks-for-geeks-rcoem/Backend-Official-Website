const express = require("express");
var router = express.Router();
const GameOfGeeks = require("../models/GameOfGeeks");

router.get("/", async (req, res) => {
  try {
    const result = await GameOfGeeks.find();
    const registrationCount = result.length;
    res
      .status(200)
      .json({registrationCount:registrationCount,result:result});
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

module.exports = router;
