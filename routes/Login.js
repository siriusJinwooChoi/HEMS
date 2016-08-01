/**
 * Created by Jinwoo on 2015-11-25.
 */
var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.get('/', function(req, res) {
    res.render('login', { title: 'Home Energy Management System'});
});

module.exports = router;