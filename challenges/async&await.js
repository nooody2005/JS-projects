// const myPromise=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm the good promise");
//     },3000);
// });

// async function readData() {
//     console.log("Before Promise");
//     try{
//         console.log(await myPromise);
//     }catch(reason){
//         console.log(`Reason: ${reason}`);
//     }finally{
//         console.log("After Promise");
//     }
// }
// readData();

//=============================================================================

// let username="nooody2005";

// async function fetchData() {
//     console.log("Before Promise");
//     try{
//         let myData = await fetch(`https://api.github.com/users/${username}/repos`);
//         console.log(await myData.json());
//     }catch(reason){
//         console.log(`Reason: ${reason}`);
//     }finally{
//         console.log("After Promise");
//     }
// }
// fetchData();

//=============================================================================

// const getData= (apiLink) =>{
//     return new Promise((resolve , reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function (){
//             if(this.readyState === 4 && this.status === 200){
//                 resolve(JSON.parse(this.responseText));
//             }
//             else{
//                 reject(Error("No Data Found"));
//             }
//         }

//         myRequest.open("GET" ,apiLink);
//         myRequest.send();
//     });
// }

// let username="nooody2005";
// getData(`https://api.github.com/users/${username}/repos`).then((result) => {
// result.length = 10;
// return result;
// }).then((result) => console.log(result[0].name)).catch((rej) => console.log(rej))

//=============================================================================

let username= "nooody2005";
fetch(`https://api.github.com/users/${username}/repos`).then((ressult) => {
    console.log(ressult);
    let myData =ressult.json();
    console.log(myData);
    return myData;
}).then((full) => {
    full.length=10;
    return full
}).then((result) => console.log(result[0].name));

//=============================================================================