/**
 * Created by Jinwoo on 2016-02-06.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var ejs = require('ejs');

//MySQL���� DB����
var connection = mysql.createConnection({
    connectionLimit: 10,
    host: '127.0.0.1',            //���� MySQLȯ���� �׽�Ʈ�� ���÷�.
    port: 9629,
    user: 'root',
    database: 'hemsdb',
    password: 'wkran418*'
});
console.log("log" + __dirname);

//router.get('/temp=/:tempValue', function(req, res) {
router.get('/temp=:tempValue', function(req, res) {
    var tempV = req.params.tempValue;

    console.log("temp = " + tempV);      //�ӽ÷� temp���� ����� �������� �������.

    connection.connect(function (err) {
        connection.query('UPDATE house set temp=(temp+1) where Object="Heaters"', function (err, rows) {             //update���� ���� house ���̺� 'temp'�÷��� req���� �־��ش�.
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