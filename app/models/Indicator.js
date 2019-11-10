const mongoose = require('mongoose');

const IndicateSchema = new mongoose.Schema({
    name: String,
    nameTable: String,
    idMainFolder: String,
    idCompany: String,
    user: String,
    password: String,
    server: String, 
    port: Number,
    database: String
})

 mongoose.model('Indicator', IndicateSchema);