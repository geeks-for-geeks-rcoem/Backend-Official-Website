const express = require("express");
var router = express.Router();
const OpportunityDB = require("./../models/opportunity");

router.get("/", async (req, res) => {
  try {
    const result = await OpportunityDB.find();
    const registrationCount = result.length;
    res
      .status(200)
      .send(`Registration Count : ${registrationCount}<br><br>${result}`);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

module.exports = router;
