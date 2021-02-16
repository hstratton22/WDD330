import hikeComments from "./hikecomments.js";
import Hikes from "./hikes.js";
//import hikeComments from ".hikecomments.js";
//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");
//const myComments = new hikeComments("hikeComments")
window.addEventListener("load", () => {
  myHikes.showHikeList();
  //myComments();
  //displayComment();
  showCommentsList();
  
});
myHikes.hikeList;


document.querySelector("#addBtn").onclick = addNewComment;
function displayComment(){
    const ul=document.getElementById("hikeComments");
    const li=document.createElement("li");
    li.innerText="This is a hike";
    ul.appendChild(li); 

}
function showCommentsList(){
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