const mongoose= require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


const OrientationDB = new Schema ({
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
        unique:true,
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

const Orientation = mongoose.model('Orientation', OrientationDB);
module.exports = Orientation;