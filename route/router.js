const express = require('express');
const userController = require('../controllers/controller');
const router = express.Router();

// Route Get Deatil
router.get('/', userController.accueil);
router.get('/homme', userController.homme);
router.get('/femme', userController.femme);
router.get('/connexion', userController.connexion);
router.get('/detail/:id', userController.detail);
router.get('/panier', userController.panier);
router.get('/commande', userController.commande);
router.get('/admin', userController.admin);


module.exports = router;