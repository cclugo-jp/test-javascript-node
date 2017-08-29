function enrutar(handlez, pathnamez, respuestaz, dataPosteadax) {
  console.log("A punto de rutear una peticion para " + pathnamez);
  if (typeof handlez[pathnamez] === 'function') {
    handlez[pathnamez](respuestaz, dataPosteadax);
  } else {
    console.log("No hay manipulador de peticion para " + pathnamez);
    respuestaz.writeHead(404, {"Content-Type": "text/html"});
    respuestaz.write("404 No Encontrado");
    respuestaz.end();
  }
}

exports.enrutar = enrutar;