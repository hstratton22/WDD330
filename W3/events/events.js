//document.body.addEventListener("click", doSomething);
/*function doSomething() {
    alert('You Clicked!');
    }
    addEventListener('click',doSomething);*/
    //parentheses are not placed after the function when it's used as 
    //the argument to an event listener; otherwise, the function will 
    //actually be called when the event listener is set, instead of when the event happens
    /*function doSomething(event){
         console.log('Something Happened!');
         console.log(event.type);
        console.log(event.target);
     } */
     /*
     addEventListener('click', doSomething);
     
    function doSomething(event){
        console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
    }
*/
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );
addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });
addEventListener('click', (event) => {
        if (event.shiftKey) {
            console.log('A Shifty Click!');
        }
    });
//addEventListener('touchend', () => console.log('Touch stopped');//error with code
//remove only allows for click to occur once
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}
//stop default behavior of moving to link and print to console instead
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});
//bubbling
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
/*
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );
*/
//capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
//if want both must do this
/*
// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );
*/
//The bubble phase can be stopped from occurring by 
//adding the event.stopPropagation() but be wary to not cancel other event listeners
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);
//Now clicking on the first <li> element will only log one message, since the click event will not propagate to the <ul> element.

//attach the event listener to the parent <ul> element, 
//then use the target property to identify the element that was clicked on.
ulElement.addEventListener('click',highlight);