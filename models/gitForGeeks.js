const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const GitForGeeksSchema = new Schema ({
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
    phone:{
        type:String,
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
    github:{
        type:String,
        required:true
    }
},{timestamps:true});

const gitEvent = mongoose.model('GitForGeeks',GitForGeeksSchema);
module.exports = gitEvent;