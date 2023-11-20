const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


const MockICPCSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    college: {
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
        required: true,
        unique:true,
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
    teamName: {
        type: String,
        required: true,
        unique:true,
    },
    teamMember1: {
        name: {
            type: String,
            required: true
        },
        emailid: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique:true,
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
        }
    },
    teamMember2: {
        name: {
            type: String,
            required: true
        },
        emailid: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique:true,
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
        }
    },
}, { timestamps: true });

const MockICPC = mongoose.model('MockICPC', MockICPCSchema);
module.exports = MockICPC;