const fs = require('fs') //加载fs模块

const express = require('express'); //加载express 框架

const app = express();  //创建服务

app.listen(3000, console.log('服务器开启成功')) //开启服务

app.use(express.static('public'));  //处理静态文件

const bodyParser = require('body-parser');              //处理post请求
app.use(bodyParser.urlencoded({ extended: false }));    //处理post请求

//封装mysql模块
function database(sql, callback) {
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'admin',
        database: 'herosnverdie',
        multipleStatements: true
    });
    conn.query(sql, callback);
    conn.end()
}


//测试接口
app.get('/time', (req, res) => {
    res.send(Date.now() + '')
})

//获取数据请求
app.get('/getMsg', (req, res) => {


    //mysql
    let sql = 'select * from heroes'
    database(sql, (err, result) => {
        if (err) {
            console.log('获取失败')
        } else {
            console.log('获取数据成功')
            res.send(result)
        }
    })
})

//删除一条数据
app.post('/deleteMsg',(req,res) => {
    req.body
})

