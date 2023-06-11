var express = require("express");
var router = express.Router();
const opportunityfeedback = require('../models/opportunityFeedback');

router.get("/",function(req,res,next){
   
    opportunityfeedback.find()
    .then((result) => {
     res.send(result);
    })
    .catch((err) => {
     console.log(err);
    });
})

module.exports=router;