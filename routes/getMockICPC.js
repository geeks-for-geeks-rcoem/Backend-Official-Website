var express = require("express");
var router = express.Router();
const MockICPC = require("../models/MockICPC")

router.get("/", function (req, res, next) {
    MockICPC.find()
        .then((result) => {
            const registrationCount = result.length;
            res.status(200).json({ registrationCount: registrationCount, result: result });
        })
        .catch((err) => {
            console.log(err);
        });
})

module.exports = router;