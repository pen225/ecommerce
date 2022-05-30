const mysqlConnexion = require("./db")

mysqlConnexion

const userQuery = class{
    // Selectionner les quatre premiers produits recents
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

    // Selectionner un article
    static selectOneArticle = (id) => {
        console.log('id du query',id)
        return new Promise ((resolve, reject) => {
            mysqlConnexion.query('SELECT * FROM article where id_article = ?',[id], (err, rs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rs);
                }
            })
        })
    }

    // Selectionner des articles hommes
    static selectArticleHomme = () => {
        return new Promise ((resolve, reject) => {
            mysqlConnexion.query('SELECT * FROM article where id_categorie = ?',[1], (err, rs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rs);
                    console.log('resultat des articles hommes', rs);
                }
            })
        })
    }

    
}


module.exports = userQuery;