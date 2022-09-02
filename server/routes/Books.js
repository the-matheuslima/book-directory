const books = require('../books.json')
const express = require('express');
const router = express.Router();

//get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Get same specific book
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json(books.books.filter(book => book.isbn === id))
})

//put same book
router.post('/addbook', (req, res) => {
    const body = req.body;
    books.books.push(body);
    res.json(books.books);
})

//update same book
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body

    res.json(books.books.map(book => {
        if (book.isbn === id) {
            return { ...book, ...body }
        }
        return book
    }))
})

//delete some book


module.exports = router;
