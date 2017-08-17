// example for regular POST text
// function route(handle, pathname, respuesta, dataPosteada) {
//   console.log("A punto de rutear una peticion para " + pathname);
//   if (typeof handle[pathname] === 'function') {
//   	return handle[pathname](respuesta, dataPosteada);
//   } else {
//   	console.log ("No se encontro request handler para " + pathname);
//   	respuesta.writeHead(404, {"Content-Type": "text/html"});
//     respuesta.write("404 No Encontrao");
//     respuesta.end();

//   	//return "404 No Encontrado"; // for a regular blocking operation
//   }
// }

// example for POST photo upload
function route(handle, pathname, solicitud, respuesta) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](solicitud, respuesta);
  } else {
    console.log("No se encontro request handler para " + pathname);
    respuesta.writeHead(404, {"Content-Type": "text/html"});
    respuesta.write("404 Not found");
    respuesta.end();
  }
}


exports.route = route;