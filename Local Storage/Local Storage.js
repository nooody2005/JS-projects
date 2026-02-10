//get all variables
let allButtons=document.querySelectorAll(".buttons span");
let theInput=document.getElementById('the-input');
let theResult=document.querySelector(".result");

function checkInput(){
    theResult.innerHTML= "Input can't be Empty :)";
}


allButtons.forEach(span => {

    span.addEventListener("click",(e) => {

        if(e.target.classList.contains("check-item")){
            if(theInput.value !== ''){
                checkItem();
            }
        }

        if(e.target.classList.contains("add-item")){
            if(theInput.value !== ''){
                addItem();
            }
        }
        if(e.target.classList.contains("show-item")){
            if(theInput.value !== ''){
                showItems();
            }
        }
        if(e.target.classList.contains("delete-item")){
            if(theInput.value !== ''){
                deleteItem();
            }
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