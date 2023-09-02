/*
    ! Joining array elements
    * join : it is used to join the elements of the array, the argument we passed in the join method will be joined in the array and returns as a string.
    * By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
*/

const numbers=[1,2,3,4,5];
console.log(numbers.join()); // 1,2,3,4,5

const names=['okan','dogan','abbas','onur'];
console.log(names.join()); // okan,dogan,abbas,onur
console.log(names.join('')); // okandoganabbasonur
console.log(names.join(' ')); // okan dogan abbas onur
console.log(names.join(', ')); // okan, dogan, abbas, onur
console.log(names.join(' # ')); // okan # dogan # abbas # onur

const webTechs=['html','css','js','php','react','redux','node','mongdb'];
console.log(webTechs.join()); // html,css,js,php,react,redux,node,mongdb
console.log(webTechs.join(' # ')); // html # css # js # php # react # redux # node # mongdb