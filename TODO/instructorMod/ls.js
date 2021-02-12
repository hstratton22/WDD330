function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
function deleteTodo(id) {
    const toDoList = getTodoList();


    const updatedTodos = toDoList.filter(todo => todo.id != id)
    localStorage.setItem("toDoList", JSON.stringify(updatedTodos));
}

function toggleCompleted(id) {
    const toDoList = getTodoList();
    console.log(id);
    toDoList.forEach(todo => {

        if (todo.id == id) {

            if (todo.completed) {
                todo.completed = false;

            }
            else {
                todo.completed = true;
            }
            console.log(todo.completed);
        }
    });
    localStorage.setItem("toDoList", JSON.stringify(toDoList));



}

function getTodoList() {
    const toDoListString = localStorage.getItem("toDoList");
    let todoList = [];
    if (toDoListString) {
        todoList = JSON.parse(toDoListString);

    }
    return todoList;
}
export default {
    saveTodo, getTodoList, deleteTodo, toggleCompleted
}