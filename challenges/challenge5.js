//Arrays Challenges
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//Write Code Here  
//solve without using numbers in slice 
// console. log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]
// console.log(my.slice(" ???? ")); //["Elham", "Mazero"]
// console. log(); // "Elzero"
// console.log(); //"rO"

//====================================================================================================
//====================================================================================================
//the solution


//Arrays Challenges
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let q1=my.slice(zero,counter+1).reverse();
console.log(q1); // ["Osama", "Elham", "Mazero", "Ahmed"]

q2=q1.slice(zero+1,counter);
console.log(q2); //["Elham", "Mazero"]


let q3 = q2[0].slice(zero,counter-1).concat(q2[1].slice(counter-1)); // Elzero
console.log(q3);   // "Elzero"

console.log(q3.charAt(q3.length-2).concat(q3.charAt(q3.length-1).toUpperCase())); //"rO"
