function suma1(numero_uno,numero_dos){
   setTimeout(function(){
      var resultado = numero_uno + numero_dos;
      return resultado;
   }, 500);
}

var resultado = suma1(2,5)

console.log(resultado); // muestra undefined porque es asincrona con retraso
console.log('*********');

// ahora de modo asincrono
function suma2(numero_uno,numero_dos,callback){
   setTimeout(function(){
      var resultado = numero_uno + numero_dos;
      callback(resultado);
   }, 500);
}

suma2(2,5,function(resultado){
   console.log(resultado);
})