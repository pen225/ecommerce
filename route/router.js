const express = require('express');
const userController = require('../controllers/controller');
const router = express.Router();


router.get('/', userController.accueil);
router.get('/homme', userController.homme);
router.get('/femme', userController.femme);
router.get('/connexion', userController.connexion);


module.exports = router;