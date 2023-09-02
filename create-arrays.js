/*
    ! How to create an array with values : 
    Array with initial values. We use length property to find the length of an array.
*/
    const numbers=[0,3.14,9.81,37,98.6,100]; // array of numbers
    const fruits=['banana','orange','mango','lemon']; // array of strings
    const vegetables=['tomato','potato','cabbage','onion','carrot']; // array of strings
    const animalProducts=['milk','meats','butter','yoghurt']; // array of strings
    const webTechs=['HTML','CSS','JS','React','Redux','Node','MongDB']; // array of web technologies
    const countries=['Finland','Turkey','Denmark','Sweden','Norway','Iceland']; // array of strings

    // print the array and its length

    console.log('Numbers : ',numbers);
    console.log('Numbers of Numbers',numbers.length);
    
    console.log("----------------------------------------------");

    console.log('Fruits  :',fruits);
    console.log('Number of fruits :',fruits.length);

    console.log("----------------------------------------------");

    console.log('Vegetables  : ',vegetables);
    console.log('Number of vegetables : ',vegetables.length);

    console.log("----------------------------------------------");

    console.log('Animal Products : ',animalProducts);
    console.log('Number of animal products ', animalProducts.length);

    console.log("----------------------------------------------");

    console.log('Web technologies  : ',webTechs);
    console.log('Number of web tech :  ',webTechs.length);

    console.log("----------------------------------------------");

    console.log('Countries  :',countries);
    console.log('Number of countries  :',countries.length);


    console.log("----------------------------------------------");
    
// * Array can have items of different data types 
    const arr=[
        'Asabeneh',
        250,
        true,
        {country:'Finland',city:'Helsinki'},
        {skills:['HTML','CSS','JS','Python','PHP','React']}
    ];  // arr containing different data types
    console.log(arr);