function suma1(numero, res_anterior){
   setTimeout(function(){
      var suma = numero + res_anterior;
      return suma;
   }, 500);
}

var resultado = 0
resultado = suma1(2, resultado)

console.log(resultado); // muestra undefined porque es asincrona con retraso
console.log('*******************************');

// ahora de modo asincrono con Promises

function suma2 (numero, res_temporal){
    const promesa = new Promise(function (solucion, fallo) {
        setTimeout(function(){
            res_temporal = numero + res_temporal;
            solucion(res_temporal);
        }, 500);
        if (!res_temporal) {
            fallo(new Error('No hay resultado'))
        }
    })
    return promesa
}

var mostrar_resultado = function(p){
   console.log(p);
   return p
}
var resultado_formateado = function(pp){
    console.log('el resultado es: '+pp)
}

var resultado = 5
//suma2(3, resultado).then(function (r) { console.log(r) })
suma2(4, resultado).then(mostrar_resultado).then(resultado_formateado)


// ejemplo bueno con array

// function addToArray (data, array) {  
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       array.push(data)
//       resolve(array)
//     }, 500);

//     if (!array) {
//       reject(new Error('No existe un array'))
//     }
//   })

//   return promise
// }

// const array = [1, 2, 3]  
// addToArray(4, array).then(function () {  
//   console.log(array)
// })

// const array = [1, 2, 3]  
// addToArray(4, array)  
//   .then(function() { return addToArray(5, array) })
//   .then(function() { return addToArray(6, array) })
//   .then(function() { return addToArray(7, array) })
//   .then(function () {
//     console.log(array)
//   })

// (4 seg. de delay)-> [1,2,3,4,5,6,7] 


/****** el ejemplito mas simple ******************************* */
// var promisex = new Promise(function(resolve, reject) {
//   resolve(1);
// });

// promisex.then(function(val) {
//   console.log('primero '+val); // 1
//   return val + 2;
// }).then(function(val) {
//   console.log('segundo '+val); // 3
// })
