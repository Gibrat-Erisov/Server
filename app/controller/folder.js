const mongoose = require('mongoose');
const Folder = mongoose.model('Folder');

const getAll = (req, res) => {
    Folder.find()
    .exec()
    .then(folders => res.send(folders))
    .catch(err => res.status(500).send(err))
};

const getSelected = (req, res) => {
    Folder.find({idCompany: req.params.id})
    .exec()
    .then(folders => res.send(folders))
    .catch(err => res.status(500).send(err))
};

const create = (req, res) => { 
    Folder.create(req.body)
    .then( createfolders => res.send(createfolders))
    .catch(err => res.status(500).send(err))
};

const update = (req, res) => {
    Folder.findByIdAndUpdate({_id: req.params.id}, req.body)
    .exec()
    .then(folders => res.send(folders))
    .catch(err => res.status(500).send(err))
};

const remove = (req, res) => {
    Folder.deleteOne({_id: req.params.id})
    .exec()
    .then(folders => res.send(folders))
    .catch(err => res.status(500).send(err))
};

module.exports = {
    getAll,
    getSelected,
    create,
    update,
    remove
};