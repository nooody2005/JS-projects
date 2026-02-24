// class user{
//     //private property
//     #s;
//     constructor(id,name,salary){
//         this.i=id;
//         this.n=name;
//         this.#s=salary;
//     }
//     getSalery(){
//         return parseInt(this.#s);
//     }
// }

// class childUser extends user{
//     constructor(id,name,salary,school){
//         super(id,name,salary);
//         this.sc=school;
//     }
// }

// let firstUser=new user(123,"Nada","100Egy");
// let child= new childUser(222,"childName",500,"Engineering");

// console.log(firstUser.i);
// console.log(firstUser.n);
// console.log(firstUser.getSalery());


// console.log(child.i);
// console.log(child.sc);
// console.log(child.getSalery());


let currenrDate =new Date();
let birthDate = new Date("August 18,2009");
let ageInMs=currenrDate-birthDate;
console.log(ageInMs/1000);
let ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;

console.log(Math.floor(ageInYears));