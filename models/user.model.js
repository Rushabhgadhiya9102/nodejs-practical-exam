const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName :{
        type: String,
        require: true,
        unique: true
    },

    email :{
        type: String,
        require: true,
        unique: true
    },

    password :{
        type: String,
        require: true,
    },
    
}, {
    timestamps : true
})

const UserData = mongoose.model('UserData', userSchema)
module.exports = UserData