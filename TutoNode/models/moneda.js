const sql = require('mssql');

var config = {
    user: '',
    password: '',
    server: 'CLSASQLT01',
    database: 'BD_Ods_Inversiones',
    port : '1433',
}



function getAllMonedas(req, res, next) {
    
    const pool1 = new sql.ConnectionPool(config, function (err) {
        // ... error checks 
        if (err)
            console.log(err);
        // Query 
        
        pool1.request()// or: new sql.Request(pool1) 
            .query('select * from report.TblDesarrolloRentaFijaa', function (err, result) {
            res.status(200).json(result);
            console.dir(result)
        })
    })
    
    console.log("PAse");
    pool1.on('error', function (err) {
        console.log(err)
    })
};



module.exports = {
    getAllMonedas: getAllMonedas
};