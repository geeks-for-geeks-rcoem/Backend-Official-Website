var express = require("express");
var router = express.Router();
const MockICPC = require("../models/MockICPC")



router.post("/",function(req,res,next){
  const content = req.body;

  const newuser= new MockICPC({
    name: content.name,
    college:content.college,
    year: content.year,
    branch: content.branch,
    emailid: content.emailid,
    phone: content.phone,
    teamName: content.teamName,
    teamMember1: content.teamMember1,
    teamMember2: content.teamMember2,
  });

  newuser.save()
    .then((result)=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });
});


router.post('/verify', (async (req, res) => {
  const teamName = req.body.teamName;
  const record = await MockICPC.findOne({ teamName: teamName });
  if (record === null) {
      res.status(404).send("Not Registered yet!!");
  } else {
      res.status(201).send("Successfully Registered!");
  }
}));


module.exports=router;