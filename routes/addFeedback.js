var express = require("express");
var router = express.Router();
const feedback = require('../models/feedback');
const memefeedback = require('../models/memefestfeedback');

router.post("/",function(req,res,next){
  const content = req.body;
  console.log(content);

  const newfeedback= new feedback({
    firstName: content.firstName,
    lastName: content.lastName,
    phone: content.phone,
    emailid: content.emailid,
    rating: content.rating,
    organized: content.organized,
    improvements: content.improvements,
    likeAboutEvent: content.likeAboutEvent
  });
//   console.log(newfeedback);
  newfeedback.save()
    .then((result)=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });
});

router.post("/meme",function(req,res,next){
  const content = req.body;
  console.log(content);

  const newfeedback= new memefeedback({
    firstName: content.firstName,
    lastName: content.lastName,
    phone: content.phone,
    emailid: content.emailid,
    rating: content.rating,
    organized: content.organized,
    improvements: content.improvements,
    likeAboutEvent: content.likeAboutEvent
  });
//   console.log(newfeedback);
  newfeedback.save()
    .then((result)=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });
});


module.exports=router;