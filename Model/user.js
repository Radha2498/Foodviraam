const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const UserSchema = new Schema({
    
   
    email:{
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    contact_number:{
        type: String
        
    }
   
})

module.exports = mongoose.model('User', UserSchema );   