const mongoose = require('mongoose');

const NetwrokSchema = new mongoose.Schema({
    netWorkName:String,
    user: String,
    password: String,
    server: String, 
    port: Number,
    database: String,
    idCompany: String
});
module.exports = mongoose.model('Netwrok', NetwrokSchema);