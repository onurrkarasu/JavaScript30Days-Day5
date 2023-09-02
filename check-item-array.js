/*
    ! Check an element if it exist in an array.
    * Check items in a list
*/
    // let us check if banana exist in the array

    const fruits=['banana','orange','mango','lemon'];
    let index=fruits.indexOf('banana');
    console.log(index); // -> 0

    if(index=== -1 ){
        console.log('This fruits does not exist in the array');
    }else{
        console.log('This fruits does exist in the array ');
    }
    // This fruits does exist in the array 

    // we can use also ternary here
    index === -1 ? console.log('This fruits does not exist in the array') : console.log('This fruits does exist in the array');
    // This fruits does exist in the array


    // let us check if an avocado exist in the array
    let indexOfAvocado=fruits.indexOf('avocado');
    console.log(indexOfAvocado); // ->  -1

    if(indexOfAvocado===-1){
        console.log('This fruits does not exist in the array');
    }else{
        console.log('This fruits does exist in the array');
    }
    // This fruits does not exist in the array