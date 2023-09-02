/*
    ! Splice method array
    * splice: It takes three parameters. Starting position, number of times to be removed and number of items to be addedd.
*/
    const numbers=[1,2,3,4,5];
    console.log(numbers.splice()); // -> remove all items 

    console.log(numbers.splice(0,1)); // -> remove first items
    console.log(numbers);

    const numbers2=[1, 2, 3, 4, 5, 6];
    numbers2.splice(3,3,7,8,9);
    console.log(numbers2.splice(3,3,7,8,9));  // [ 7, 8, 9 ]

    // -> it removes three items and replace three items 
    