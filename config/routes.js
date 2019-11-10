const controller = require('../app/controller')
const authMiddlewareOperator = require('../app/middleware/authOperator')

module.exports = (app) => {
    // products authMiddleware,
    app.get('/company', controller.company.getAll)
    app.get('/company/:id', controller.company.getSelected)
    app.post('/company', controller.company.create)
    app.put('/company/:id',controller.company.update)
    app.delete('/company/:id', controller.company.remove)

    // folders
    app.get('/folder',authMiddlewareOperator, controller.folder.getAll)
    app.get('/folder/:id', authMiddlewareOperator, controller.folder.getSelected)
    app.post('/folder', authMiddlewareOperator, controller.folder.create)
    app.put('/folder/:id',authMiddlewareOperator, controller.folder.update)
    app.delete('/folder/:id',authMiddlewareOperator,  controller.folder.remove)

    // indicators
    app.get('/indicator', controller.indicator.getAll)
    app.get('/indicator/:id',  controller.indicator.getSelected)
    app.post('/indicator',  controller.indicator.create)
    app.put('/indicator/:id', controller.indicator.update)
    app.delete('/indicator/:id',  controller.indicator.remove)

    // operators
    app.get('/operator', controller.Operator.getOperators)
    app.get('/operator/:id', controller.Operator.getOperatorsbyID)
    
    app.post('/operator',  controller.Operator.signUp)
    app.put('/operator',controller.Operator.signIn)

    // data
    app.get('/data', controller.data.getAll)

    // network
    app.get('/network', controller.network.getAll)
    app.get('/network/:id', controller.network.getSelected)
    app.post('/network', controller.network.create)
    app.put('/network/:id',controller.network.update)
    app.delete('/network/:id', controller.network.remove)
    
}