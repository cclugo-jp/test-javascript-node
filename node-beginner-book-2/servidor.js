var http = require("http");
var url = require("url");

function iniciar(enrutarx, handley) {
  function onRequest(solicitud, respuesta) {
  	var dataPosteada = "";
  	var pathnamex = url.parse(solicitud.url).pathname;
    console.log("Petición para " + pathnamex + " recibida.");

    solicitud.setEncoding("utf8");

    solicitud.addListener("data", function(trozoPosteado) {
    	dataPosteada += trozoPosteado;
    	console.log("recibido trozo POST '" + trozoPosteado + "'.");
    });

    solicitud.addListener("end", function() {
    	enrutarx(handley, pathnamex, respuesta, dataPosteada);
    });
  }

  http.createServer(onRequest).listen(80);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;