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
        <p>
            ${todoName}  ${todoDate}
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
        </p>
        `;

        todoListHtml+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todoListHtml;
    
}
function addTodo(){

    const inputElement= document.querySelector('.js-input-name');
    const dateInput=document.querySelector('.js-date');

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



