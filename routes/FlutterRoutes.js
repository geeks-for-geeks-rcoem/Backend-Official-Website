const express = require("express");
const route = express.Router();

const FlutterDB = require("../models/Flutter");


route.get("/", (async (req, res) => {
    try {
        const result = await FlutterDB.find();
        const registrationCount = result.length;
        res
            .status(200)
            .send(`Registration Count : ${registrationCount}<br><br>${result}`);
    } catch (error) {
        console.log(error);
        res.status(400);
    }
}));

route.post('/', (async (req, res) => {
    const { name, college, emailid, year, phone, branch } = req.body;
    try {
        const registrationForm = new FlutterDB({ name, emailid, college, year, phone, branch });

        const registration = await registrationForm.save();
        res.status(200).send(registration);
    } catch (error) {
        res.status(400).send(`Error : ${error} or Email already exists`);
    }
}));

route.post('/verify', (async (req, res) => {
    const email = req.body.emailid;
    const record = await FlutterDB.findOne({ emailid: email });
    if (record === null) {
        res.status(404).send("Not Registered yet!!");
    } else {
        res.status(401).send("Successfully Registered!");
    }
}));

module.exports = route;
