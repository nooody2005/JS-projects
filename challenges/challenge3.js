// let st = "Elzero Web School";

// if (" ???? " === "34") {
// console. log("Good");
// }

// W-Poition-May Change
// if (" ???? " === "w") {
// console.log("Good");
// }

// if (" ???? " !== "string") {
// console.log("Good");
// }

// if (" ???? " === "number") {
// console.log("Good");
// }

// if (" ???? " === "ElzeroElzero") {
// console.log("Good"); 
// }


//===========================================================
//===========================================================
// the solution
 
let st = "Elzero Web School";

if (st.length *2 === "34") {
console. log("Good");
}

// W-Poition-May Change
if (st.charAt(7).toLowerCase() === "w") {
console.log("Good");
}

if (typeof Number(st) !== "string") {
console.log("Good");
}

if (typeof Number(st).toString() === "number") {
console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
console.log("Good"); 
}
