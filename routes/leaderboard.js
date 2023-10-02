const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
var lastUpdated = new Date()

const CONNECTION_URL = process.env.MONGODB_URL;

mongoose.connect(CONNECTION_URL).then((result) => {
  console.log("connected");
})
  .catch((err) => console.log(err));

const db = mongoose.connection;

router.get('/data', async (req, res) => {
  try {
    const data = await db.collection("leaderboard_data").find({}).toArray();
    console.log(data);
    res.json({lastUpdated:lastUpdated,data:data});
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post('/date', (req, res)=>{
    const data = req.body;
    
    lastUpdated = data.date
    res.sendStatus(200)
})

router.get('/github-data', async(req, res)=>{
  const data = await db.collection("github").find({}).toArray();
  res.json(data)
})

module.exports = router;
