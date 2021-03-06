import utils from "./utils.js";
import ls from "./ls.js";

document.querySelector("#addBtn").onclick = newTodo;

function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    })
}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo;

}
function createTodo() {
    const input = document.querySelector("#todoInput");
    const newTodo = {id: Date.now(), content: input.value, completed:false};
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
    completeBtn.classList.add("complete-btn");

    //todo content
    const todoContent = document.createElement("div");
    todoContent.innerText=todo.content;
    todoContent.classList.add("todo-content");

    //delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-d", todo.id);
    deleteBtn.classList.add("todo-delete-btn");
    deleteBtn.innerText = "X";
    deleteBtn.onclick=deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}
function addToList (todoDiv) {
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