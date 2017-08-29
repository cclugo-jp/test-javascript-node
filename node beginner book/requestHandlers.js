var querystring = require("querystring");
var fs = require("fs"); //file system
var formidable = require("formidable");

function iniciar(solicitud, respuesta, dataPosteada) { //dataPosteada isn't in use for images
  console.log("request handler 'iniciar' ha sido llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />'+
    '</head>'+
    '<body>'+

    // input form for images
    '<form action="/subirFoto" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="imagen">'+
    '<input type="submit" value="enviar imagen" />'+
    '</form>'+

    // input form for only text
    '<form action="/subirTexto" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+

    '</form>'+
    '</body>'+
    '</html>';

    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write(body);
    respuesta.end();
}

function subirFoto(solicitud, respuesta) {
  console.log("Request handler 'subirFoto' was called.");
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(solicitud, function(error, fields, files) {
    console.log("parsing done");
  /* Possible error on Windows systems:
  tried to rename to an already existing file */
  fs.rename(files.imagen.path, "/tmp/test.png", function(err) {
    if (err) {
      fs.unlink("/tmp/test.png");
      fs.rename(files.imagen.path, "/tmp/test.png");
    }
  });
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write("received image:<br/>");
    respuesta.write("<img src='/mostrarFoto' />");
    respuesta.end();
  });
}

// example for POST text
function subirTexto(solicitud, respuesta, dataPosteada) {
  console.log("request handler 'subirTexto' ha sido llamado.");
  console.log(dataPosteada);

  respuesta.writeHead(200, {"Content-Type": "text/html"});
  respuesta.write("Tu enviaste el texto: : " +
  querystring.parse(dataPosteada)["text"]);
  respuesta.end();
}

function mostrarFoto(solicitud, respuesta) { 
  console.log("request handler 'mostrarFoto' ha sido llamado");
  // you must create a /tmp folder in C:/
  fs.readFile("/tmp/test.png", "binary", function(error, file) {
    if(error) {
      respuesta.writeHead(500, {"Content-Type": "text/plain"});
      respuesta.write(err + "\n");
      respuesta.end();
    } else {
      respuesta.writeHead(200, {"Content-Type": "image/png"});
      respuesta.write(file, "binary");
      respuesta.end();
    }
  });
}

function favicon() {
  console.log("request handler 'favicon' ha sido llamado.");
  return "Hola favicon";
}

exports.iniciar = iniciar;
exports.subirFoto = subirFoto;
exports.subirTexto = subirTexto;
exports.mostrarFoto = mostrarFoto;
exports.favicon = favicon;