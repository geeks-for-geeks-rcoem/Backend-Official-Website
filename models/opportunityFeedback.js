const mongoose= require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


const feedbackSchema = new Schema ({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
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
    emailid: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    rating:{
        type:String,
        // enum:['Excellent','Very Good','Good','Poor'],
        required:true
    },
    organized:{
        type:String,
        // enum:['Extremely Orgainzed','Somewhat Organized','Not at all Organized'],
        required:true
    },
    improvements:{
        type: String,
        required: true
    },
    likeAboutEvent:{
        type: String,
        required: true
    }
}, { timestamps : true });


const opportunityfeedback = mongoose.model('OpportunityFeedback', feedbackSchema);
module.exports = opportunityfeedback;