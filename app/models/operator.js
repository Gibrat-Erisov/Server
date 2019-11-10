const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    idCompany: String,
    name: String
});
module.exports = mongoose.model('Opertor', UserSchema);
