//get all variables
let allButtons=document.querySelectorAll(".buttons span");
let theInput=document.getElementById('the-input');
let theResult=document.querySelector(".result span");

function checkInput(){
    theResult.innerHTML= "Input can't be Empty";
}


allButtons.forEach(span => {

    span.addEventListener("click",(e) => {

        if(e.target.classList.contains("check-item")){
            checkItem();
        }

        if(e.target.classList.contains("add-item")){
            addItem();
        }
        if(e.target.classList.contains("delete-item")){
            deleteItem();
        }
        if(e.target.classList.contains("show-item")){
            showItems();
        }

        if(e.target.classList.contains("delete-all")){
            deleteAllItems();
        }
    });
});


function checkItem(){
    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            theResult.innerHTML=`Found Local Storage Item called <span>${theInput.value}</span>`
        }
         else{
            theResult.innerHTML=`Not Found Local Storage Item with name <span>${theInput.value}</span>`
        }
    }
    else{
        checkInput();
    }
   
}
function addItem(){
    if(theInput.value !== ''){
        localStorage.setItem(theInput.value,"key")
        theResult.innerHTML=`your item <span>${theInput.value}</span> added`;
        theInput.value='';
    }
    else{
        checkInput();
    }
}
function deleteItem(){
    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value);
            theResult.innerHTML=`your Item <span>${theInput.value}</span> deleted`;
            theInput.value='';
        }
        else{
            theResult.innerHTML=`Not Found Local Storage Item with name <span>${theInput.value}</span> to delete`;
        }
    }
    else{
        checkInput();
    }
}

function showItems(){
    theResult.innerHTML='';

   let itemsCount=localStorage.length;

   if(itemsCount == 0){
    theResult.innerHTML='No items to show';
   }

   for (let i=0; i<itemsCount ;i++){
        let item=localStorage.key(i);
        theResult.innerHTML+=`<span class="items">${item}</span>`;
   }
}

function deleteAllItems(){
    if(localStorage.length === 0){
        theResult.innerHTML = 'No items to delete';
        return;
    }

    localStorage.clear(); 
    theResult.innerHTML = 'All items deleted';
}


// function deleteAllItems(){
//     if(localStorage.length === 0){
//         theResult.innerHTML = 'No items to delete';
//         return;
//     }

//     for(let i = localStorage.length - 1; i >= 0; i--){
//         let key = localStorage.key(i);
//         localStorage.removeItem(key);
//     }

//     theResult.innerHTML = 'All items deleted';
// }

