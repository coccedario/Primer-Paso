var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('promo2', { title: 'Promocion 25%' });
});

module.exports = router;
