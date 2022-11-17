const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
}, { timestamps : true });

const User=mongoose.model('Polaris2022', UserSchema);
module.exports = User;