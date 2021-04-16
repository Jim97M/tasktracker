const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        require: true
    },
    name:{
        type: String,
        required: true
    },
    day:{
        type:Date,
        required:true
    },
    reminder:{
        type:Boolean,
        required: true
    }

})

module.exports  = mongoose.model('users', userSchema);