//maybe?

function getComplete() {
    const list = getList();
    let allDone = list.filter(todo => todo.complete == true);
    return allDone;
}
function getActive() {
    const list = getList();
    let notDone = list.filter(todo => todo.complete == false);
    return notDone;
}
function getTasksCount() {
    let count=0;
    const list = getList();
    list.forEach(todo => {
        if (!todo.completed){
            count++;
        }
    });return count;
    //let notDone = list.filter(todo => !todo.complete );
    
}
function getAll() {
    const list = getList();
    return list;
}

function getList() {
    const toDoListString = localStorage.getItem("toDoList");
    let todoList = [];
    if (toDoListString) {
        todoList=JSON.parse(toDoListString);  
    }
    return todoList;
}
function activeFilter(todos){
    return todos.filter(todo => {
        return !todo.completed;
    })
}
function completeFilter(todos) {
    return todos.filter(todo => {
        return todo.completed;
    })
}

export default{
    getComplete, getActive, getAll, 
    getTasksCount, 
    activeFilter, completeFilter

}