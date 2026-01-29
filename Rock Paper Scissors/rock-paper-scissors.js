 let result="";
        let score=JSON.parse(localStorage.getItem('score'));
        if(score === null){
            score ={
                wins: 0,
                loses: 0,
                ties : 0
            };
        }
        // let computerMove = "";

        function PlayGame(PlayMove){
            let computerMove = PickComputerMove();
            if (PlayMove === "Rock"){
                 if (computerMove === 'Rock'){
                    result = 'Tie';  
                }
                else if (computerMove === 'Paper'){
                    result = 'you lose';
                }
                else if (computerMove === 'Scissors'){
                    result = 'you win';
                }
            }
            else if (PlayMove === "Paper"){
                if (computerMove === 'Rock'){
                    result = 'you win';  
                }
                else if (computerMove === 'Paper'){
                    result = 'Tie';
                }
                else if (computerMove === 'Scissors'){
                    result = 'you lose';
                }    
            }
            else if (PlayMove === "Scissors"){
                if (computerMove === 'Rock'){
                    result = 'you lose';  
                }
                else if (computerMove === 'Paper'){
                    result = 'you win';
                }
                else if (computerMove === 'Scissors'){
                    result = 'Tie';
                }
            }

            if (result === 'you win'){
            score.wins +=1;
            }
            else if (result === 'you lose'){
                score.loses +=1;
            }
            else if(result === 'Tie'){
                score.ties +=1;
            }
            function updateHappened(){
                document.querySelector('.js-result').innerHTML=result;

                // document.querySelector('.js-moves').innerHTML=`You picked ${PlayMove} ..computer picked ${computerMove}`;
                document.querySelector('.js-moves').innerHTML=`You <img src=${PlayMove}-emoji.png class="move-icon"> VS <img src=${computerMove}-emoji.png class="move-icon"> computer`;
            }

            alert(`You picked ${PlayMove} ..computer picked ${computerMove} ..${result} wins: ${score.wins}  loses: ${score.loses} Ties: ${score.ties}`);

            localStorage.setItem('score',JSON.stringify(score));

            updateHappened();
            updateScore();
        }
         function updateScore()
            {
                document.querySelector('.js-score').innerHTML=`wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`;

            }
        function PickComputerMove(){
            let computerMove    ='';

            const randomNumber =Math.random();
            if(randomNumber >=0 && randomNumber < 1/3){
                computerMove='Rock';
            }
            else if(randomNumber >=1/3 && randomNumber <2/3){
                computerMove='Paper';
            }
            else if (randomNumber >=2/3 && randomNumber < 1){
                computerMove='Scissors';
            }
            return computerMove;
        }

        
