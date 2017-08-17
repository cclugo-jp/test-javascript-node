var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kanjisama'
});

var q = "SELECT * FROM test WHERE `name` LIKE 'asdf'";

var callback = function(err, response){
    if (err) throw err
    console.log(response[0].name);
    //connection.end();  // should not finish connection if going to reuse
    var q2 = "SELECT * FROM test WHERE `phone` LIKE '"+response[0].phone+"'";
    connection.query(q2, callback2)
}
var callback2 = function(err, response){
    if (err) throw err
    console.log(response);
    connection.end();
}
connection.query(q, callback) 

