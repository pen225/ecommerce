const { request, response } = require("express");
const mysqlConnexion = require("../db");
const userQuery = require("../query");

const userController = class {

    // Afficher la page Index
    static accueil = async(req = request, res = response) => {
        const article = await userQuery.selectArticle()
        res.render('index', {article:article})
    }

    // Afficher la page Homme
    static homme = (req = request, res = response) => {
        userQuery.selectArticleHomme()
        .then((result) => {
            res.render('homme', {articleHomme:result})
        }).catch((err) => {
            
        });
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
    static detail = async(req = request, res = response) => {
        let idArticle = req.params.id;
        const detailArticle = await userQuery.selectOneArticle(idArticle)
        res.render('detail', {infoArticle:detailArticle[0]});
        userQuery.selectOneArticle(idArticle)
    }

    // Afficher le Panier
    static panier = (req = request, res = response) => {
        res.render('panier')
    }
    // Afficher la Commande
    static commande = (req = request, res = response) => {
        res.render('commande')
    }
    // Afficher la Pade Administrateur
    static admin = (req = request, res = response) => {
        res.render('admin')
    }
}

module.exports = userController;