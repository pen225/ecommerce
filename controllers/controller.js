const { request, response } = require("express");

const userController = class {
    static accueil = (req = request, res = response) => {
        res.render('index')
    }
}

module.exports = userController;