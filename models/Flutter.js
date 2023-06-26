const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const FlutterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailid: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
    },
    college: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}/.test(v);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
      required: true,
    },
  },
  { timestamps: true }
);

const FlutterDB = mongoose.model("Flutter", FlutterSchema);
module.exports = FlutterDB;
