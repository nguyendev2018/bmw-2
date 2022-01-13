const faker = require("faker");
// fake ra ngôn ngữ tiếng việt
faker.locale = "vi";
// random data
console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.commerce.productDescription());