/*
    TODO 2 : First remove all the punctuations and change the string to array and count the number of words in the array
*/
    let text=
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';
    
    let textArr=text.split(' ');
    console.log(textArr);
    console.log(textArr.length);

/*
    TODO 3 : In the following shopping cart add, remove, edit items
*/
    const shoppingCart=['Milk', 'Coffee', 'Tea', 'Honey'];
    shoppingCart.unshift('meat');
    shoppingCart.push('sugar');
    shoppingCart.pop('Honey');
    console.log(shoppingCart.splice(4,1));
    console.log(shoppingCart);

    shoppingCart[2]='Green Tea';
    console.log(shoppingCart);

/*
    TODO 4 : In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

    tamamlanmadi.

    import 'countries.js';
    let index=countries.indexOf('Ethiopia');
    if(index===-1){
        console.log('If it does not exist add to the countries list');
    }else{
        console.log('if it does exist countries list');
    }
    */
/*
    TODO 5: In the webTechs array check if Sass exists in the array and if it exists print
    TODO:  'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    import 'web_techs.js';
    let index2=web_techs.index('Sass');
    if(index2===-1){
        console.log('Sass is a CSS preprocess');
    }else{
        console.log(' If it does not exist');
    }
    web_techs.push('Sass');         */

/*
    TODO 6: Concatenate the following two variables and store it in a fullStack variable.
*/
    const frontEnd=['html','css','js','react','redux'];
    const backEnd=['node','express','mongdb'];
    const fullStack=frontEnd.concat(backEnd);
    console.log(fullStack);

    