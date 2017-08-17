// Node native objects
var http = require("http");
var url = require("url");

// listener settings with dependency injection from router and requestHandlers
function iniciar(route, handle) {
	function onRequest(solicitud, respuesta) {
		var pathname = url.parse(solicitud.url).pathname; // extract target url 
		console.log("Peticion para " + pathname + " recibida.");

		// example for photo upload with formidable
		route(handle, pathname, solicitud, respuesta);

		// example for big POST data
		// solicitud.setEncoding("utf8");
		// var dataPosteada = "";
		// solicitud.addListener("data", function(trozoPosteado) {
		// 	dataPosteada += trozoPosteado;
		// 	console.log("Recibido trozo POST '" + trozoPosteado + "'.");
		// });
		// solicitud.addListener("end", function() {
		// 	route(handle, pathname, respuesta, dataPosteada);
		// });

		// non-blocking operation example
		// route(handle, pathname, respuesta); 

        // most basic example
		// respuesta.writeHead(200, {"Content-Type": "text/html"});
		// var content = route(handle, pathname);
		// respuesta.write(content);
		// respuesta.end();
	}

	http.createServer(onRequest).listen(80);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;