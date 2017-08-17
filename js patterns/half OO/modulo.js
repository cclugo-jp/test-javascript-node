module.exports = function(x){
    var valores = {n1: null, n2: null, operacion: null};
    for(var propiedad in valores){ //auto setter function
        if(valores[propiedad] !== 'undefined'){
            valores[propiedad] = x[propiedad];
        }
    }
    var funciones = {
        sumar: function(){ valores.operacion = valores.n1 + valores.n2; },
        restar: function(){ valores.operacion = valores.n1 - valores.n2; },
        getVar: function(){ return valores; }
    };
    return funciones;
}