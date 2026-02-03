/*
To improve the prject 
[1] use Sweet Alert if the input Is empty
[2] check if task is exist
[3] create delete all tasks Button 
[4] create finish all tasks Button
[5] add tasks to the local storage
*/ 

// Set all Variables
let theInput = document.querySelector('.add-task input');
let theAddButton =document.querySelector('.add-task .plus');
let tasksContainer= document.querySelector('.task-content');
let tasksCount =document.querySelector('.tasks-count span');
let tasksCompleted =document.querySelector('.tasks-completed span');


// Focus on Input variables
window.onload= function() {
    theInput.focus();
};

//remoev no tasks message
// function deleteNoMsg(){

// //     if (theInput.value.trim() === '') {
// //     return;
// // }

//     if(theInput.value === ''){
//         console.log('No value');
//     }
//     else{
//         noTaskMgs.remove();
//     }
// }

//Adding the task
theAddButton.onclick= function(){
    //As soon as adding task the message is deleted
     if(theInput.value === ''){
        console.log('No value');
    }
    else{
        let noTaskMgs= document.querySelector('.no-tasks-message');

        //check if span with no message is exist
        if(document.body.contains(document.querySelector('.no-tasks-message'))){
            //Remove No tasks message
            noTaskMgs.remove();
        }

        // deleteNoMsg();

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

        calculateTasks();
    }
};

document.addEventListener('click',function(e){
    //Delete Task

    if(e.target.className =='delete'){
        // e.target.parentElement.remove();
        e.target.parentNode.remove();

        //Check Number of Tasks in the container
        if(tasksContainer.childElementCount == 0){
            addNoTasksMsg();
        }

    }

    // if (e.target.classList.contains('delete')) {
    //     e.target.parentElement.remove();
    // }
  
    //make the task finished
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished');
    }

    calculateTasks();

});

//Funuction to Create No Tasks Message
function addNoTasksMsg(){

    //Create Meassage span Element
    let taskMsg= document.createElement('span');

    //Add The Class To the Span Message
    taskMsg.classList.add('no-tasks-message');

    //Append the meassage in the span
    taskMsg.appendChild(document.createTextNode('No Tasks To Show'));

    //Add message span in the right place (Tasks Content)
    tasksContainer.appendChild(taskMsg);

}

//function to calcuate tasks 
function calculateTasks(){

    //calculate all Tasks
    tasksCount.innerHTML =document.querySelectorAll('.task-content .task-box').length;

    //clculate the completed tasks
    tasksCompleted.innerHTML=document.querySelectorAll('.task-content .finished').length;
}