//https://www.sitepoint.com/community/t/looping-through-li-elements-in-ul/6049/2

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
  

const ol = document.getElementById("work");
//https://stackoverflow.com/questions/47951287/dynamically-add-li-to-ul-javascript/47951374
for (let i = 0; i < links.length; i++) {
    let label = links[i].label;
    let url = links[i].url;
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', url);
    a.innerHTML = label;
    li.appendChild(a);
    ol.appendChild(li);

}
/*
//const ol = document.getElementById("practice");
let names2 = ["John","Mike","George"]
for (let i = 0; i < names2.length; i++) {
    let name = names2[i];
    let li = document.createElement('li');
    li.innerHTML = name;  
    let a = document.createElement('a');//no
    li.appendChild(a);//no
    a.setAttribute('href', 'name');//no
    document.getElementById('practice').appendChild(li);
}
//*/
