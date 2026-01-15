const Books = require("../models/bookModel");

let addBook = async (req, res) => {
    let { imageUrl, title, author, genre, pages, watchedOn, rating, review } = req.body
    try {
        let userId = req.params.id
        // console.log(userId);
        let isBookExist = await Books.findOne({ title, userId });

        if (isBookExist) {
            return res.status(409).json({ message: "Book already exists for this user " });
        }
        let newBook = await new Books({
            userId,
            imageUrl,
            title,
            author,
            genre,
            pages,
            watchedOn,
            rating,
            review
        })
        await newBook.save()
        res.status(201).json({
            message: "Book added successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}

let getBooks = async (req, res) => {
    try {
        let userId = req.params.id
        let data = {}
        // console.log(data);

        if (userId) {
            data.userId = userId
        }
        let bookData = await Books.find(data)
        // console.log(bookData);

        res.status(200).json({
            message: "Books fetched successfully",
            books: bookData
        });

    } catch (error) {
        console.error("Get Books Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

let getBookById = async (req, res) => {
    try {
        bookId = req.params.id
        let bookView = await Books.findById(bookId)
        if (!bookView) {
            return res.status(404).json({ message: "Book Not Found" })
        }
        res.status(200).json({
            message: "Book fetched successfully",
            books: bookView
        });
    } catch (error) {
        console.error("Get Book By ID Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

let updateBook = async (req, res) => {
    let bookId = req.params.id
    try {
        updateData = req.body
        let bookUpdate = await Books.findByIdAndUpdate(bookId, updateData,
            {
                new: true,
                runValidators: true
            });
        if (!bookUpdate) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.status(200).json({
            message: "Book updated successfully", data: bookUpdate
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = { addBook, getBooks, getBookById, updateBook }