/*
    ! Sorting elements in array
    * sort : arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in
    * the coming sections
*/
    const webTechs=['HTML','CSS','JavaScript','PHP','React','Node'];

    webTechs.sort();
    console.log(webTechs); // [ 'CSS', 'HTML', 'JavaScript', 'Node', 'PHP', 'React' ]

    webTechs.reverse();
    console.log(webTechs); //  [ 'React', 'PHP', 'Node', 'JavaScript', 'HTML', 'CSS' ]