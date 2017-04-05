const sql = require('mssql');

var config = {
    user: 'usr_ods_test',
    password: 'zu0ch9X9',
    server: 'CLSASQLT01',
    database: 'BD_Ods_Inversiones_Replica',
    port : '1433',
}



function getAllMonedas(req, res, next) {
    
    const pool1 = new sql.ConnectionPool(config, function (err) {
        // ... error checks 
        if (err)
            console.log(err);
        // Query 
        
        pool1.request()// or: new sql.Request(pool1) 
            .query('select * from Moneda', function (err, result) {
            
            res.status(200).json(result);
            
            //res.send(result);
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