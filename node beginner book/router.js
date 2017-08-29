// example for POST photo upload
function route(handle, pathname, solicitud, respuesta, dataPosteada) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](solicitud, respuesta, dataPosteada);
  } else {
    console.log("No se encontro request handler para " + pathname);
    respuesta.writeHead(404, {"Content-Type": "text/html"});
    respuesta.write("404 Not found");
    respuesta.end();
  }
}


exports.route = route;