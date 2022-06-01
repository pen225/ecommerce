const express = require('express');
const userController = require('../controllers/controller');
const uploadArticle = require('../middlware/multer');
const router = express.Router();



// Route GET
router.get('/', userController.accueil);
router.get('/homme', userController.homme);
router.get('/femme', userController.femme);
router.get('/connexion', userController.connexion);
router.get('/detail/:id', userController.detail);
router.get('/panier', userController.panier);
router.get('/commande', userController.commande);
router.get('/admin', userController.admin);
router.get('/detailArticle/:id', userController.detailArticle);

// Route POST
router.post('/postArticle',uploadArticle.single('image_article'), userController.insertAticle);


module.exports = router;