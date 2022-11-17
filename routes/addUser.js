var express = require("express");
var router = express.Router();
const User = require('../models/User');



router.post("/",function(req,res,next){
  const content = req.body;
  console.log(content);

  const newuser= new User({
    name: content.name,
    branch: content.branch
  });

  newuser.save()
    .then((result)=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });
});


module.exports=router;