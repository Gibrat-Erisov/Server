const mongoose = require('mongoose');
const Netwrok = mongoose.model('Netwrok');


const getAll = (req, res) => {

    Netwrok.find()
    .exec()
    .then(netwrok => res.json(netwrok))
    .catch(err => res.status(500).json(err))
};

const getSelected = (req, res) => {
    Netwrok.find({idCompany: req.params.id})
    .exec()
    .then(netwrok => res.send(netwrok))
    .catch(err => res.status(500).send(err))
};

const create = (req, res) => { 
    Netwrok.create(req.body)
    .then( createNetwrok => res.json(createNetwrok))
    .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Netwrok.findByIdAndUpdate({_id: req.params.id}, req.body)
    .exec()
    .then(netwrok => res.json(netwrok))
    .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Netwrok.deleteOne({_id: req.params.id})
    .exec()
    .then(netwrok => res.json(netwrok))
    .catch(err => res.status(500).json(err))
};

module.exports = {
    getAll,
    getSelected,
    create,
    update,
    remove
};