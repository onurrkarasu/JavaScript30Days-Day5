/*
   !  Arrays : 
   In constrast to variables, an array can store multiple variables. Each value in an array has an index, and each index has a reference in a memory
   address.Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less 
   by one from the length of the array.

   An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and 
   different data types. An array can be empty, or it may have different data type values.
*/
/*
    ! How to create an empty array
    In JavaScript, we can create an array different ways. Let us see different ways to create an array. It is very common to use const instead
    of let to declare an array variable. If you are using const it means you do not use that variable name again.
*/
    // * Using Array constructor
    const arr=Array();
    let arr1=new Array();
    console.log(arr);

    // * Using square brackets ([])
    const arr2=[];
    