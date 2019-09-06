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
module.exports = {database}