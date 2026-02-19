let boxes=document.querySelectorAll('.box');
let result=document.querySelector('.result');


//check if local storage store any colors
if(window.localStorage.getItem('color')){

    //show color that stored in local storage
    result.style.backgroundColor=window.localStorage.getItem('color');

    boxes.forEach(box => {
        box.classList.remove('active');
    });

    //add active class to the current color
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active');

}



boxes.forEach(box => {
    box.addEventListener("click", (item) =>{

        // //remove active class from other elements
        // boxes.forEach(box => {
        //     box.classList.remove('active');
        // });

        //add active class on target
        item.currentTarget.classList.add('active');

        //set local storage
        window.localStorage.setItem("color",item.currentTarget.dataset.color);

        //set the new color in result
        result.style.backgroundColor=`${item.currentTarget.dataset.color}`;
    });
});