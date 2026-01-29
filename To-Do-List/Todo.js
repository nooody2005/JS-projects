const todoList=[];


for(let i=0 ; i<todoList.length ;i++){
    const inputElement= document.querySelector('.js-input-name');
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value ='';
}

function renderTodoList()
{
    let todoListHtml='';

    for(let i=0 ; i<todoList.length ;i++){
    const todo=todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHtml+=html;
}
    
}

