// POST text and image

// Server must start with this file with "node index.js" command line

var server = require("./server"); // listener settings
var router = require("./router"); // router basic functions
var requestHandlers = require("./requestHandlers"); // router specific functions  

//initialize array with route to specific function
var handle = {} 
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subirFoto"] = requestHandlers.subirFoto;
handle["/subirTexto"] = requestHandlers.subirTexto;
handle["/mostrarFoto"] = requestHandlers.mostrarFoto;
handle["/favicon.ico"] = requestHandlers.favicon;

// everything start here, also router and requestHandler dependency injected
server.iniciar(router.route, handle);