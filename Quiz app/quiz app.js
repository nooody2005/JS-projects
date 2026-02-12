//Create the variables
let countSpan=document.querySelector('.count span');
let bulletsContainer=document.querySelector('.bullets .spans');
let question=document.querySelector('.question');
let answers=document.querySelector('.answers');
let submitButton=document.querySelector('.submit-button');
let resultMsg=document.querySelector('.result');
let countDown=document.querySelector('.count-down');


let currentQuestion=0;
let correctAnswers =0;
let countDownInterval;
let duration =3;

function getQuestions () {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let questionsObject = JSON.parse(this.responseText);
        //select questions count
        let questionsCount=questionsObject.length;

        //Create Bullets + set questions count
        createBullets(questionsCount);

        //get the quiz from json to show it on webPage
        createQuesions(questionsObject[currentQuestion],questionsCount);

        //for the first question
        countdown(duration,questionsCount);


        submitButton.onclick = function (e) {

            //get the right answer
            let theRightAnswer=questionsObject[currentQuestion].right_answer;

            //increase current index to move in the next question
            currentQuestion++;

            checkAnswer(theRightAnswer, questionsCount);

            //remove previous question 
            question.innerHTML='';
            answers.innerHTML ='';


            //get the next question
            createQuesions(questionsObject[currentQuestion],questionsCount);

            //handle Bullets class
            hadleBullets();

            //afetr reaching to the last question
            showResults(questionsCount);

            countdown(duration,questionsCount);
           
        };

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

function createQuesions(obj,count){

    if(currentQuestion < count){

        //create the question place
        let questionTitle=document.createElement('h2');

        //get the question title from json
        let questionText=document.createTextNode(obj.title);

        //append question text in question div
        questionTitle.appendChild(questionText);

        //append question in the main container
        question.appendChild(questionTitle);

        for (let i=1; i<=4; i++){

            //create choice div
            let choice=document.createElement('div');
            //add class 
            choice.classList.add('choice');
            //create radio
            let radio=document.createElement('input');
            //select radio type + id + name + text(dataset)
            radio.type='radio';
            radio.id=`answer_${i}`;
            radio.name='choice';
            radio.dataset.answer=obj[`answer_${i}`];
            // radio.dataset.answer=obj.answer_${i};

            //make the first choice selected
            if(i === 1){
                radio.checked=true;
            }

            //make label for radio input
            let label=document.createElement('label');
            label.htmlFor=`answer_${i}`;

            //create text for label
            let labelText=document.createTextNode(obj[`answer_${i}`]);
            label.appendChild(labelText);


            //append radio in the choice div
            choice.appendChild(radio);
            choice.appendChild(label);

            //append choice in answers div
            answers.appendChild(choice);
        }
    }
}

function checkAnswer(rightAnswer,count){

    let answers =document.getElementsByName("choice");
    let theChoosenAnswer;

    for(let i=0; i<answers.length; i++){

        if(answers[i].checked){

            theChoosenAnswer=answers[i].dataset.answer;
        }
    }
    if(theChoosenAnswer === rightAnswer){
        correctAnswers++;
    }

}
function hadleBullets(){
    let bulletSpan=document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans=Array.from(bulletSpan);

    arrayOfSpans.forEach((span,index) => {

        if(currentQuestion === index){
            span.className='on';
        }
    });
    
}

function showResults(count){

    let theResults;

    if(currentQuestion === count){
        question.remove();
        answers.remove();
        submitButton.remove();
        bulletsContainer.remove();
   

        if(correctAnswers === count){
            theResults=`<span class="perfect">Perfect</span>, ${correctAnswers} from ${count}`;
        }

        if(correctAnswers >= count/2 && correctAnswers <count){
            theResults=`<span class="good">Good</span>, ${correctAnswers} from ${count}`;
        }

        if(correctAnswers < count/2){
            theResults=`<span class="bad">Bad</span>, ${correctAnswers} from ${count}`;
        }

        resultMsg.innerHTML=theResults;
        // resultMsg.style.padding="10px";
        resultMsg.style.backgroundColor="white";
        // resultMsg.style.marginTop="10px";
    }
} 

function countdown(duration,count){

    clearInterval(countDownInterval);
    if(currentQuestion < count){
        let minutes, seconds;
        countDownInterval= setInterval(function(){
            minutes =parseInt(duration / 60);
            seconds =parseInt(duration % 60);

            minutes =minutes <10 ? `0${minutes}` : minutes;
            seconds =seconds <10 ? `0${seconds}` : seconds;

            countDown.innerHTML=`${minutes}:${seconds}`;

            if(--duration < 0){
                clearInterval(countDownInterval);
                submitButton.click();
            }
        },1000);
    }
}