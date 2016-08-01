/**
 * Created by Jinwoo on 2016-02-06.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //var tempValue = req.params.temp;
    res.render('temp', { title: 'Home Energy Management System', temps:req});
});
module.exports = router;