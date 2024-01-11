var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var mongoose = require('mongoose');
var cors = require("cors");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuring .env files
require('dotenv').config()
mongoose.set('strictQuery', true);


///// USER Models
const UserModel = require("./models/User");
const feedbackModel = require("./models/feedback");
const Event1Model = require("./models/event1");
const MemefestDB = require("./models/Memefest");
const OpportunityDB = require("./models/opportunity");
const FlutterDB = require("./models/Flutter");
const Orientation = require("./models/Orientation");

///// Declaring Routes
var indexRouter = require('./routes/index');
const addUser = require("./routes/addUser");
const getUsers = require("./routes/getUsers");
const addFeedback = require("./routes/addFeedback");
const getFeedback = require("./routes/getFeedback");
const addEvent11JanRegistration = require("./routes/addEvent11JanRegistrations");
const getEvent11JanRegistration = require("./routes/getEvent11JanRegistrations");
const addMemefestRegistrationRouter = require("./routes/addMemefestRegistrations");
const getMemefestRegistrationRouter = require("./routes/getMemefestRegistrations");
const getMemefestfeedback = require("./routes/getmemefestfeedback");
const addOpportunityRegistrationRouter = require("./routes/addOpportunity");
const getOpportunityRegistrationRouter = require("./routes/getOpportunities");
const getOpportunityfeedback = require('./routes/getopportunityfeedback');
const FlutterRouter = require("./routes/FlutterRoutes");
const OpportunityRouter = require("./routes/OrientationRoutes");
const addGitForGeeks = require("./routes/addGitForGeeks");
const getGitForGeeks = require("./routes/getGitForGeeks");
const addFreshmenFundamentals = require("./routes/addFreshmenFundamental");
const getFreshmenFundamentals = require("./routes/getFreshmenFundamental");
const leaderboardRouter = require("./routes/leaderboard");
const addPlacementRegistration = require("./routes/addPlacementRegistration")
const getPlacementRegistration = require("./routes/getPlacementRegistration")
const getMockICPCRegistration = require("./routes/getMockICPC")
const addMockICPCRegistration = require("./routes/addMockICPC")
const getGameOfGeeksRegistration = require("./routes/getGameOfGeeks")
const addGameOfGeeksRegistration = require("./routes/addGameOfGeeks")




//PORT ENVIRONMENT VARIABLE  MONGODB Connect
const port = process.env.PORT;
const CONNECTION_URL = process.env.MONGODB_URL;

mongoose.connect(CONNECTION_URL).then((result) => {
  console.log("connected");
})
  .catch((err) => console.log(err));




/////  view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



///// Routes to use

app.use('/', indexRouter);
app.use('/add-user', addUser);
app.use('/get-users', getUsers);
app.use('/add-feedback', addFeedback);
app.use('/get-feedback', getFeedback);
app.use("/orientation", OpportunityRouter);
app.use('/add-gitForGeeksRegistration',addGitForGeeks);
app.use('/get-gitForGeeksRegistration',getGitForGeeks);
app.use('/add-freshmenFundamentalsRegistration',addFreshmenFundamentals);
app.use('/get-freshmenFundamentalsRegistration',getFreshmenFundamentals);
app.use('/add-placementRegistration',addPlacementRegistration);
app.use('/get-placementRegistration',getPlacementRegistration);
app.use('/leaderboard', leaderboardRouter);

app.use('/add-mockICPCRegistration', addMockICPCRegistration)
app.use('/get-mockICPCRegistration', getMockICPCRegistration)

app.use('/add-gameOfGeeksRegistration', addGameOfGeeksRegistration)
app.use('/get-gameOfGeeksRegistration', getGameOfGeeksRegistration)
// app.use('/add-event1Registration', addEvent11JanRegistration);
// app.use('/get-event1Registration', getEvent11JanRegistration);
// app.use("/add-MemefestRegistration", addMemefestRegistrationRouter);
// app.use("/get-MemefestRegistration", getMemefestRegistrationRouter);
// app.use("/get-Memefestfeedback", getMemefestfeedback);
// app.use("/add-opportunityRegistration",addOpportunityRegistrationRouter);
// app.use("/get-opportunityRegistration",getOpportunityRegistrationRouter);
// app.use("/get-opportunityfeedback",getOpportunityfeedback);
// app.use('/flutter-event',FlutterRouter);



////// Starter and Error Listen Statesments


app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});

//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  
  //res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
