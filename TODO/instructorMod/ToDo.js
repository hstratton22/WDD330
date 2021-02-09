import utils from "./utils.js";
import ls from "./ls.js";

document.querySelector("#addBtn").onclick = newTodo;
document.addEventListener("DOMContentLoaded", loadTodos);
document.addEventListener("DOMContentLoaded", loadFilters);
document.addEventListener("DOMContentLoaded", utils.getTasksCount);

function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    });
    createFilters();
}

function loadFilters() {
    createFilters();

}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);

}
function createTodo() {
    const input = document.querySelector("#todoInput");
    const newTodo = { id: Date.now(), content: input.value, completed: false };
    input.value = "";
    console.log(newTodo);
    return newTodo;
}
function createTodoElement(todo) {
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //complete btn
    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("data-id", todo.id);
    completeBtn.classList.add("complete-btn");


    completeBtn.onclick = toggleCompleted;

    //todo content
    const todoContent = document.createElement("div");
    todoContent.innerText = todo.content;
    todoContent.classList.add("todo-content");
    if (todo.completed) {
        todoContent.classList.add("completed");
        completeBtn.innerText = "✓";
    };


    //delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-id", todo.id);
    deleteBtn.classList.add("todo-delete-btn");
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}
function addToList(todoDiv) {
    //add to the document
    document.querySelector("#todos").appendChild(todoDiv);
}
//event handler
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute("data-id"));
    document.querySelector("#todos").innerHTML = "";
    loadTodos();
}
//
function toggleCompleted(e) {
    const btn = e.currentTarget;
    ls.toggleCompleted(btn.getAttribute("data-id"));
    document.querySelector("#todos").innerHTML = "";
    loadTodos();
    
}

function createFilters() {
    const filters = document.querySelector(".todo-filters");
    filters.innerHTML="";
    const tasksLeft = document.createElement("p");
    //tasksLeft.classList.add("todo-filters-item");
    
    const tasksSpan = document.createElement("span");
    tasksLeft.innerHTML="tasks left: ";
    tasksSpan.innerText=utils.getTasksCount();
    tasksLeft.appendChild(tasksSpan);
    
    

    const selectAll = document.createElement("button");
    selectAll.classList.add("filter-button");
    selectAll.innerText="All";
    selectAll.id="filterAll";
    //selectAll.onclick = ls.getTodoList;//or utils.getAll
    selectAll.onclick = applyFilter;

    const selectActive = document.createElement("button");
    selectActive.classList.add("filter-button");
    selectActive.innerText="Active"
    selectActive.id="filterActive";
    //selectActive.onclick = utils.getActive;
    selectActive.onclick = applyFilter;

    const selectComplete = document.createElement("button");
    selectComplete.classList.add("filter-button");
    selectComplete.innerText=("Completed");
    selectComplete.id="filterComplete";
    selectComplete.onclick=utils.getComplete;
    selectComplete.onclick=applyFilter;


    filters.appendChild(tasksLeft);
    filters.appendChild(selectAll);
    filters.appendChild(selectActive);
    filters.appendChild(selectComplete);



}
function applyFilter(e) {
    //clear list
    document.querySelector("#todos").innerHTML = "";
    
    //show border
    const btn = e.currentTarget;
    /*if (btn.classList.contains("activated-button")){
        btn.classList.remove("activated-button")
    }else {
        btn.classList.add("activated-button");
    }*/
    btn.classList.add("activated-button");
    
    //declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();
    
    //check which filter to apply
    if (e.currentTarget.id == "filterActive"){
        filteredTodos = utils.activeFilter(allTodos);
    }else if (e.currentTarget.id == "filterAll"){
        filteredTodos= allTodos;
    }
    else if(e.currentTarget.id == "filterComplete"){
        filteredTodos = utils.completeFilter(allTodos);
    }
    //draw list
    filteredTodos.forEach(todo => {
        const el= createTodoElement(todo);
        addToList(el);
    })
    
    
}
