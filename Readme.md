
## Comenzamos el proyecto
inicios el Package.json

```bash
  npm init -y
```
## 1er Paso Instalaciones 
### instalamos Express y nodemon 

```bash
  npm install express --save
```

### instalamos nodemon

```bash
  npm install -D nodemon 
```

### Configuramos el Package
Vamos a configurar como va arrancar nuestra applicacion, desde   npm run dev (nodemon)  y  npm start  ( node)
```bash
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "start": "node app.js"
  },
```

### Desde la terminal Arrancan con
Nodemon  : 
```bash
  npm run dev
```
Node: 
```bash
  npm start 
```


### Creamos Entry Point
Crear archivo app.js
## Servidor 
```bash
const express = require('express');
const app = express();
const PORT = 3000;




app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});
```


### Comenzamos la estructira mvc
```bash
 crear carpeta scr 
 dentro src  3 carpetas: 
 controllers
 routes
 views

```

### Comenzamos con routes
tareasRouter.js 
```bash
const express = require('express');
const router = express.Router();

const controller = require('../controllers/tareasControllers');

router.get('/', controller.index );

module.exports = router
```

#### Luego Creamos controllers
tareasController.js
```bash
  const index = (req, res) => {
    res.send("Tarea");
}

module.exports ={
    index,
}

```


## 2do PASO ACTUALIZAMOS  app.js
```bash
  const express = require('express');
const app = express();
const PORT = 3000;



app.use(require('./src/routes/tareaRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});

```
## 3er PASO Instalacion ejs 

```bash
  npm install ejs 
```
Creamos el archivo index.ejs en la Carpeta de Views 

Configuramos la teplate EJS 
```bash
const express = require('express');
const app = express();
const PORT = 3000;

/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(require('./src/routes/tareaRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});
```

## 4to PASO 
Ahora ya estemos la vista index.ejs
controller.js  voy a renderizar => render 
```bash
  const index = (req, res) => {
    res.render("index");
}

module.exports ={
    index,
}
```
### 5to PASO
Creo el index.ejs
cargo una estructura de html5 

```bash
 <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tareas</title>
    <link rel="stylesheet" href="../../public/stylesheet/style.css">
</head>
<body>
    <main>

        <h1> Tarea</h1>
        <h2>Crear Tarea</h2>

  <form action="/" method="post">
    <div>
      <label for="title">Nombre: </label>
      <input type="text" name="title" id="title" />
    </div>
    <button type="submit">Enviar</button>
  </form>

  <h2>Listado de tareas</h2>

  
</main>
   

```
6To PASO CREAR CARPETAS 
crear carpetas Public 
Crear carpeta CSS - stylesheet - crear archivo style.css
```bash
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

body .done {
  text-decoration: line-through;
}

.bx-check {
  color: green;
  cursor: pointer;
}

.bx-trash {
  color: red;
  cursor: pointer;
}

form,
li {
  display: flex;
  column-gap: 0.5em;
}

ul {
  list-style: none;
  padding-left: 0;
}
```

7To PASO Leer el CSS desde public
Actualizo app.js entry point 
```bash
const express = require('express');
const app = express();
const PORT = 3000;

//leer mis archivos estaticos desde public
app.use(express.static('public'));

/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(require('./src/routes/tareaRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});
```

### 8Mo PASO CREAR REPOSITORIO : 
Recuerda crear el archivo .gitignore dentro node_modules 

```bash
git init 
git add .
git commit -m "primer Comitt" 
git brain -M main
git remote add origin https// .... (repositorio remoto que creo)
git push -u origin main

```

### 9vo PASO 
Tenes que tener en cuenta que tenes que particionar nuestro codigo
Vamos a crear en Views una carpeta particials con 2 archivo - footer.ejs y header.ejs  (para el proyecto son 2 headers)
 - Luego voy a retirar la parte de codigo de index.ejs de header y la coloco en header.ejs 
 - Lo mismo realizo con footer, retiro la parte de codigo de footer y lo coloco en footer.ejs 

 #### en index.ejs lo modifico incluyendo ambas partes 
index.ejs  
uso <%- include('url') %>
```bash
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tareas</title>
    <link rel="stylesheet" href="/stylesheet/style.css">
</head>
<body>
   <%- include('partials/header.ejs') %>
    <main>

        <h1> Tarea</h1>
        <h2>Crear Tarea</h2>

  <form action="/" method="post">
    <div>
      <label for="title">Nombre: </label>
      <input type="text" name="title" id="title" />
    </div>
    <button type="submit">Enviar</button>
  </form>

  <h2>Listado de tareas</h2>
  <ul>
    <!-- La tareas que vamos hacer dinamicas -->
    <li> Tarea 1</li>
    <li> Tarea 2 </li>
</ul>
  
</main>
   
<%- include('partials/footer.ejs') %>





    <script src="/javascript/index.js"></script>
</body>
</html>
```


### 10mo PASO Vamos a instalar Layout porque hay varias partes que se van a repetir en nuestro proyecto 

Instalamos EJS Layout
```bash

npm i express-ejs-layouts

```
Tambien lo tengo que agregar Entry point
```bash
VA LUEGO DE EXPRESS
const expressLayouts = require('express-ejs-layouts');


//IMPORTANTE DESDE DE EJS DONDE ESTA MI ESTRUCTURA 
// utilizo layuot 
app.use(expressLayouts);

```


11vo PASO CREAR LAS CARPETA layouts con archivos Layout.ejs 
Antes tengo que avisar en donde va estar 


 ### Actualizo
```bash

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;

//lecttura de archivos esticos de public 
//ideal que este al principio 
app.use(express.static('public'));


/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

//IMPORTANTE DESDE DE EJS DONDE ESTA MI ESTRUCTURA 
// utilizo layuot 
app.use(expressLayouts);
app.set('layout', 'layouts/layout');


//lectura de Ruta de tarea
app.use(require('./src/routes/tareaRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});


```
### Asi me va a quedar el Layout 
importante agregar bien las rutas de include y ademas agregar el body que esta en index.ejs  <%- body %>

```bash
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tareas</title>
    <link rel="stylesheet" href="/stylesheet/style.css">
</head>
<body>
   <%- include('../partials/header.ejs') %>


    <%- body %>
    
      
<%- include('../partials/footer.ejs') %>





<script src="/javascript/index.js"></script>
</body>
</html>

```

### 13 PASO Necesitamos que sean dinamicas la tareas 

Vamos agregar un Array como hacer una simulacion de nuestra base de datos 

En controller.js 

```bash
let tareas = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: false },
  { id: 3, title: "Tarea 3", completed: false },
  { id: 4, title: "Tarea 4", completed: false },
];


const index = (req, res) => {
    res.render("index", {tareas});
}

module.exports ={
    index,
}

```


### Actualizo de body index.ejs 
Voy a ver todas las tareas que tengo en mi array con su titulo 
```bash

    <main>

        <h1> Tarea</h1>
        <h2>Crear Tarea</h2>

  <form action="/" method="post">
    <div>
      <label for="title">Nombre: </label>
      <input type="text" name="title" id="title" />
    </div>
    <button type="submit">Enviar</button>
  </form>

  <h2>Listado de tareas</h2>
  <ul>
    <!-- La tareas que vamos hacer dinamicas -->
    <!-- <li> Tarea 1</li>
    <li> Tarea 2 </li> -->
    <% tareas.forEach(tarea => { %> 
      <li> <%= tarea.title %></li>
      
    <% }) %>
</ul>
  
</main>


```


### 14 PASO Ahora necesitamos enviar una tarea al formulario y que esta poder verla 

Vamos a rutas
```bash
const express = require('express');
const router = express.Router();

const controller = require('../controllers/tareasControllers');

router.get('/', controller.index);
router.post('/', controller.store ); //parte de administracion
router.put('/:id', controller.update); //parte de actualizacion 
router.delete('/:id', controller.destroy); //parte de de eliminar tachar

module.exports = router

```




### Instalamos 
```bash
npm i method-override

```

## actualizamos app.js


```bash
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const fs = require('fs');
const PORT = 3000;

//lecttura de archivos esticos de public 
//ideal que este al principio 
app.use(express.static('public'));


/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

//IMPORTANTE DESDE DE EJS DONDE ESTA MI ESTRUCTURA 
// utilizo layuot 
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//lectura de Ruta de tarea
app.use(require('./src/routes/tareaRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});

```