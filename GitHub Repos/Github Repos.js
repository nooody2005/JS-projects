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
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((response) => response.json())

        // then((response) => {
        //     return response.json();
        // })

        .then((repositries) => {

            showData.innerHTML=''; //empty the container

            //loop on repositries
            repositries.forEach(repo => {
                 
            //create the main Div
            let mainDiv=document.createElement('div');

            //create repo name
            let repoName =document.createTextNode(repo.name);

            //append repos name in the main div
            mainDiv.appendChild(repoName);

            //Create stars element
            let stars=document.createElement('span');

            //create the stars count
            let starsText=document.createTextNode(` Strars ${repo.stargazers_count}`);

            //append star count to stars span
            stars.appendChild(starsText);

            stars.className='stars';

            //Append stars to main div
            mainDiv.appendChild(stars);

            //create the Url
            let theUrl=document.createElement('a');

            //Create the URL text
            let theUrlText=document.createTextNode("Visit");

            //append the url text in the main div 
            theUrl.appendChild(theUrlText);

            //make the url
            theUrl.href=`https://github.com/nooody2005/${repo.name}`;

            //Add class on Main Div
            mainDiv.className='repo-box';

            //Set Attribut Blank --> opened in new page
            theUrl.setAttribute('target','_blank');

            //Append the url to main div
            mainDiv.appendChild(theUrl);

            //Append the main div to container
            showData.appendChild(mainDiv);
        });
                
    });
}
           
}