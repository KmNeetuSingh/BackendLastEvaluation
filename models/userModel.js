const bcrypt = require('bcrypt');

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.validatePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
