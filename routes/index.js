/**
 * Created by Jinwoo on 2015-10-19.
 */
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var mysql = require('mysql');

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

/* GET home page. */
router.get('/', function(req, res) {
    connection.connect(function (err) {
        connection.query('select * from house', function (err, rows) {             //INSERT���� IF���� ���Ͽ� query�� �����ִ� ���·� PHP���� ����Ұ�!!!!
            if (err) {
                console.error('mysql GET connection error');
                console.errorr("Get err : " + err);
            }
            //console.log("rows : " + JSON.stringify(rows));           //�ӽ� �ּ�!
        res.render('index', { title: 'Home Energy Management System', rows:rows });
        //connection.release();
        });
    });
});

module.exports = router;