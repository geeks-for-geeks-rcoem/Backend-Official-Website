var express = require("express");
var router = express.Router();
const memefeedback = require('../models/memefestfeedback');

router.get("/",function(req,res,next){
   
    memefeedback.find()
    .then((result) => {
     res.send(result);
    })
    .catch((err) => {
     console.log(err);
    });
})

module.exports=router;