/**
 * Created by Jinwoo on 2016-02-06.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var ejs = require('ejs');

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

//router.get('/temp=/:tempValue', function(req, res) {
router.get('/temp=:tempValue', function(req, res) {
    var tempV = req.params.tempValue;

    console.log("temp = " + tempV);      //임시로 temp값이 제대로 오는지를 출력해줌.

    connection.connect(function (err) {
        connection.query('UPDATE house set temp=(temp+1) where Object="Heaters"', function (err, rows) {             //update문을 통해 house 테이블에 'temp'컬럼에 req값을 넣어준다.
            if (err) {
                console.error('mysql GET connection error');
                console.error("Get err : " + err);
            }
            else {
                console.log("success!");
            }
            res.send('temp', { title: 'Home Energy Management System', rows:rows });
        });
    });
});

module.exports = router;