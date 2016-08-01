/**
 * Created by Jinwoo on 2015-10-19.
 */
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var mysql = require('mysql');

//MySQL과의 DB연동
var connection = mysql.createConnection({
  connectionLimit: 10,
  host: '127.0.0.1',            //현재 MySQL환경을 테스트상 로컬로.
  port: 9629,
  user: 'root',
  database: 'hemsdb',
  password: 'wkran418*'
});
console.log("log" + __dirname);

/* GET home page. */
router.get('/', function(req, res) {
    connection.connect(function (err) {
        connection.query('select * from house', function (err, rows) {             //INSERT문을 IF문을 통하여 query를 날려주는 형태로 PHP문을 대신할것!!!!
            if (err) {
                console.error('mysql GET connection error');
                console.errorr("Get err : " + err);
            }
            //console.log("rows : " + JSON.stringify(rows));           //임시 주석!
        res.render('index', { title: 'Home Energy Management System', rows:rows });
        //connection.release();
        });
    });
});

module.exports = router;