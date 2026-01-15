let mongoose = require('mongoose')
const Movies = require('./movieModel')

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }    
},
    {
        timestamps: true
    })

let User = new mongoose.model('users', userSchema)
module.exports = User
