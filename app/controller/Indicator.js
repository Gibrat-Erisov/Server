const mongoose = require('mongoose');
const Indicator = mongoose.model('Indicator');

const getAll = (req, res) => {
    Indicator.find()
    .exec()
    .then(indicators => res.send(indicators))
    .catch(err => res.status(500).send(err))
};

const getSelected = (req, res) => {
    Indicator.find({idCompany: req.params.id})
    .exec()
    .then(indicators => res.send(indicators))
    .catch(err => res.status(500).send(err))
};

const create = (req, res) => { 
    Indicator.create(req.body)
    .then( createindicators => res.send(createindicators))
    .catch(err => res.status(500).send(err))
};

const update = (req, res) => {
    Indicator.findByIdAndUpdate({_id: req.params.id}, req.body)
    .exec()
    .then(indicators => res.send(indicators))
    .catch(err => res.status(500).send(err))
};

const remove = (req, res) => {
    Indicator.deleteOne({_id: req.params.id})
    .exec()
    .then(indicators => res.send(indicators))
    .catch(err => res.status(500).send(err))
};

module.exports = {
    getAll,
    getSelected,
    create,
    update,
    remove
};