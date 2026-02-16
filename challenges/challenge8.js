// [1] . One Statement In Function
// [2] . Convert To Arrow Function
// [3] . Print The Output [Arguments May Change]

//we want the solution in one line:) we can add pass parameter to fn

// let names = function () {
// Parameter ?
// return " ??? ";
// };
// console. log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


let names1 = function (...paraNames) {
return `String [${paraNames.join("] , [")}] => Done ! `;
};

console. log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !



let names = (...paraNames)  => `String [${paraNames.join("] , [")}] => Done ! `;

console. log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !






// [1] . Replace ??? In Return Statement To Get The Output
// [2] . Create The Same Function With Regular Syntax
// [3] . Use .Array .Inside The Arguments To Get The Output
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => " ??? ";
// console.log(calc(10,"???","???")); // 80



let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + myNumbers[0] + myNumbers[1];
console.log(calc(10, "???", "???")); // 80


