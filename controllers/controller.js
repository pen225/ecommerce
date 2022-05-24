const { request, response } = require("express");
const mysqlConnexion = require("../db");
const userQuery = require("../query");

const userController = class {
    // Afficher la page Index
    static accueil = async(req = request, res = response) => {
        // res.render('index')
        const article = await userQuery.selectArticle()
        console.log('article', article);
        res.render('index', {article:article})

        
        // userQuery.selectArticle()
        // .then(sucess =>{
        //     res.json(sucess)
        // })
        // .catch(error =>{
        //     console.log('errrrrrr', error);
        // })
    }

    // Afficher la page Homme
    static homme = (req = request, res = response) => {
        res.render('homme')
    }
    // Afficher la page Femme
    static femme = (req = request, res = response) => {
        res.render('femme')
    }
    // Afficher la page de Connexion
    static connexion = (req = request, res = response) => {
        res.render('connexion')
    }
    // Afficher la page de Detail
    static detail = (req = request, res = response) => {
        res.render('detail')
    }
    // Afficher le Panier
    static panier = (req = request, res = response) => {
        res.render('panier')
    }
    // Afficher la Commande
    static commande = (req = request, res = response) => {
        res.render('commande')
    }
}

module.exports = userController;