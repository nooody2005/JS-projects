//get the variables
let theInput= document.querySelector('.get-repos input');
let getButton= document.querySelector('.get-button');
let showData= document.querySelector('.show-data');

getButton.onclick = function(){
    getRepos();
}

function getRepos(){
    if (theInput.value == ''){          //if value is empty
        showData.innerHTML= "<span>PLease Write Github Username.</span>"
    }
    else{
        fetch('https://api.github.com/users/nooody2005/repos').then((response) => {
            return response.json();
        })

        .then((repos) => {
            console.log(repos);
        });
    }
}