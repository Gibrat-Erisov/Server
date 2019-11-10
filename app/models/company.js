const mongoose = require('mongoose');

const CompSchema = new mongoose.Schema({
    name: String,
    country: String,
    city: String,
    address: String,
});
module.exports = mongoose.model('Company', CompSchema);