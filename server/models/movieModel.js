let mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    imageUrl: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        default: "Unknown"
    },
    duration: {
        type: String,
        default: "0"
    },
    watchedOn: Date,
    rating: {
        type: Number,
        default: 0
    },
    review: {
        type: String,
        default: ""
    }
},
    {
        timestamps: true
    })

let Movies = new mongoose.model('movies', movieSchema)

module.exports = Movies
