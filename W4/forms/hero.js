const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

const label = form.querySelector('label');
const error = document.createElement('div');

error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}


function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.city = form.city.value;
    hero.age = form.age.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}


hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
//same as hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

/*value field
<label for='donation-amount'>Enter amount to donate: 
    <input type='text' id ='donation-amount' name='donationAmount' value='10'>
</label>
*/
//document.forms.hero.powers[0].checked = true;//first box appears checked
//same in html <input type='checkbox' value='Flight' name='powers' checked>

//hero.category = form.category.value;
//hidden input //type='hidden'
// upload file //type='file'
//hero.age = form.age.value;

//name attribute used for select element js acces
//form.city;

//form.city.options[form.city.selectedIndex].text//access input text
//form.city.options[0].text
//returns << "Choose a City"

//change form directly 
form.origin.value = 'Born as Kal-El on the planet Krypton...';

//ensure all fields are filled
<button type='submit' id='submit' disabled>Submit</button>
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
form.heroName.addEventListener('keyup',disableSubmit,false);




