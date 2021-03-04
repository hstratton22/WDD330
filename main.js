//https://www.sitepoint.com/community/t/looping-through-li-elements-in-ul/6049/2

const links = [
    {
      label: "Week1 work & notes",
      url: "W1/index.html"
    },
    {
        label:"Week2 work & notes",
        url: "W2/index.html"
    
    },
    {
      label: "Week3 work & notes",
      url: "W3/index.html"
    },
    {
      label: "Week4 work & notes",
    url: "W4/index.html"    },
    {
      label:"Week5 work & notes",
      url: "W5/index.html"
    },
    {
      label:"Week6 Todo",
      url: "TODO/instructorMod/index.html"
    }, 
    {
      label:"Week7 work & notes",
      url:"W7/index.html"
    },
    {
      label:"Week8 work & notes",
      url:"W8/index.html"
    },
    {
      label:"Week9 work & notes",
      url: "W9/index.html"
    }, {
      label:"Week10 work & notes",
      url: "W10/index.html"
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
