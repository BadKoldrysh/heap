'use strict';

let faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'join_us',
});

// SELECTING

// let q = "SELECT COUNT(*) AS total FROM users";

// connection.query(q, function(error, results, fields) {
//     if (error) throw error;
//     console.log(results[0].total);
// });

// connection.end();

// INSERTING

// let q = "INSERT INTO users(email) VALUES ('tommy.lee@mail.com')";

// connection.query(q, function(error, results, fields) {
    //     if (error) throw error;
    //     console.log(results);
    // });
//
// connection.end();

// INSERTING DYNAMIC DATA
// let person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past(),
// };

// connection.query("INSERT INTO users SET ?", person, function(error, results) {
//     if (error) throw error;
//     console.log(results);
// });

// connection.end();

let data = [];

for (let i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past(),
    ]);
}

connection.query("INSERT INTO users(email, created_at) VALUES ?", [data], function(error, results) {
    console.log(error);
    console.log(results);
});

connection.end();



function generateAddress()
{
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

