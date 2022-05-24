const mysqlConnexion = require("./db")

mysqlConnexion

const userQuery = class{
    static selectArticle = () => {
        return new Promise ((resolve, reject) => {
            mysqlConnexion.query('SELECT * FROM article LIMIT 0,4', (err, rs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rs);
                }
            })
        })
    }

    
}


module.exports = userQuery;