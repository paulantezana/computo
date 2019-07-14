var express = require('express');
var router = express.Router();

const { Home } = require('../controllers/home');

router.get('/', Home);

router.get('/procesos', function(req, res, next) {
  res.render('procesos', { title: 'Express' });
});

router.get('/consultas', function(req, res, next) {
  res.render('consultas', { title: 'Express' });
});

module.exports = router;
