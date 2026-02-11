//Create the variables
let countSpan=document.querySelector('.count span');
let bulletsContainer=document.querySelector('.bullets .spans')



function getQuestions () {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let questionsObject = JSON.parse(this.responseText);
        //select questions count
        let questionsCount=questionsObject.length;

        //Create Bullets + set questions count
        createBullets(questionsCount);
    }

  };

  myRequest.open("GET", "html_questions.json", true);
  myRequest.send();
}

getQuestions();


function createBullets(num){
    countSpan.innerHTML=num;

    for(let i=0; i<num; i++){
        bullet=document.createElement('span');

        //Check if the first question
        if(i == 0){
            bullet.className="on";
        }

        //Append bulletSpan in its container
        bulletsContainer.appendChild(bullet);
    }


}