// Node native objects
var http = require("http");
var url = require("url");

// listener settings with dependency injection from router and requestHandlers
function iniciar(route, handle) {
	function onRequest(solicitud, respuesta) {
		var pathname = url.parse(solicitud.url).pathname; // extract target url 
		console.log("Peticion para " + pathname + " recibida.");

		if(pathname === '/subirFoto') {
			// example for photo upload with formidable
			route(handle, pathname, solicitud, respuesta, dataPosteada);
		} else {
			// example for big POST data
			solicitud.setEncoding("utf8");
			var dataPosteada = "";
			solicitud.addListener("data", function(trozoPosteado) {
				dataPosteada += trozoPosteado;
				console.log("Recibido trozo POST '" + trozoPosteado + "'.");
			});
			solicitud.addListener("end", function() {
				route(handle, pathname, solicitud, respuesta, dataPosteada);
			});
		}
	}

	http.createServer(onRequest).listen(80);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;