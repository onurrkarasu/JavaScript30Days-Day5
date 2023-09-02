/*
    * includes : To check if an item in an array. If it exits it returns the true else it returns false.
*/

const numbers=[1,2,3,4,5];

console.log(numbers.includes(4)); // true
console.log(numbers.includes(2)); // true
console.log(numbers.includes(6)); // false
console.log(numbers.includes(1)); // true

const webTechs=['HTML','CSS','JS','React'];
console.log(webTechs.includes('HTML')); // true
console.log(webTechs.includes('PHP')); // false
console.log(webTechs.includes('React')); // true

