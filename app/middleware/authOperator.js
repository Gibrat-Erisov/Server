const jwt = require('jsonwebtoken');
const {jwtOperator} = require('../../config/app');

module.exports = (req, res, next) => {
    const authHeader = req.get('tokenOperator')
    if(!authHeader) {
        res.status(401).json({message: 'Token not provided!'})
    }

    const token = authHeader
    try{
        jwt.verify(token, jwtOperator)
    } catch(e) {
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json({message: 'Invalid token!'})
        }
    }

    next();
}