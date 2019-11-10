const mongoose = require('mongoose');
const Company = mongoose.model('Company');


const getAll = (req, res) => {

    Company.find()
    .exec()
    .then(company => res.json(company))
    .catch(err => res.status(500).json(err))
};

const getSelected = (req, res) => {
    Company.find({_id: req.params.id})
    .exec()
    .then(company => res.send(company))
    .catch(err => res.status(500).send(err))
};

const create = (req, res) => { 
    Company.create(req.body)
    .then( createCompany => res.json(createCompany))
    .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Company.findByIdAndUpdate({_id: req.params.id}, req.body)
    .exec()
    .then(company => res.json(company))
    .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Company.deleteOne({_id: req.params.id})
    .exec()
    .then(company => res.json(company))
    .catch(err => res.status(500).json(err))
};

module.exports = {
    getAll,
    getSelected,
    create,
    update,
    remove
};