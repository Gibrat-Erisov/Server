const mongoose = require('mongoose');
const User = mongoose.model('Opertor');

const bCrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const {jwtOperator} = require('../../config/app');


const getOperators = (req, res) => {
    User.find()
    .exec()
    .then(operator => res.json(operator))
    .catch(err => res.status(500).json(err))
}

const getOperatorsbyID = (req, res) => {
    User.find({idCompany: req.params.id})
    .exec()
    .then(operator => res.json(operator))
    .catch(err => res.status(500).json(err))
}

const signUp = (req, res) => {
    User.create( 
        {email: req.body.email,
        password: bCrypt.hashSync(req.body.password),
        idCompany: req.body.idCompany})
        .then( createOperator => res.json(createOperator))
        .catch(err => res.status(500).json(err))
}

const signIn = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email})
        .exec()
        .then((user) => {
            if (!user) {
                res.status(401).json({message: 'User dose not exist! '})
            }

            const isValid = bCrypt.compareSync(password, user.password);

            if(isValid) {
                // генерация цифровой подписи
                
                const tokenOperator = jwt.sign(user._id.toString(), jwtOperator);   
                res.json(  { user, tokenOperator });
            } else {
                res.status(401).json({message: 'Invalid !!!)))'})
            }
        })
        .catch(err => res.status(500).json({message: err.message }))
}


module.exports = {
    signIn,
    signUp,
    getOperators,
    getOperatorsbyID
}