function saveTodo(todo) {
    const toDoList = getToDoList();

    toDoList.push(todo);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
}
function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem("toDoList", JSON.stringify(updatedTodos));
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
    saveTodo, getTodoList, deleteTodo
}