const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    borrowed_books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction'
        }
    ]
});

// Pre-save middleware for hashing the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    this.password = await bcrypt.hash(this.password, 10); 
    next();
});

// Method to validate password
userSchema.methods.validatePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Export the model
module.exports = mongoose.model('User', userSchema);
