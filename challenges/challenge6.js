//Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// document.write('<div>We Have X Admins</div>');

let numOfAdmin;

for (let i=0; i<myAdmins.length;i++){
    if(myAdmins[i] === "Stop"){
        numOfAdmin=i;
        document.write(`<div>We Have ${i} Admins</div>`);
        document.write('<hr>');
        break;
    }
}

// document.write(`<div> we have ${myAdmins.indexOf("Stop")}  admins </div>`);

for (let i=0; i<numOfAdmin;i++){
    document.write(`The Admin for team ${i+1} is ${myAdmins[i]}`);
    document.write(`<h1>Team Members : </h1>`);

     let countOfEmployees=0;
    for(let j=0; j<myEmployees.length;j++){
        if(myAdmins[i].charAt(0) === myEmployees[j].charAt(0)){
            document.write(`<h3> ${++countOfEmployees} - ${myEmployees[j]}</h3>`)
        }
    }
    document.write('<hr>');
}
