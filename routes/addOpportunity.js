const express = require("express");
var router = express.Router();
const OpportunityDB = require("./../models/opportunity");


// router.get("/", (req, res) => {
//   res.status(200);
//   res.send(`<form action="/add-opportunityRegistration" method="POST">
//     <input name="name" type="text" placeholder="name"></input><br>
//     <input name="branch" type="text" placeholder="branch"></input><br>
//     <input name="emailid" type="text" placeholder="emailid"></input><br>
//     <input name="college" type="text" placeholder="college"></input><br>
//     <input name="year" type="text" placeholder="year"></input><br>
//     <input name="phone" type="text" placeholder="phone"></input><br>
//     <input type="submit"></input>
//   </form>`);
// });

// router.get("/get-verify",async(req,res)=>{
//     res.send(`
//         <form action="/add-opportunityRegistration/verify" method="POST">
//         <input name="emailid" type="text" placeholder="emailid"></input><br></br>
//         <input type="submit"></input>
//         </form>
//     `)
// })

router.post("/verify",async(req,res)=>{
    const email = req.body.emailid;
    //console.log(email);
    const record = await OpportunityDB.findOne({emailid:email});
    //console.log(record);
   // console.log(email);
    if(record === null){
      res.status(404).send("Not Registered yet!!");
    } else{
        res.status(401).send("Successfully Registered!");
    }
})

router.post("/", async (req, res) => {
  const content = req.body;
  //console.log(content);
  try {
    const registrationForm = new OpportunityDB({
      name: content.name,
      emailid: content.emailid,
      college: content.college,
      year: content.year,
      phone: content.phone,
      branch:content.branch
    });

    const registration = await registrationForm.save();
    res.status(200).send(registration);
  } catch (error) {
    res.status(400).send(`Error : ${error} or Email already exists`);
  }
});

module.exports = router;
