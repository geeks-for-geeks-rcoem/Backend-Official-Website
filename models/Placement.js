const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const PlacementSchema = new Schema ({
    name : {
        type:String,
        required:true
    },
    branch: {
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        validate:{
            validator:function (v){
                return /^[0-9]{10}/.test(v);
            },
            message:'Not a valid 10 digit number!'
        },
        required:true
    },
    emailid:{
        type:mongoose.SchemaTypes.Email,
        unique:true,
        required:true
    },
},{timestamps:true});

const PlacementEvent = mongoose.model('Placement Event',PlacementSchema);
module.exports = PlacementEvent;