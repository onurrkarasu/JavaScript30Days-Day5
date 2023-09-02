/*
    ! Accessing array items using index

  * We access each element in an array using their index. An array index starts from 0. 
       ['banana','orange','mango','lemon']
            0       1       2        3
*/
    const fruits=['banana','orange','mango','lemon'];
    let firstFruits=fruits[0]; // we are accessing the first item using its index
    console.log(firstFruits); // banana

    let secondFruits=fruits[1];
    console.log(secondFruits); // orange

    let lastFruits=fruits[3];
    console.log(lastFruits); // lemon

    let lastIndex=fruits.length-1;
    console.log(fruits[lastIndex]); // lemon

const numbers=[0,3.14,9.81,37,98.6,100]; // set of numbers
console.log(numbers.length); // => to know the size of the array, which is 6
console.log(numbers);   // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]);     //  -> 0
console.log(numbers[5]);     //  -> 100

let lastIndex2=numbers.length-1;
console.log(numbers[lastIndex2]);   // -> 100

const webTechs=['HTML','CSS','JS','React','Redux','Redux','Node','MongDB'];
console.log(webTechs);    // all the array items
console.log(webTechs.length); // => to know the size of the array, which is 7
console.log(webTechs[0]); //  -> HTML
console.log(webTechs[6]); //  -> MongoDB

let lastIndex3=webTechs.length-1;
console.log(webTechs[lastIndex3]); //  -> MongoDB


const countries=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
console.log(countries); // -> all countries in array
console.log(countries[0]); // -> Albania
console.log(countries[10]);  // -> Kenya

let lastIndex4=countries.length-1;
console.log(countries[lastIndex4]);  // -> Kenya

const shoppingCart=['milk','mango','tomato','potato','avocado','eggs','sugar'];
console.log(shoppingCart); // -> all shoppingCart in array
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[6]); //  -> sugar

let lastIndex5=shoppingCart.length-1;
console.log(shoppingCart[lastIndex5]); //  -> Sugar