const sql = require('mssql');

config = {
    user: '',
    password: '',
    server: 'PC14PV0167\\SQLEXPRESS2',
    database: 'BD_Ods_Inversiones_Replica',
    
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}


function getAllUsers(req, res, next) {
    
    
    
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        
        // create Request object
        var request = new sql.Request();
        
        // query to the database and get the records
        request.query('select * from Moneda', function (err, recordset) {
            
            if (err) console.log(err)
            
            // send records as a response
            res.send(recordset);
            
        });
    });
    

    
    
    //db = sql.connec('mssql://username:password@localhost/database');
    //db.any('select *,clave as clave2 from usuarios.usuario').then(function (data) {
    //    res.status(200).json(data);
    //}).catch(function (err) {
    //    return next(err);
    //});
}