let express = require('express')
const { addBook, getBooks, getBookById, updateBook } = require('../controller/bookController')

let bookRoute = express.Router()

bookRoute.post('/addbook/:id', addBook)
bookRoute.get('/allbook/:id', getBooks)
bookRoute.get('/bookdetail/:id', getBookById)
bookRoute.patch('/update/:id', updateBook)

module.exports = bookRoute
