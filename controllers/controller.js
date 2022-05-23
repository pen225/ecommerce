const { request, response } = require("express");

const userController = class {
    // Afficher la page Index
    static accueil = (req = request, res = response) => {
        res.render('index')
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