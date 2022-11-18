const mongoose= require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    emailid: {
        type: mongoose.SchemaTypes.Email,
        required: true
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
    teamName: {
        type: String,
        required: true
    },
    teamMember1: {
        name:{
            type:String,
            required: true
        },
        emailid:{
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        phone:{
            type: String,
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          },      
        required: true
        }
    },
    teamMember2: {
        name:{
            type:String,
            required: true
        },
        emailid:{
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        phone:{
            type: String,
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          },      
        required: true
        }
    },
    teamMember3: {
        name:{
            type:String,
            required: true
        },
        emailid:{
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        phone:{
            type: String,
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          },      
        required: true
        }
    },
    paymentStatus:{
        type:String,
        enum: ['Paid','Unpaid'],
        required:true,
        default:'Unpaid'
    }
}, { timestamps : true });

const User=mongoose.model('Polaris2022', UserSchema);
module.exports = User;