// only POST text

var servidor = require("./servidor");
var enrutador = require("./enrutador");
var requestHandlers = require("./requestHandlers");

var handlex = {}
handlex["/"] = requestHandlers.iniciar;
handlex["/iniciar"] = requestHandlers.iniciar;
handlex["/subir"] = requestHandlers.subir;

servidor.iniciar(enrutador.enrutar, handlex);