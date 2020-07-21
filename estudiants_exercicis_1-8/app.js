const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/countries';


app.set('view engine', 'ejs');

const errorController = require('./controllers/error');
const countryRoutes = require('./routes/countriesRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(countryRoutes);

app.use(errorController.get404);

mongoose.connect(url, { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log("Error al conectar a la BBDD: ", error);
        return;
    }
    app.listen(3000);
});