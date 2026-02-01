// Get Slider Items | Array.from[ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number of Slides 
var slidesCount=sliderImages.length;

//set current slide
var currentSlide=1;

//Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

//previous and Next
var nextButton =document.getElementById('next');
var prevButton= document.getElementById('prev');

//Handle Click on previous and Next Buttons
nextButton.onclick= nextSLide;
prevButton.onclick= prevSlide;

//Create The main UL Element 
var paginationElement= document.createElement('ul');

//set ID on Created UL Element 
paginationElement.setAttribute('id','pagination-ul');

//Create List Items Based on Slides Count 
for(var i=1; i<=slidesCount; i++){
    
    //Create the Li
    var paginationItem= document.createElement('li');

    //Set Custom Attribute
    paginationItem.setAttribute('data-index',i);

    //set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Items in the Main UL List
    paginationElement.appendChild(paginationItem);
}

//Add the Created UL Element to the page
document.getElementById('indicators').appendChild(paginationElement);

//Get The New Created UL
// var paginationCreatedUl=document.getElementById('pagination-ul');

// Get Pagination Items | Array.from[ES6 Feature]
 var paginatoinBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

 //Loop Through All Bullets Items
for (let i=0; i<paginatoinBullets.length; i++){
    paginatoinBullets[i].onclick = function(){
        currentSlide = i + 1;
        theChecker();
    }
}

// for (var i=0; i<paginatoinBullets.length; i++){
//     paginatoinBullets[i].onclick= function() {
//         currentSlide=parseInt(this.getAttribute('data-index'));
//          theChecker();
//     }
// }


 // Trigger The Checker function
 theChecker();

//Next Slide funciton
function nextSLide(){
    if(nextButton.classList.contains('disabled'))
    {
        // do nothing
        return false;
    }
    else{
        currentSlide++;
        theChecker();
    }
    // if(currentSlide == slidesCount){
    //     //do nothing
    //     return false;
    // }
}

//previous Slide function
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        // do nothing
        return false;
    }
    else{
        currentSlide--;
        theChecker();
    }
}

// Create THe Checker Function
function theChecker(){

    //Set the Slide Number
    slideNumberElement.textContent='Slide # ' +(currentSlide) + ' of ' + (slidesCount);
    
    removeAllActive();
    //set Active Class on Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    //set Active Class on Current Pagination Item 
    paginationElement.children[currentSlide - 1].classList.add('active');
    // paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    //check if we on the first slide 
    if(currentSlide == 1){
        //first slide --->make previous button disabled
        prevButton.classList.add('disabled');
    }
    else{ 
        prevButton.classList.remove('disabled');
    }

    //check if we on the Last slide 
    if(currentSlide == slidesCount){
        //Last slide --->make Next button disabled
        nextButton.classList.add('disabled');
    }
    else{
        nextButton.classList.remove('disabled');
    }

}

// Remove All Active Classes from Slides Images and Pagination Bullets
function removeAllActive(){
    //Loop through Images
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    //Loop through Pagination Items 
    paginatoinBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}








