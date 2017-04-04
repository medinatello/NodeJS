var express = require('express');
var router = express.Router();
var db = require('../models/moneda.js')


/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});


router.get('/All', db.getAllMonedas);

module.exports = router;