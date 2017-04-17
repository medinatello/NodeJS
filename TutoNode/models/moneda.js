const sql = require('mssql');

var config = {
    user: 'desarrollo',
    password: 'desarrollo',
    server: 'PC14PV0167\\SQLEXPRESS2',
    database: 'TutoNode',
    port : '1433',
}



function getAllMonedas(req, res, next) {
    
    const pool1 = new sql.ConnectionPool(config, function (err) {
        // ... error checks 
        if (err)
            console.log(err);
        // Query 
        
        pool1.request()// or: new sql.Request(pool1) 
            .query('select * from moneda', function (err, result) {
            res.status(200).json(result.recordset);
            console.dir(result.recordset)
        })
    })
    
    pool1.on('error', function (err) {
        console.log(err)
    })
};



module.exports = {
    getAllMonedas: getAllMonedas
};