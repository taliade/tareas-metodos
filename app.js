const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 4000;

//leer mis archivos estaticos desde public
app.use(express.static('public'));



/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use(require('./src/routes/routes'));


app.listen(PORT, () => {
    console.log(`Corriendo el servidor en puerto 4000  http://localhost:${PORT}`)});
