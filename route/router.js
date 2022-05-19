const express = require('express');
const userController = require('../controllers/controller');
const router = express.Router();

// Route Get Deatil
router.get('/', userController.accueil);
router.get('/homme', userController.homme);
router.get('/femme', userController.femme);
router.get('/connexion', userController.connexion);
router.get('/detail', userController.detail);
router.get('/panier', userController.panier);


module.exports = router;