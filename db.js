const mysql = require('mysql');

const mysqlConnexion = mysql.createConnection({
    host: '192.168.64.2',
    user: 'test',
    password: '12345',
    database: 'ecommerce'
});

module.exports = mysqlConnexion;


