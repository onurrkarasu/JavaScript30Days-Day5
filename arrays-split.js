/*
    ! Creating an array using split

    * As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples
    * below
*/
    let js='JavaScript';
    const charsInJavaScript=js.split('');
    console.log(charsInJavaScript);  // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    let  companiesString='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    const compaines=companiesString.split(',');
    console.log(compaines);// ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

    let txt='I love teaching and empowering people. I teach html,css,js,react,python';
    const words=txt.split(' ');
    console.log(words);
    // the text has special characters think how you can just get only the words
    // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]