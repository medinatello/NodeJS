//var Connection = require('tedious').Connection;
//var Request = require('tedious').Request;

const sql = require('mssql');

var config = {
    user: 'usr_ods_test',
    password: 'zu0ch9X9',
    server: 'CLSASQLT01',
    database: 'BD_Ods_Inversiones_Replica',
    port : '1433',
}


//var config = {
//    user: 'desarrollo',
//    password: 'desarrollo',
//    server: '.\\SQLEXPRESS2',
//    database: 'BD_Ods_Inversiones_Replica',
//    options: {
//        encrypt: false // Use this if you're on Windows Azure 
//    }
//}


//var config = {
//    userName: 'desarrollo', // update me
//    password: 'desarrollo', // update me
//    server: '.\\SQLEXPRESS2', // update me
//    options: {
//        database: 'BD_Ods_Inversiones_Replica' //update me
//    }
//}
//var connection = new Connection(config);


//function getAllMonedas2(req, res, next) {
    
//    console.log('Reading rows from the Table...');
    
//    // Read all rows from table
//    request = new Request(
//        "select * from Moneda",
//        function (err, rowCount, rows) {
//            console.log(rowCount + ' row(s) returned');
//        }
//    );
    
//    request.on('row', function (columns) {
//        columns.forEach(function (column) {
//            console.log("%s\t%s", column.metadata.colName, column.value);
//        });
//    });
    
//    connection.execSql(request);

  
//}

//function getAllMonedas(req, res, next) {
//    console.log("ENtre 1");
    
//    connection.on('connect', function (err) {
//        if (err) {
//            console.log(err)
//        }
//        else {
//            console.log("ENtre");
//            getAllMonedas2(req, res, next)
//        }
//    });

//};




function getAllMonedas(req, res, next) {
    
    
    
    
    const pool1 = new sql.ConnectionPool(config, function(err) {
        // ... error checks 
        
        // Query 
        
        pool1.request()// or: new sql.Request(pool1) 
            .query('select * from Moneda', function(err, result) {
            
            res.status(200).json(result);
                
            //res.send(result);
            console.dir(result)
            })
 
        })
    
    pool1.on('error', function (err)  {
        console.log(err)
    })
 

    //const pool1 = new sql.ConnectionPool(config, err => {
    //    // ... error checks 
        
    //    // Query 
        
    //    pool1.request()// or: new sql.Request(pool1) 
    //        .query('select * from Moneda', (err, result) => {
            
    //            res.send(result);
    //            console.dir(result)
    //        })
 
    //    })
    
    //pool1.on('error', err => {
    //// ... error handler 
    //})
 


    
    //sql.connect(config).then(() => {
    //    return sql.query` select * from Moneda`
    //}).then(result => {
    //    res.send(result);

    //    console.dir(result)
    //    sql.close()

    //}).catch(err => {
    //    console.log(err);
    //})
    
    //sql.on('error', err => {
    //// ... error handler 
    //})    



    //sql.connect(config, function (err) {
        
    //    if (err) console.log(err);
        
    //    // create Request object
    //    var request = new sql.Request();
        
    //    // query to the database and get the records
    //    request.query('select * from Moneda', function (err, recordset) {
            
    //        if (err) console.log(err)
            
    //        // send records as a response
    //        res.send(recordset);
            
    //    });
    //});


};



module.exports = {
    getAllMonedas: getAllMonedas
};