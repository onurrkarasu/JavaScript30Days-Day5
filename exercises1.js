/*
     !  Exercise Level 1

*/

const countries=['Albania','Bolivia','Canada','Denmark','Ethiopia', 'Finland','Germany','Hungary','Ireland','Japan','Kenya'];
const webTechs=['html','css','js','react','redux','node','mongoDB'];

/*
    TODO 1: Declare an empty array;
*/
 let arr=[];

/*
    TODO 2 : Declare an array with more than 5 number of elements
*/
let arr2=[1,2,3,4,5,6,7];

/*
    TODO 3 : Find the length of your array
*/
console.log(arr2.length);

/*
    TODO 4 : Get the first item, the middle item and the last item of the array
*/
console.log(arr2[0]);
console.log(arr2[3]);
let lastIndex=arr2.length-1;
console.log(arr2[lastIndex]);

/*
    TODO 5 : Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
    TODO : The array size should be greater than 5
*/
const mixedDataTypes=['onur',25,true,{skils:'html',countries:'turjey'},{values:[1,2,3,4,5]}];
console.log(mixedDataTypes.length);

/*
    TODO 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/
let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

/*
    TODO 7: Print the array using console.log()
*/
    console.log(itCompanies);

/*
    TODO 8: Print the number of companies in the array
*/
    console.log(itCompanies.length);

/*
    TODO 9 : Print the first company, middle and last company
*/
    console.log(itCompanies[0]);
    console.log(itCompanies[3]);
    let lastIndex2=itCompanies.length-1;
    console.log(itCompanies[lastIndex2]);

/* 
    TODO 10 : Print out each company
*/
    console.log(itCompanies);

/*
    TODO 11: Change each company name to uppercase one by one and print them out
*/
    for(let i=0;i<=lastIndex2;i++){
        console.log(itCompanies[i].toUpperCase());
    }

/*
    TODO 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
*/
    let compaines=itCompanies.toString();
    console.log(compaines,'are big IT compaines');

/*
    TODO 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
*/
   
    let index=itCompanies.indexOf('IBM');
    if(index===-1){
        console.log('This fruits does not exist in the array');
    }else{
        console.log('This fruits does  exist in the array');
    }

/*
    TODO 14: Filter out companies which have more than one 'o' without the filter method
*/

    console.log("----------------")
    let duzelt=itCompanies.filter(function(value){
        return value=>'0'; 
    });
    console.log(duzelt);
    console.log("----------------")

/*
    TODO 15 :Sort the array using sort() method
*/
    console.log(itCompanies.sort());


/*
    TODO 16: Reverse the array using reverse() method
*/
    console.log(itCompanies.reverse());

/*
    TODO 17: Slice out the first 3 companies from the array
*/
    console.log(itCompanies.slice(1,4));

/*
    TODO 18 : Slice out the last 3 companies from the array
*/
    console.log(itCompanies.slice(4,8));


/*
    TODO 19 : Slice out the middle IT company or companies from the array
*/
    console.log(itCompanies.splice(4,1));
    console.log(itCompanies);

/*
    TODO 20 : Remove the first IT company from the array
*/
    console.log(itCompanies);
    console.log(itCompanies.shift());
    console.log(itCompanies);
/*
    TODO 21 : Remove the middle IT company or companies from the array
*/
console.log("----------------")
console.log(itCompanies.slice(2,7));
console.log("----------------")

/*
    TODO 22 : Remove the last IT company from the array
*/
    console.log(itCompanies.pop());
    console.log(itCompanies);
/*
    TODO 23: Remove all IT companies
*/
    console.log("----------------");
    console.log(itCompanies.slice(7));

