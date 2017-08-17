// Server must start with this file with "node index.js" command line

var server = require("./server"); // listener settings
var router = require("./router"); // router basic functions
var requestHandlers = require("./requestHandlers"); // router specific functions  

//initialize array with route to specific function
var handle = {} 
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["/mostrar"] = requestHandlers.mostrar;
handle["/favicon.ico"] = requestHandlers.favicon;

// function asdf() {console.log('qwer')}
// var test = {}
// test["1"] = asdf;
// console.log (test["1"]);
// test["1"]();

// everything start here, also router and requestHandler dependency injected
server.iniciar(router.route, handle);