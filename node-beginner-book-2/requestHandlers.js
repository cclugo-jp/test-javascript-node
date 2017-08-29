var querystring = require("querystring");

function iniciar(respuestax, dataPosteadax) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    respuestax.writeHead(200, {"Content-Type": "text/html"});
    respuestax.write(body);
    respuestax.end();
}

function subir(respuestax, dataPosteadax) {
  console.log("Manipulador de peticiones 'subir' fue llamado.");
  respuestax.writeHead(200, {"Content-Type": "text/html"});
  respuestax.write("Tu enviaste el texto: : " + querystring.parse(dataPosteadax)["text"]);
  respuestax.end();
}

exports.iniciar = iniciar;
exports.subir = subir;