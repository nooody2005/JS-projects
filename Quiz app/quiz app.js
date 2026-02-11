//Create the variables
let countSpan=document.querySelector('.count span');
let bulletsContainer=document.querySelector('.bullets .spans');
let question=document.querySelector('.question');
let answers=document.querySelector('.answers');
let submitButton=document.querySelector('.submit-button');
let resultMsg=document.querySelector('.result');


let currentQuestion=0;
let correctAnswers =0;

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


        submitButton.onclick = function (e) {
            checkAnswer(questionsObject[currentQuestion].right_answer, questionsCount);
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

function checkAnswer(rightAnswer,count){

    let answers =document.getElementsByName("choice");
    let theChoosenAnswer;

    for(let i=0; i<answers.length; i++){

        if(answers[i].checked){

            theChoosenAnswer=answers[i].dataset.answer;
        }
    }
    if(theChoosenAnswer == rightAnswer){
        correctAnswers++;
         resultMsg.innerHTML='<span class="perfect">perfect </span> you are good';
    }


}