//challenge 
// let a = "Elzero Web School";

// - Include This Methods In Your Solution [slice, charAt]
// console.log(); // Zero

// 8 H
// console. log(); // HHHHHHHH

// -Return Array
// console.log(); // [Elzero]

//-Use Only "substr" Method + Template Literals In Your Solution
// console.log(); // Elzero School

// Solution Must Be Dynamic And String May Change
// console. log(); // eLZERO WEB SCH001

//==========================================================================================
//========================================================================================== 
// the solution

let a ="Elzero Web School";

console.log(a.slice(2,6).charAt(0).toUpperCase() + a.slice(3,6));

console.log(a.charAt(8).repeat(8));

console.log(a.split(" ", 1));                            //equal to ---> console.log(a.split(" ").slice(0,1)); 

console.log(`${a.substr(0,6)}${a.substr(-6)}`);

console.log(a.charAt(0).toLowerCase() + a.slice(1, -2).toUpperCase() + "001" );

