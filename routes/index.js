var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/procesos', function(req, res, next) {
  res.render('procesos', { title: 'Express' });
});

router.get('/consultas', function(req, res, next) {
  res.render('consultas', { title: 'Express' });
});

module.exports = router;
