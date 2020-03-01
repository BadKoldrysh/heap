'use strict';

let faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ig_clone',
});

let q = "SELECT 1 + 5 AS answer";

connection.query(q, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].answer);
});

connection.end();

function generateAddress()
{
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

