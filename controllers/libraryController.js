const Book = require('../models/Book');
const BorrowingTransaction = require('../models/BorrowingTransaction');
const User = require('../models/User'); 

const borrowBook = async (req, res) => {
    const { bookId, userId } = req.body; 
    try {
        if (!bookId || !userId) {
            return res.status(400).json({ message: 'Book ID and User ID are required' });
        }

        // Check if the book exists and is available
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (book.copiesAvailable < 1) {
            return res.status(400).json({ message: 'No copies of the book are currently available' });
        }

        // Check if the user already has an active borrowing for this book
        const activeTransaction = await BorrowingTransaction.findOne({
            book: bookId,
            member: userId,
            returnDate: null, // Active borrowing has no return date
        });
        if (activeTransaction) {
            return res.status(400).json({ message: 'You have already borrowed this book' });
        }

        // Create a new borrowing transaction
        const transaction = await BorrowingTransaction.create({
            book: bookId,
            member: userId,
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
        });

        // Update book's available copies
        book.copiesAvailable -= 1;
        await book.save();

        // Optionally update user's borrowed books list (if needed for tracking)
        await User.findByIdAndUpdate(userId, {
            $push: { borrowedBooks: bookId },
        });

        res.status(201).json({
            message: 'Book borrowed successfully',
            transaction,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { borrowBook };
