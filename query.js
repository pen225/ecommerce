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
    static selectAllArticle = () => {
        return new Promise ((resolve, reject) => {
            mysqlConnexion.query('SELECT * FROM article', (err, rs) => {
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

    // Ajouter un article
    static insertAticle = (data, imageArticle) => {
        // console.log('data maison', data, imageArticle);
        return new Promise ((resolve, reject) => {
            let {reference_article, libelle_article, marque_article, prix_article, quantite_article, description_article, date_ajout_article, date_maj_article, image_article, id_categorie} = data;
            let sql = "insert into article (reference_article, libelle_article, marque_article, prix_article, quantite_article, description_article, date_ajout_article, date_maj_article, image_article, id_categorie) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            mysqlConnexion.query(sql, [reference_article, libelle_article, marque_article, prix_article, quantite_article, description_article, date_ajout_article, date_maj_article, imageArticle, id_categorie], (err, rs) => {
                if (rs) {
                    console.log('rs', rs);
                    resolve(rs)
                } else {
                    console.log('err', err);
                    reject(err)
                }
            })
        })
    }

    
}


module.exports = userQuery;