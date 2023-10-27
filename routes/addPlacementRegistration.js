const express = require("express");
var router = express.Router();
const PlacementDB = require("../models/Placement");


router.get("/", (req, res) => {
  res.status(200);
  res.send(`<form action="/add-placementRegistration" method="POST">
    <input name="name" type="text" placeholder="name"></input><br>
    <input name="branch" type="text" placeholder="branch"></input><br>
    <input name="semester" type="number" placeholder="semester"></input><br>
    <input name="emailid" type="text" placeholder="emailid"></input><br>
    <input name="year" type="text" placeholder="year"></input><br>
    <input name="phone" type="text" placeholder="phone"></input><br>
    <input type="submit"></input>
  </form>`);
});

router.post("/", async (req, res) => {
  const content = req.body;
  try {
    const registrationForm = new PlacementDB({
      name: content.name,
      branch:content.branch,
      emailid: content.emailid,
      semester:content.semester,
      year: content.year,
      phone: content.phone,
    });

    const registration = await registrationForm.save();
    res.status(200).send(registration);
  } catch (error) {
    res.status(400).send(`Error : ${error} or Email already exists`);
  }
});

router.post('/verify', (async (req, res) => {
  const email = req.body.emailid;
  const record = await PlacementDB.findOne({ emailid: email });
  if (record === null) {
      res.status(404).send("Not Registered yet!!");
  } else {
      res.status(201).send("Successfully Registered!");
  }
}));

module.exports = router;
