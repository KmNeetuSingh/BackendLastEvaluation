const mongoose = require('mongoose');

const borrowingTransactionSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dueDate: { type: Date, required: true },
    returned: { type: Boolean, default: false },
});

module.exports = mongoose.model('BorrowingTransaction', borrowingTransactionSchema);
