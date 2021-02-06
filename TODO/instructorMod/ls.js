function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
}
function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem("toDoList", JSON.stringify(updatedTodos));
}

function toggleCompleted(id) {
    const toDoList = getTodoList();
    console.log(id);
    const togList = toDoList.map(todo => {
        if(todo.id == id) {
            
            console.log("inside toggleCompleted " + todo.content);
            
            
            }

    } );return togList;

    
  
}

function getTodoList() {
    const toDoListString = localStorage.getItem("toDoList");
    let todoList = [];
    if (toDoListString) {
        todoList=JSON.parse(toDoListString);
        
    }
    return todoList;
}
export default {
    saveTodo, getTodoList, deleteTodo, toggleCompleted
}