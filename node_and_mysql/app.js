'use strict';

// for (let i = 0; i < 500; i++) {
//     console.log(i+1 + ") HELLO, MR NODE! I LIKE PHP)))");
// }

let faker = require('faker');

console.log(faker.internet.email());
console.log(faker.date.past());

generateAddress();

function generateAddress()
{
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

// for (let i = 0; i < 25; i++) {
//     console.log(faker.internet.email());
// }
