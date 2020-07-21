var mysql = require('mysql');
const express = require("express");
const app = express();

app.set('view engine', 'ejs');


let resultsQuery;

var connection = mysql.createConnection({
    host: 'northwind.covkl9d7xahn.eu-west-3.rds.amazonaws.com',
    user: 'admin',
    password: 'servilleta',
    database: 'northwind'
});

connection.connect();
/**
 * APARTAT 1 - Canvia la query1
 */
const query1 = "select * from products";

connection.query(query1, function(error, results) {
    if (error) {
        console.log("Error1!: ", err);
        return;
    }
    console.log('The solution for Query1 is: ', results);
    resultsQuery = results;
});

/**
 * APARTAT 2 - Implementa aquí l'endpoint
 */

/**
 * app.listen(3000);
 */