var sql = require("mssql");
var config = require('../../config/app')


const getAll = (req, res) => {

    var conn = new sql.ConnectionPool(config.config)
    var request = new sql.Request(conn);

    conn.connect( function (err) {
        if (err) console.log(err);

        request.query('SELECT * FROM Table_1', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            conn.close();
        });

    })
}

const getData = (req, res) => {
    var nameTable = req.body.nameTable   
    var selectData = 'SELECT * FROM ' + nameTable 

    var conn = new sql.ConnectionPool(config.config)
    var request = new sql.Request(conn);

    conn.connect( function (err) {
        if (err) console.log(err);

        request.query(selectData, function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset.recordset);
            conn.close();
        });

    })
}

module.exports = {
    getAll,
    getData
};