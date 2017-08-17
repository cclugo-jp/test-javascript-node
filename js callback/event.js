// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
   console.log('resultado: '+resultado);
});

// Fire the connection event 
function suma1(numero_uno, numero_dos, eventEmitter){
   setTimeout(function(){
      resultado = numero_uno + numero_dos;
      eventEmitter.emit('connection');
   }, 500);
}

console.log("programa asincrono ok");

var resultado = 'resultado: sin definir';
suma1(2, 5, eventEmitter)
console.log(resultado);