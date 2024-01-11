var express = require("express");
var router = express.Router();
const GameOfGeeks = require("../models/GameOfGeeks")



router.post("/",function(req,res,next){
  const content = req.body;

  const newuser= new GameOfGeeks({
    name: content.name,
    college:content.college,
    year: content.year,
    branch: content.branch,
    emailid: content.emailid,
    phone: content.phone,
    teamName: content.teamName,
    teamMember1: content.teamMember1,
    teamMember2: content.teamMember2,
    teamMember3: content.teamMember3,
  });

  newuser.save()
    .then((result)=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
    res.json({error:"Team name already exists"})
  });
});


router.post('/verify', (async (req, res) => {
  const teamName = req.body.teamName;
  const record = await GameOfGeeks.findOne({ teamName: teamName });
  if (record === null) {
      res.status(404).send("Not Registered yet!!");
  } else {
      res.status(201).send("Successfully Registered!");
  }
}));


module.exports=router;