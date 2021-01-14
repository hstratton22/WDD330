const body = document.body;
console.log(typeof body);
console.log(body.nodeType);
const h1 = document.getElementById('title');
//list of all items with tag
const listItems = document.getElementsByTagName('li');
console.log(listItems[0]);
listItems[1];
listItems[2];
//return collection of elements
const heroes = document.getElementsByClassName('hero');
console.log(heroes.length);
console.log(document.getElementsByClassName('villain').length);
//first element 
//document.querySelector()
//node list of all
//document.querySelectorAll()
console.log(document.querySelector('#bats'));
console.log(document.querySelectorAll('.hero'));
//last item in list
const wonderWoman = document.querySelector('li:last-child');

//can be called on any element
const ul = document.querySelector('ul#roster');
const batman = ul.querySelector('li#bats')
const heroesLi = document.getElementById('roster');
console.log(heroesLi.childNodes);//will include empty text nodes for white space
console.log(heroesLi.children);//returns elements and ignores text
heroes.firstChild;//wil return empty text space
heroes.lastChild;//will return empty text spaces
//const wonderWoman = document.querySelector('ul#roster li:last-child');
console.log(wonderWoman.parentNode);
wonderWoman.nextSibling;
wonderWoman.previousSibling;
//get returns value of attribute
console.log(wonderWoman.getAttribute('class'));
//set attribute
wonderWoman.setAttribute('id','amazon');
console.log(wonderWoman.getAttribute('id'));
console.log(wonderWoman.id);
console.log(wonderWoman);
console.log(wonderWoman.className);//set directly classname= 'female'; will overwrite any existing classes
//classList will add class
wonderWoman.classList.add('warrior');
console.log(wonderWoman.className);
//toggle
//wonderWoman.classList.toggle('hero'); 
wonderWoman.classList.contains('hero');
//for older browsers
function addClass(element,newClass){
    if (element.className) {
        element.className = element.className + ' ' + newClass;
    } else {
        element.className = newClass;
    }
    return element.className;
}
addClass(wonderWoman,'warrior');
//creating elements
//const flash = document.createElement('li');
//const flashText = document.createTextNode('Flash');
//flash.appendChild(flashText);
//OR
const flash = document.createElement('li');
flash.textContent = 'Flash';
function createElement (tag,text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}

const aquaman = createElement('li','Aquaman');
heroesLi.appendChild(flash);//not working
heroesLi.insertBefore(aquaman,wonderWoman);
heroesLi.removeChild(aquaman);
heroesLi.appendChild(aquaman);
//replacing
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);
//innerHTML
console.log(heroesLi.innerHTML);
//h1.innerHTML = 'Suicide Squad';
//heroesLi.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>'
const superman = heroesLi.children[0];
superman.style.border = "red 2px solid";
superman.style.backgroundColor = 'blue';
//OR superman.style['background color'] = 'blue';
superman.style.display = 'none';
superman.style.display = 'block';//reappear
//console.log(getComputedStyle(superman));//readonly
console.log(getComputedStyle(superman).getPropertyValue('color'));
//https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle





