var express = require('express');
const { Register } = require('../bin/controllers/users.controllers');
var router = express.Router();

/* GET home page. */
router.post('/register', Register);

module.exports = router;
