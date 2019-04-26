const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    first: String,
    last: String,
    email: String
})

const User = mongoose.model('User', UserSchema);

module.exports = User;