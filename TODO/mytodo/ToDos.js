const addNew =document.forms["addEntry"];
addNew.addEventListener("submit", makeEvent);
let tasks= document.getElementById("tasksLeft");
let tasksTotal =0;
tasks.innerHTML= tasksTotal;

function makeEvent(event) {
 event.preventDefault(); 
    const e = addNew.newEntry.value;
    console.log(e);

    const list= document.querySelector("ul");
    const newItem =document.createElement("li");
    const checkBox=document.createElement("div");
    newItem.classList.add("items");
    console.log(newItem);
    newItem.innerHTML = e;
    console.log(newItem);
    checkBox.classList.add("checkBox");
    checkBox.innerHTML = " X ";
    newItem.appendChild(checkBox);
    list.appendChild(newItem);
    console.log(list);
    tasksTotal +=1;
    console.log(tasksTotal);
    
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



