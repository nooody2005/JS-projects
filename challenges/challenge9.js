// let myString = "1,2,3, EE, 1, z,e,r,o,_,W,e,b,_,S,c,h,0,0,1,2, 0, Z";
// let solution = ' ????? ';
// console. log(solution); // Elzero Web School


let myString =  '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,Z';
let solution = myString.split(",").slice(true, -!false).map(element => element.trim()).map(function(element){
    return isNaN(parseInt(element)) ? element=="_"? " ": element.length == 1 ? element : element[0] : "";
});

console. log(solution.join("")); // Elzero Web School

