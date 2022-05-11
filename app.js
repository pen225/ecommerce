const express = require('express');
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

app.use('/', router)


app.listen(7000, () => {
    console.log('Ecoutez au port 7000');
})