const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers'); // Importamos los helpers
// No hace falta  crearse una variable porque se ejecutan con el hbs

// Heroku nos permite acceso a unas variables de entorno globales
const port = process.env.PORT || 3000;

// Especificamos la carpeta que queremos que sea de dominio público
app.use(express.static(__dirname + '/public'));

// Express HBS engine
// Especificamos los directorios donde vamos a almacenar los parciales
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    // Renderiza el archivo indicado
    response.render('home.hbs', {
        nombre: 'daNIEL hamwI'
    });
});

app.get('/about', (request, response) => {
    // Renderiza el archivo indicado
    response.render('about.hbs', {});
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});