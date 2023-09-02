/*
    ! Adding item to an array using push
    * push : adding item in the end. To add item to the end of an existing array we use the push method.
*/
    const arr=['item1','item2','item3'];
    arr.push('new item');
    console.log(arr); // [ 'item1', 'item2', 'item3', 'new item' ]

    const numbers=[1,2,3,4,5];
    console.log(numbers.push(6));
    console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

    let fruits=['banana','orange','mango','lemon'];
    fruits.push('apple');
    console.log(fruits); // [ 'banana', 'orange', 'mango', 'lemon', 'apple' ]

/*
    ! Add an element from the beginning
    * unshift : Adding array element in the beginning of the array.
*/
    const numbers2=[1,2,3,4,5];
    numbers2.unshift(0); // -> add one item from the beginning 
    console.log(numbers2); // [ 0, 1, 2, 3, 4, 5 ]

