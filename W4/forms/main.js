//const form = document.forms[0];
//same as const form = document.getElementsByTagname('form')[0];
//or use name const form = document.forms.search;
//or const form = document.forms['search'];
//const [input,button] = form.elements;

//or const input = form.searchInput
//or const input = form['searchInput']

//submit options 
//form.submit()
//<button type='submit'>Submit</button>
//<input type='submit' value='Submit'>
//<input type='image' src='button.png'></input>

//form.reset() method will reset all the form controls back to their initial values specified in the HTML.
//or <button type='reset'>Reset</button>

//form.action = '/an/other.url'

const form = document.forms['search'];

const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);


form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
/*function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}*/
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
input.value = 'Search Here';//adds placeholder
//can add to html <input type='text' name='search-box' placeholder='Search Here'>

//removes placeholder when user clicks on input box
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
//autofocus same as document.forms.hero.heroName.focus();
//maxlength limits number of characters allowed in a space
