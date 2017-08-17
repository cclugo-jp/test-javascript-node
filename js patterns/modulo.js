var var1, var2;
exports.setVar1 = function(x) { var1 = x; };
exports.setVar2 = function(x) { var2 = x; };
exports.getVar = function() { return { v1: var1, v2: var2 }; };

module.exports = function(x) {
	var valores = {n1: null, n2: null, suma: null};
	for(var propiedad in valores) {
		if (valores[propiedad] !== 'undefined') {
			valores[propiedad] = x[propiedad]; } }
	var funciones = {
		sumar: function() {valores.suma = valores.n1+valores.n2;},
		restar: function() {valores.suma = n1-n2;},
		getVar: function() {return valores;} };
	return funciones;
}

// Full OO
// var Valores = function() { //constructor en mayuscula
// 	this.datos = {n1: null, n2: null, suma: null};
// 	this.rellenar = function(x) {
// 		for(var propiedad in this.datos) {
// 		if (this.datos[propiedad] !== 'undefined') {
// 				this.datos[propiedad] = x[propiedad];
// 			}
// 		}
// 	};
// 	this.sumar = function() {
// 		this.datos.suma = this.datos.n1+this.datos.n2;
// 	};
// 	this.restar = function() {
// 		this.datos.suma = this.datos.n1-this.datos.n2;
// 	};
// 	this.getVar = function() {return this.datos;}; 
// };
// module.exports = function(x) {
// 	var instancia = new Valores();
// 	instancia.rellenar(x); //factory function (design pattern)
// 	return instancia;
// };