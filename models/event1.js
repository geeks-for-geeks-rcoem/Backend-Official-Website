const mongoose= require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


const Event11JanSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type:String,
        required:true
    },
    semester: {
        type:Number,
        required:true
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
              return /^[0-9]{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          },      
        required: true
    },
    emailid: {
        type: mongoose.SchemaTypes.Email,
        unique:true,
        required: true
    },
    
}, { timestamps : true });

const event1 = mongoose.model('11 Jan Event', Event11JanSchema);
module.exports = event1;