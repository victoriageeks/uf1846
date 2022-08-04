const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = async (req, res) => {
    const {name,population,flagURL}=req.body;
    const fakeData = {
        countryname: name,
        population: population,
        urlFlag: flagURL    
    }

    const countryex = new Country({
        name,
        flagURL,
        population
    })

    await countryex.save();
    
    res.send("Dades rebudes:" + JSON.stringify(fakeData));
}