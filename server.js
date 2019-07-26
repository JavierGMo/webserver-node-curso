const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));

//HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    //res.send('Hello World');

    //renderizar el archivo *.hbs
    //si se ocupa variables en el html
    //se envia un objeto con el nombre
    //de las variables que estan en el html
    res.render('home', {
        nombre: 'javier'
    });

});


app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});