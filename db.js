const mysql = require('mysql');

const mysqlConnexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

module.exports = mysqlConnexion;


