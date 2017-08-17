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
    '<form action="/subir" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="imagen">'+
    '<input type="submit" value="enviar imagen" />'+

    // input form for only text
    // '<form action="/subir" method="post">'+
    // '<textarea name="text" rows="20" cols="60"></textarea>'+
    // '<input type="submit" value="Enviar texto" />'+

    '</form>'+
    '</body>'+
    '</html>';

    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write(body);
    respuesta.end();

  //return "Hola Iniciar"; //for plain html respuesta
}

// function iniciar() {
//   console.log("Manipulador de peticion 'iniciar' fue llamado.");
//   function sleep(milliSeconds) {  
//     // obten la hora actual
//     var startTime = new Date().getTime();
//     // atasca la cpu
//     while (new Date().getTime() < startTime + milliSeconds); 
//   }
//   sleep(10000);
//   return "Hola Iniciar";
// }

function subir(solicitud, respuesta) {
  console.log("Request handler 'subir' was called.");
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
    respuesta.write("<img src='/mostrar' />");
    respuesta.end();
  });
}

// example for POST text
// function subir(respuesta, dataPosteada) {
//   console.log("request handler 'subir' ha sido llamado.");

//   respuesta.writeHead(200, {"Content-Type": "text/html"});
//   respuesta.write("Tu enviaste el texto: : " +
//   querystring.parse(dataPosteada)["text"]);
//   respuesta.end();

//   // return "Hola Subir"; //for plain html respuesta
// }

function mostrar(solicitud, respuesta) { 
  console.log("request handler 'mostrar' ha sido llamado");
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
exports.subir = subir;
exports.mostrar = mostrar;
exports.favicon = favicon;