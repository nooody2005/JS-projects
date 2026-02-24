
let chosen=2;

let myFriends=[
    {title: "Nada", age:20, available: true, skills:["HTML", "CSS"]},
    {title: "Salma", age:16, available: false, skills:["PHP", "CSS"]},
    {title: "Mohamed", age:15, available: true, skills:["HTML", "laravel"]},
]

let [
    {title:t1, age: a1, available: av1, skills:[,two1]},
    {title:t2, age: a2, available: av2, skills:[,two2]},
    {title:t3, age: a3, available: av3, skills:[,two3]}
] =myFriends;

let t, a, two, av;

if(chosen-1 === 0){
    t = t1; a = a1; two = two1; av = av1;
} else if(chosen-1 === 1){
    t = t2; a = a2; two = two2; av = av2;
} else if(chosen-1 === 2){
    t = t3; a = a3; two = two3; av = av3;
}

let status = av ? "available" : "not available";

document.write(`
name: ${t} <br>
age: ${a} <br>
skills: ${two} <br>
status: ${status}
`);