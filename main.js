//https://www.sitepoint.com/community/t/looping-through-li-elements-in-ul/6049/2

/*
var infos = ['try1', 'try2']
var ol = document.getElementsByTagName("ol");
for (var i = 0; i< infos.length; i++){
    let info = infos[i];
    const newLi= document.createElement("li");
    newLi.appendChild(document.createTextNode(info);
    ol.appendChild(newLi);
}
//var items = ul.getElementsByTagName("li");
////for (var i = 0; i <items.length; i++){
//}


*/
const links = [
    {
      label: "Week1 work & notes",
      url: "W1/index.html"
    },
    {
        label:"Week2 work & notes",
        url: "W2/index.html"
    
    }
  ]
  /*
    //create li, add <a> with label and url from links, add new li into ol from above
    
const li = document.querySelector('li');

// create the <a>
a.href='#html';
a.innerText = li.innerText;

// empty <li> and replace its content by <a>
li.innerHTML = '';
li.appendChild(a);
    
    //document.querySelector('a').setAttribute('href', '#HTML');
    //const newLiA = <a links[URL]>[label]</a>
    //
    //const currentLi = document.getElementById("work");
    document.getElementById("work").appendChild(newLi);

}
}
//https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
  }
*/
const names = ['John', 'Jane'];
const ol = document.getElementById("practice");
//https://stackoverflow.com/questions/47951287/dynamically-add-li-to-ul-javascript/47951374
for (let i = 0; i < links.length; i++) {
    let label = links[i].label;
    //let href = links[i].url;//not working
    let li = document.createElement('li');

    let a = document.createElement('a');
    a.setAttribute('href', label);//not working
    li.appendChild(a);//not working
    li.appendChild(document.createTextNode(label));
    ol.appendChild(li);

}
let names2 = ["John","Mike","George"]
for (let i = 0; i < names2.length; i++) {
    let name = names2[i];
    let li = document.createElement('li');
    li.innerHTML = name;  
    document.getElementById('practice').appendChild(li);
}
//*/
