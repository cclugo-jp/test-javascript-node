// Import events module
var events = require('events');
// and mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kanjisama'
});

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var validar = function() {
    if ((q1ok == 'ok')&&(q2ok == 'ok')) {
        console.log(queryResp)
        connection.end();
    }   
}
eventEmitter.on('respuesta', validar);

var sqlCallback1 = function(err, response) {
    if (err) throw err;
    console.log('nombre: '+response[0].name);
    queryResp.push(response);
    q1ok = 'ok'
    eventEmitter.emit('respuesta');
}
var sqlCallback2 = function(err, response) {
    if (err) throw err;
    console.log('nombre: '+response[0].name);
    q2ok = 'ok'
    queryResp.push(response);
    eventEmitter.emit('respuesta');
}

var q1 = "SELECT * FROM test WHERE `name` LIKE 'asdf'";
var q2 = "SELECT * FROM test WHERE `name` LIKE 'pepe'";
var queryResp = []
var q1ok, q2ok
connection.query(q1, sqlCallback1) 
connection.query(q2, sqlCallback2) 

console.log("programa asincrono ok");




// failed attemps
/************************************************************************************* */

/* GET table with info. */
// router.get('/query-data/:busca', function(req, res, next) {
//   var connection = require('../database');
//   var events = require('events');
//   var eventEmitter = new events.EventEmitter();
//   var respRecibidas = 1; // counter of words in the search
//   var queryText;
//   var queryPalabra, queryComponente;
//   var arrQueryPalabra = [];
//   var arrQueryComponente = [];
//   var arrQueryTotal = [];
//   var buscar = req.params.busca;

//   var buscaPalabra = function (texto) {
//     return "SELECT * FROM kanji WHERE `palabra` LIKE '"+texto+"%'";
//   }
//   var buscaComponente = function (texto) {
//     var qComp = "SELECT * FROM kanji WHERE (";
//     qComp += "`comp1` LIKE '"+texto+"%' ";
//     qComp += "OR `comp2` LIKE '"+texto+"%' ";
//     qComp += "OR `comp3` LIKE '"+texto+"%' ";
//     qComp += "OR `comp4` LIKE '"+texto+"%' ";
//     qComp += "OR `comp5` LIKE '"+texto+"%' ";
//     qComp += "OR `comp6` LIKE '"+texto+"%')";
//     return qComp;
//   }

//   var arrayTexto = buscar.split(" ");
//   //console.log('longitud array texto: '+arrayTexto.length);

//   var validar = function() {
//     //console.log('respuestas recibidas: '+respRecibidas+', arrayTexto.length: '+arrayTexto.length)
//     if (respRecibidas == arrayTexto.length*2) {
//         //console.log('pal: '+arrQueryPalabra.length+', comp: '+arrQueryComponente.length)
//         if (!arrQueryPalabra.length && !arrQueryComponente.length) {
//           console.log('Empty result at db query for word: '+buscar);
//           res.send('Sin coincidencias en la base de datos');
//         }
//         arrQueryTotal = arrQueryPalabra.concat(arrQueryComponente);
//         //res.send('mostrando contenido');
//         res.render('tabla', {array: arrQueryTotal[0]});
//     } else {
//       respRecibidas += 1;
//     }
//   }
//   eventEmitter.on('respuesta', validar);

//   var sqlCallback = function(err, results) {
//     if ( err ) {
//       // handle the error safely
//       console.log('Database error, last query: '+queryPalabra);
//       console.log(err);
//       console.log(err.code);
//     } else if (!results.length) {
//       // no error occured, continue on
//       console.log('Empty result at db query on palabra, last query: '+queryPalabra);
//       eventEmitter.emit('respuesta');
//     } else {
//       //res.render('tabla', {array: results});
//       arrQueryPalabra.push(results);
//       console.log('paja1:')
//       console.log(results)
//       //console.log('pajazo 1: '+arrQueryPalabra[0])
//       eventEmitter.emit('respuesta');
//     }
//   }
//   var sqlCallback2 = function(err, results2) {
//     if ( err ) {
//       // handle the error safely
//       console.log('Database error, last query: '+queryComponente);
//       console.log(err);
//       console.log(err.code);
//     } else if (!results2.length) {
//       // no error occured, continue on
//       console.log('Empty result at db query on componentes, last query: '+queryComponente);
//       eventEmitter.emit('respuesta');
//     } else {
//       //res.render('tabla', {array: results});
//       arrQueryComponente.push(results2);
//       console.log('paja2:')
//       console.log(results2)
//       //console.log('pajazo 2: '+arrQueryComponente[0])
//       eventEmitter.emit('respuesta');
//     }
//   }

//   for (var i = 0, len = arrayTexto.length; i < len; i++) {
//     queryPalabra = buscaPalabra(arrayTexto[i]);
//     connection.query(queryPalabra, sqlCallback);
//     queryComponente = buscaComponente(arrayTexto[i]);
//     connection.query(queryComponente,  sqlCallback2);
//   }

//   // res.send('pedazo de asdf') //para que no se chingue el sistema mientras testeo
  
// });


//****************************************************************************************** */

// router.get('/query-data/:busca', function(req, res, next) {
//   var connection = require('../database');
//   var events = require('events');
//   var eventEmitter = new events.EventEmitter();
//   var respRecibidas = 1; // counter of words in the search
//   var queryResp = [] // to get all the results in one array and render to tabla

//   var buscar = req.params.busca;
//   var arrayTexto = buscar.split(" ");
//   //console.log('longitud array texto: '+arrayTexto.length);

//   var validar = function() {
//     //console.log('respuestas recibidas: '+respRecibidas+', arrayTexto.length: '+arrayTexto.length)
//     if (respRecibidas == arrayTexto.length) {
//         //connection.end();
//         res.render('tabla', {array: queryResp});//console.log(queryResp[0][0].palabra)
//         //removeEventListener('respuesta', validar)
//     } else {
//       respRecibidas += 1;
//     }
//   }
//   eventEmitter.on('respuesta', validar);

//   var sqlCallback = function(err, results) {
//       if ( err ) {
//         // handle the error safely
//         console.log('Database error, last query: '+q);
//         console.log(err);
//         console.log(err.code);
//       } else if (!results.length) {
//         // no error occured, continue on
//         console.log('Empty result at db query, last query: '+q);
//         res.send('Sin coincidencias');
//       } else {
//         queryResp = queryResp.concat(results);
//         eventEmitter.emit('respuesta');
//       }
//     }
  
//   for (var i = 0, len = arrayTexto.length; i < len; i++) {
//     var q = "SELECT * FROM kanji WHERE `palabra` LIKE '"+arrayTexto[i]+"%'";
//     connection.query(q, sqlCallback);
//   }

// });

