const express = require('express');
const mysqlConnexion = require('./db');
const router = require('./route/router');
const app = express();


// view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// ----
app.use('/public', express.static('public'))

// ---
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

// --- Use router
mysqlConnexion.connect((error) => {
    if (error) {
        console.log("Erreur de connexion à la base de donnée", error);
    }else{
        console.log('Connexion a la base de donnees reussie');
        app.use('/',router)
    }
})



app.listen(7000, () => {
    console.log('Ecoutez au port 7000');
})