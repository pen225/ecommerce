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
}

module.exports = userController;