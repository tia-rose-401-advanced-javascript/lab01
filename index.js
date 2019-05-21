'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2
console.log(math.multiply(5,3)); //15
console.log(math.division(2,12)); //6

