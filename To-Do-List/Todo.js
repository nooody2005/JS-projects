const todoList=[
    // {
    //     name:'',
    //     dueDate:'',
    // }
];

function renderTodoList()
{
    let todoListHtml='';

    for(let i=0 ; i<todoList.length ;i++){
        const todo=todoList[i];
        const todoName=todoList[i].name;
        const todoDate=todoList[i].dueDate;

        const html = `
        <div>${todoName}</div>
        <div>${todoDate}</div> 

        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-btn js-delete-todo-button">Delete</button>
        `;

        todoListHtml+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todoListHtml;

    // console.log(document.querySelectorAll('.js-delete-todo-button'));

    document.querySelectorAll('.js-delete-todo button').forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
    
}
function addTodo(){

    const inputElement= document.querySelector('.js-input-name');
    const dateInput=document.querySelector('.js-input-date');

    const name = inputElement.value;
    const dueDate=dateInput.value;

    // todoList.push(name);

    todoList.push({
        name:name,
        dueDate:dueDate
    });

    inputElement.value ='';
    dateInput.value='';

    renderTodoList();
}



