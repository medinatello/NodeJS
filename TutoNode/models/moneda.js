//var Connection = require('tedious').Connection;
//var Request = require('tedious').Request;

const sql = require('mssql');

config = {
    user: 'desarrollo',
    password: 'desarrollo',
    server: '.\\SQLEXPRESS2',
    database: 'BD_Ods_Inversiones_Replica',
    
}

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
    console.log("ENtre 1");

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

};



module.exports = {
    getAllMonedas: getAllMonedas
};