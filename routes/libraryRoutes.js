const express = require('express');
const {
    addAuthor,
    addBook,
    addUser,
    borrowBook,
    returnBook,
    listBooksByAuthor,
    listBorrowedBooks,
    listBooks,
} = require('../controllers/libraryController'); 
const { authenticate, authorize } = require('../middleware/auth'); 

const router = express.Router();

// Admin-only routes
router.post('/authors', authenticate, authorize(['Admin']), addAuthor);
router.post('/books', authenticate, authorize(['Admin']), addBook);
router.post('/users', authenticate, authorize(['Admin']), addUser);

// Member-only routes
router.post('/borrow', authenticate, authorize(['Member']), borrowBook);
router.post('/return', authenticate, authorize(['Member']), returnBook);
router.get('/borrowed/:userId', authenticate, authorize(['Member']), listBorrowedBooks);

// Public routes (no authentication required)
router.get('/books/:authorId', listBooksByAuthor);
router.get('/books', listBooks); 

module.exports = router;
