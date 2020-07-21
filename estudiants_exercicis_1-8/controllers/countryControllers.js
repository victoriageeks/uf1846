const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = (req, res) => {
    const fakeData = {
        conuntryName: "spain",
        population: 46438420,
        urlFlag: "https://restcountries.eu/data/esp.svg"
    }

    res.send("Dades rebudes:" + JSON.stringify(fakeData));
}