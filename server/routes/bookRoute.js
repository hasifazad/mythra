let express = require('express')
const { addBook, getBooks, getBookById, updateBook, getBookCountByUser } = require('../controller/bookController')

let bookRoute = express.Router()

bookRoute.post('/addbook/:userId', addBook)
bookRoute.get('/allbook/:userId', getBooks)
bookRoute.get('/bookdetail/:id', getBookById)
bookRoute.patch('/update/:id', updateBook)
bookRoute.get("/count/:userId", getBookCountByUser);

module.exports = bookRoute
 