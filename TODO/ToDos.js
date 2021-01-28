const addNew =document.forms["addEntry"];
addNew.addEventListener("submit",makeEvent, false );

function makeEvent(event)
{  event.preventDefault(); 
    const e = {};
    e.name = addNew.name.value;

    const list= document.getElementById("box");
    const newItem =document.createElement("div");
    newItem.className = "items";
    newItem.innerText = e.name;
    list.append(newItem);


}
