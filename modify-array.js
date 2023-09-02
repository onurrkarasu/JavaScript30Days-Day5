/*
    ! Modifying array elements
    * An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
*/
    const numbers=[1,2,3,4,5];
    numbers[0]=10;  // changing 1 at index 0 to 10. 
    numbers[1]=20;  // changing 2 at index 0 to 20.
    console.log(numbers); // [10, 20, 3, 4, 5]

    const countries=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
    countries[0]='Afghanistan'; // replacing albania by afghanistan
    
    let lastIndex=countries.length-1;
    countries[lastIndex]='Korea'; // replacing kenya by korea
    console.log(countries);

    // ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]

    