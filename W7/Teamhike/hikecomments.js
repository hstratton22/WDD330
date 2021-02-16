const commentList = [
    {}
]

export default class hikeComments {
    constructor(elementId){
        this.parentElement = document.getElementById(elementId);
    }
    addNewComment(){
        const input = document.querySelector("#commentInput");
        const newComment = {
            //name: hikeName,
            date: new Date(),
            content: input.value
          };
          input.value = "";
          console.log(newComment);
          commentList.append(newComment);
        }
    getAllComments(){
        return commentList;



    }
    renderCommentList(){
        const li=document.createElement("li");
        li.className.add("indComment");
        //li.innerText=;
    

    }
    /*function createComment() {
    const input = document.querySelector("#hikeComments");
    const newComment = {
        name: hikeName,
        date: new Date(),
        content: comment
      };
      input.value = "";
    console.log(newComment);
    return newComment;
}*/
    

    
}
/*
document.querySelector("#addBtn").onclick = addNewComment;
function displayComment(){
    const ul=document.getElementById("hikeComments");
    const li=document.createElement("li");
    li.innerText="This is a hike";
    ul.appendChild(li); 

}
function displayCommentList(){
    const ul=document.getElementById("hikeComments");
    const li=document.createElement("li");
    li.innerText="This is a hike";
    ul.appendChild(li); 

}


function addNewComment(){
    const input = document.querySelector("#commentInput");
    const newComment = {
        //name: hikeName,
        date: new Date(),
        content: input.value
      };
      input.value = "";
      console.log(newComment);
      //hikeComments.commentList.append(newComment);//can't access
      //return newComment;
}
*/

/*
function createComment(){
    const newComment = {
        name: hikeName,
        date: new Date(),
        content: comment
      };

}
*/
/*
function getTodoList() {
    const toDoListString = localStorage.getItem("toDoList");
    let todoList = [];
    if (toDoListString) {
        todoList = JSON.parse(toDoListString);

    }
    return todoList;
}*/