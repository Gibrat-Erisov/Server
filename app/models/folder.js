const mongoose = require('mongoose');

const FolderSchema = new mongoose.Schema({
    name: String,
    idMainFolder: String,
    idCompany: String
});
module.exports = mongoose.model('Folder', FolderSchema);
