var mysql = require('mysql');
const express = require("express");
const app = express();

app.set('view engine', 'ejs');


let resultsQuery;

var connection = mysql.createConnection({
    host: 'bifywtpkx5ifl6i8g0dl-mysql.services.clever-cloud.com',
    user: 'u7vgmkxfkeoz13gr',
    password: 'StEwI530Fwhx6ojUhjuU',
    database: 'bifywtpkx5ifl6i8g0dl'
});

connection.connect();
/**
 * APARTAT 1 - Canvia la query1
 */
const query1 = "select * from products WHERE category='Dried Fruit & Nuts' AND minimum_reorder_quantity BETWEEN 1 AND 10";

connection.query(query1, function(error, results) {
    if (error) {
        console.log("Error1!: ", error);
        return;
    }
    console.log('The solution for Query1 is: ', results);
    resultsQuery = results;
});


/**
 * APARTAT 2 - Implementa aquí l'endpoint
 */


app.get('/', (req,res)=>{
    res.render('list-products.ejs', {resultsQuery})
})

app.listen(3000);

