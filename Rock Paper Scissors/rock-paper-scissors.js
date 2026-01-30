let result = "";
      let ComputerMove = "";

        let score = JSON.parse(localStorage.getItem('score')) || 
        {
            wins : 0 ,
            loses: 0 ,
            ties : 0 ,
        };


        function updateScore()
        {
            document.querySelector('.js-score').innerHTML =`wins : ${score.wins}   loses : ${score.loses}  Ties : ${score.ties}`;
        }

       updateScore();

        /*if ( score === NULL )
        {
            score =
            {
                wins : 0 ,
                loses: 0 ,
                ties : 0 ,

            };
        }*/
            

            document.body.addEventListener('keydown',(event)=>
          {
            if (event.key === 'r')
              PlayGame('Rock')
            else if (event.key === 'p')
              PlayGame('Paper')
            else if (event.key === 's')
              PlayGame('Scissors')

          });

      function PlayGame(PlayMove) {
        ComputerMove = PickComputerMove(); 

        if (PlayMove === "Rock") {
          if (ComputerMove === "Rock") {
            result = "Tie";
          } else if (ComputerMove === "Paper") {
            result = "You lose";
          } else if (ComputerMove === "Scissors") {
            result = "You win";
          }
        } else if (PlayMove === "Paper") {
          if (ComputerMove === "Rock") {
            result = "You win";
          } else if (ComputerMove === "Paper") {
            result = "Tie";
          } else if (ComputerMove === "Scissors") {
            result = "You lose";
          }
        } else if (PlayMove === "Scissors") {
          if (ComputerMove === "Rock") {
            result = "You lose";
          } else if (ComputerMove === "Paper") {
            result = "You win";
          } else if (ComputerMove === "Scissors") {
            result = "Tie";
          }
        }

       

        //document.querySelector('.js-happened').innerHTML=`${result}`;

        if (result === 'You win' ){
            score.wins +=1;
        }
        else if (result === 'You lose' ){
            score.loses +=1;
        }
        else if (result === 'Tie' ){
            score.ties +=1;
        }

            localStorage.setItem('score',JSON.stringify(score));

            updateScore();

            function updateHappened()
            {
                document.querySelector('.js-result').innerHTML=result;
                // document.querySelector('.js-moves').innerHTML=`You:${PlayMove}  &  Computer:${ComputerMove}`;
                document.querySelector('.js-moves').innerHTML=`You <img src="images/${PlayMove}-emoji.png" class="move-icon">  &  <img src="images/${ComputerMove}-emoji.png" class="move-icon"> Computer`;
            }

        
        // alert(
        //   `You picked ${PlayMove} ..Computer Picked ${ComputerMove} ..${result}  
        //   wins : ${score.wins}   loses : ${score.loses}  Ties : ${score.ties} `
        // );

        updateHappened();

      }

      function PickComputerMove() {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          ComputerMove = "Rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          ComputerMove = "Paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          ComputerMove = "Scissors";
        }

        

        return ComputerMove;
      }

      let isAutoplaying =false;
      let intervalId;
      
      function autoPlay()
      {
        const automatic =document.querySelector('.jv-auto-play-button');

        // if (automatic.innerHTML === 'Auto Play')
        // {
        //     automatic.innerHTML = 'Auto play Mode on :)'
        //     automatic.classList.add('is-automatic')
        // }
        // else
        // {
        //   automatic.innerHTML = 'Auto Play'
        //   automatic.classList.remove('is-automatic')
        // }

        if (!isAutoplaying){
          intervalId =setInterval(function(){
            const playerMove= PickComputerMove();
            PlayGame(playerMove);
          },1000);
          isAutoplaying =true;

            automatic.innerHTML = 'Auto play Mode on :)'
            automatic.classList.add('is-automatic')
        }
        else 
        {
            clearInterval(intervalId);
            isAutoplaying =false;

            automatic.innerHTML = 'Auto Play'
          automatic.classList.remove('is-automatic')
        }
      }

        
