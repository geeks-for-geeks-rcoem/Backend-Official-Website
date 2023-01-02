var express = require("express");
var router = express.Router();
const event1 = require('../models/event1');

router.post("/",function(req,res,next){
    const content = req.body;
    console.log(content);
  
    const newregistration= new event1({
      name: content.name,
      branch: content.branch,
      year:content.year,
      semester:content.semester,
      phone: content.phone,
      emailid: content.emailid,
    });
    newregistration.save()
      .then((result)=>{
      res.send(result)
    })
    .catch((err) =>{
      console.log(err);
      res.send(err);
    });
  });
  
module.exports=router;