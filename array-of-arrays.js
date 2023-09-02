/*
    ! Array of arrays
    * Array can store different data types including an array itself. let us create an array of arrays.
*/
    const firstNum=[1,2,3];
    const secondNum=[1,4,9];
    
    const arrayOfArray=[[1,2,3],[1,4,9]];
    console.log(arrayOfArray[0]); // 1,2,3

    const frontEnd=['html','css','js','react','redux'];
    const backEnd=['node','php','python','mongdb'];
    const fullStack=[frontEnd,backEnd];
    console.log(fullStack); //   [ 'html', 'css', 'js', 'react', 'redux' ],[ 'node', 'php', 'python', 'mongdb' ]
    console.log(fullStack.length); // 2 
    console.log(fullStack[0]); // [ 'html', 'css', 'js', 'react', 'redux' ]
    console.log(fullStack[1]); // [ 'node', 'php', 'python', 'mongdb' ]

