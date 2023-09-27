const lodash = require('lodash')
const { addition, multiplication } = require('./math.js')

const numbers = [2, 2, 5]
console.log(addition(3, 5));
console.log(multiplication(3, 5));

console.log(lodash.sum(numbers));
console.log(lodash.mean(numbers));
console.log(lodash.reduce(numbers, (acc, number) => acc * number, 1));