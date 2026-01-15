let express = require('express')
const { addMovie, getAllMovie, getMovieById, updateMovie } = require('../controller/movieController')


let movieRoute = express.Router()

movieRoute.post('/addmovie/:id', addMovie)
movieRoute.get('/all-movie/:id', getAllMovie)
movieRoute.get('/movie-detail/:id', getMovieById)
movieRoute.patch('/update/:id', updateMovie)

module.exports = movieRoute