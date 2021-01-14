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
const wonderWoman = document.querySelector('ul#roster li:last-child');
wonderWoman.parentNode;
wonderWoman.nextSibling;
wonderWoman.previousSibling;





