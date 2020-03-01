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

// let data = [];

// for (let i = 0; i < 500; i++) {
//     data.push([
//         faker.internet.email(),
//         faker.date.past(),
//     ]);
// }

// connection.query("INSERT INTO users(email, created_at) VALUES ?", [data], function(error, results) {
//     console.log(error);
//     console.log(results);
// });

// connection.end();

let query = "SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date FROM users";
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
query = "SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users)"
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
query = "SELECT * FROM users ORDER BY created_at LIMIT 1";
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
query = "SELECT MONTHNAME(created_at) AS month, COUNT(*) AS total FROM users GROUP BY month ORDER BY total DESC";
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }
    for (let i = 0; i < results.length; i++) {
        console.log(results[i].month + " => " + results[i].total);
    }
});
query = "SELECT count(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo%'";
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
});
query = "SELECT " + 
            "CASE " + 
                "WHEN email LIKE '%gmail%' THEN 'gmail' " +
                "WHEN email LIKE '%yahoo%' THEN 'yahoo' " +
                "WHEN email LIKE '%hotmail%' THEN 'hotmail' " +
                "ELSE 'other' " +
            "END AS provider, " +
        "COUNT(*) AS total_users " +
        "FROM users " +
        "GROUP BY provider " +
        "ORDER BY total_users DESC";
connection.query(query, function(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
});

connection.end();
