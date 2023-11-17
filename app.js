const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const fs = require('fs');

const PORT = 4000;

//leer mis archivos estaticos desde public
app.use(express.static('public'));



/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Confi Layout 
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// Rutas
app.use(require('./src/routes/routes'));


app.listen(PORT, () => {
    console.log(`Corriendo el servidor en puerto 4000  http://localhost:${PORT}`)});
