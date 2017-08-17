var fs = require("fs");

var data = fs.readFileSync('text.txt');

// operacion sincrona
console.log(data.toString());
console.log("Program Ended");

console.log('*********************************');
// operacion asincrona
fs.readFile('text.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");