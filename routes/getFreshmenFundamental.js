const express = require("express");
var router = express.Router();
const FreshmenFundamentalDB = require("./../models/FreshmenFundamental");

router.get("/", async (req, res) => {
  try {
    const result = await FreshmenFundamentalDB.find();
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
