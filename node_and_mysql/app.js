'use strict';

let faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'ig_clone',
});

function generateAddress()
{
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

