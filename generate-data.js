let faker = require('faker');
// fake ra ngôn ngữ tiếng việt
faker.locale = 'vi';
// random data
console.log(faker.commerce.department());