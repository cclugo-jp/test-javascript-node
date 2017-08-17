var express = require('express');
var router = express.Router();

/* GET home page. */

// custom code .....................

var variables = require('../app_modules');

var valores1 = {n1:11, n2:22};
var obj1 = variables(valores1);
obj1.sumar();
var valores2 = {n1:111, n2:222};
var obj2 = variables(valores2);
//console.log(obj1.getVar());
//console.log(obj2.getVar());

router.get('/objeto1', function(req, res) {
  res.render('asdf', { 
    result: 'el objeto 1',
    title: 'el titulo'
  });
  //res.send(obj1.getVar());
});

// custom code .....................

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
