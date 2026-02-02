// Set all Variables
let theInput = document.querySelector('.add-task input');
let theAddButton =document.querySelector('.add-task .plus');
let tasksContainer= document.querySelector('.task-content');
let noTaskMgs= document.querySelector('.no-tasks-message');
let tasksCount =document.querySelector('.tasks-count span');
let tasksCompleted =document.querySelector('.tasks-completed span');


// Focus on Input variables
window.onload= function() {
    theInput.focus();
};

//remoev no tasks message
function deleteNoMsg(){

//     if (theInput.value.trim() === '') {
//     return;
// }

    if(theInput.value === ''){
        console.log('No value');
    }
    else{
        noTaskMgs.remove();
    }
}

//Adding the task
theAddButton.onclick= function(){
    //As soon as adding task the message is deleted
    deleteNoMsg();

    //Create the Main span
    let taskCreated=document.createElement('span');

    //Create the delete Button 
    let deleteCreated =document.createElement('span');

    //Add class to the Main span
    taskCreated.classList.add('task-box');
    
    //Add class to the delete Button
    deleteCreated.classList.add('delete');

    //Append the task in the Main Span (in the task Box) to show it in the screen
    taskCreated.appendChild(document.createTextNode(theInput.value));
    
    //Append the Delete vocab in the button
    deleteCreated.appendChild(document.createTextNode('Delete'));

    //Append Delete Button to its task
    taskCreated.appendChild(deleteCreated);

    //Append taskBox to tasksContainer
    tasksContainer.appendChild(taskCreated);

    //As soon As adding the task the input will be empty
    theInput.value='';
};

document.addEventListener('click',function(e){
    //Delete Task

    if(e.target.className =='delete'){
        e.target.parentElement.remove();
    }

    // if (e.target.classList.contains('delete')) {
    //     e.target.parentElement.remove();
    // }
  
    //make the task finished
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished');
    }

});