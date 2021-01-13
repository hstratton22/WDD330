//object literal
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
const spiderman = {};
// or
//const spiderman = new Object();
const name = 'Iron Man';
const realName = 'Tony Stark';
// OR long way
//const ironMan = { name: name, realName: realName };
// OR short ES6 way
//const ironMan = { name, realName };
//access  OR superman['name']
superman.name
superman["real" + " " + "name"] // the property is built using string concatenation
const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
console.log(hulk);
const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };
console.log(captainBritain);
const nameS = Symbol('name');
const supergirl = { [nameS]: 'Supergirl' };
console.log(supergirl[nameS])
const realNameS = Symbol('real name');
supergirl[realNameS] = 'Kara Danvers';
const daredevil = { [nameS]: 'Daredevil', [realNameS]: 'Matt Murdoch' };
superman.fly()
//OR superman['fly']()
'city' in superman;//true
// OR
superman.city !== undefined;//false

//hasOwnProperty() not inherited
superman.hasOwnProperty('city');//<< false
superman.hasOwnProperty('name');//true
//This method willonlyreturn any properties that belong to that particular object, 
//whereas using in or !== undefined will return true , even if the property has been inherited from another object
//loop through all properties and methods
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
//check if properties are objects own
for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}
//returns array of same values
for(const value of Object.values(superman)) {
    console.log(value);
}
//returns array of key value pairs
for(const [key,value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}
//adding properties
superman.city = 'Metropolis';
//changing properties
superman['real name'] = 'Kal-El';
console.log(superman);
//removing properties
delete superman.fly
//nested objects
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}
console.log(jla.wonderWoman.realName);
console.log(jla['flash']['realName']);
console.log(jla.aquaman['realName']);
const thor = { name: 'Thor' 
// more properties here
};
const cloneThor = thor;
cloneThor.name = 'Clor';
console.log(thor.name);
thor.name = 'Thor';
console.log(thor.name);
function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
greet({ greeting: `What's up dude`, age: 10, name: `Bart` });
function greet({greeting='Hello',name,age=18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
greet({ name: 'Lisa', age: 8 });
//this
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
dice.roll();
dice.sides = 20;
dice.roll();
//namespacing
const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};
console.log(myMaths.square(3));
console.log(myMaths.mean([1,2,3]));
//JSON of batman
const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'
//parse()
console.log(JSON.parse(batman));
//stringify()
const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
}
console.log(JSON.stringify(wonderWoman));
//add space
console.log(JSON.stringify(wonderWoman, null, " "));
//Math
Math.PI; 
Math.SQRT2; 
Math.SQRT1_2 // The reciprocal of the square root of 2
Math.abs(-4.6);
Math.ceil(4.2);
Math.floor(4.2);
Math.round(4.5);//to nearest integer
console.log(Math.trunc(4.9));//returns int part of number
Math.pow(3, 2); // 3 squared
Math.sqrt(121);//only positive or NaN
Math.cbrt(8);
Math.hypot(3,4); // returns the square root of 3 squared + 4 squared
Math.log2(8); // 8 is 2 to the power of 3
console.log(Math.max(1,2,3));
Math.sin(Math.PI/6); // this calculation contains rounding errors, it should be 0.5
Math.cos(Math.PI/6);
Math.tan(Math.PI/4); // another rounding error, this should be 1
Math.tan(Math.PI/2); // this should be NaN or Infinity
Math.acos(0.5);//returns the arccosine of a number. The result is an angle
Math.atan(Math.sqrt(3)); // Same as Math.PI/3
//To generate a random number between 0 and another number, we can multiply the value 
//by that number. The following code generates a random number between 0 and 6:
console.log(6 * Math.random());
//random integer
Math.floor(6 * Math.random());//alwaays rounds down
//date
const today = new Date();
console.log(today.toString());
const christmas = new Date('2017 12 25');
console.log(christmas.toString());
//new Date(year,month,day,hour,minutes,seconds,milliseconds);
const solstice = new Date(2017, 5, 21);
// Summer Solstice
console.log(solstice.toString());
const diwali = new Date(1508367600000);
diwali.toString();
//getTime() , getTimezoneOffset() and getYear() 
//getDay() and getUTCDay()//0 for Sunday, up to 6 for Saturday
console.log(diwali.getDay());
console.log(diwali.getDate());
console.log(diwali.getMonth());
 
//getYear()broken for after 2000, don't use!
//getFullYear() and getUTCFullYear()  instead
//getHours() , getUTCHours() , getMinutes() , getUTCMinutes() , 
//getSeconds() , getUTCSeconds , getMilliseconds() , and getUTCMilliseconds()
//since midnight
// day represented by 1000 * 60 * 60 * 24 milliseconds
const christmasEve = new Date(christmas.getTime() - 1000 * 60 * 60 * 24) // one day before Christmas
console.log(christmasEve.toString());
//returns the difference, in minutes, between the local time on the computer and UTC
console.log(new Date().getTimezoneOffset());//>>300
//setters
diwali.setDate(7);
diwali.setMonth(10);
diwali.setFullYear(2018);
console.log(diwali.toString());
//setHours() , setUTCHours() , setMinutes() , setUTCMinutes() , 
//setSeconds() , setUTCSeconds , setMilliseconds() and setUTCMilliseconds()
//if you know the date as a timestamp, you can use the setTime()

//regExp
const pattern = /[a-zA-Z]+ing$/;
//OR const pattern = new RegExp('[a-zA-Z]+ing');
const language = 'JavaScript';
const pattern2 = new RegExp(language);
console.log(pattern2);
//.test()
console.log(pattern.test('joke'));
console.log(pattern.test('joking'));
//exec() same as test() but returns array with first match found or null
console.log(pattern.exec('joking'));
const pat = /JavaScript/;
console.log(pat);
const vowels = /[aeiou]/
//sequence includes -
// /[0-9]/
// /[^A-Z]/ not capital letter ^means not
pat2 = /[Jj][aeiou]v[aeiou]/;
console.log(pat2.test('JavaScript'));
console.log(pat2.test('jive'));
p = /java/i
console.log(p.test("JavaScript"));
//The only way to change the ignoreCase 
//property to false is to redefine the regular expression:
//p = /java/
//Any special characters or modifiers can be escaped using a backslash.
//so if you wanted to match a question mark, ? , you would need to use 
//the regular expression /\?/

//starts with J followed by one or more vowels, then any letters or numbers ending in ing :



patJ =/^J[aeiou]+\w+ing$/
console.log(patJ.test('Joling'));
console.log(patJ.test('Jeering'));
//greedy and lazy modifiers
const word = 'abracadabra';
const greedyPattern = /a.+a/;
console.log(greedyPattern.exec(word));
const lazyPattern = /a.+?a/;
console.log(lazyPattern.exec(word));
//This looks for zero or more occurrences of any character, 
//followed by an escaped period, followed by the letters " pdf "
//that must come at the end of the string
const pdf = /.*\.pdf$/;
console.log(pdf.test('chapter5.pdf'));
//string methods
console.log('Hello World!'.split(/\s+/));
console.log('JavaScript'.match(/[aeiou]/));

console.log('JavaScript'.match(/[aeiou]/g));//return array of all vowels.
//search ()returns position of first match or -1 if none
console.log("I'm learning JavaScript".search(/java/i));
//replace
console.log('JavaScript'.replace(/[aeiou]/ig,'*'));
//capturing groups
//searches a string and replaces any HTML anchor tags with Markdownnotation
const link = "<a href='https://www.sitepoint.com' title='Oh Yeah!'>Awesome Web Resources</a>"
const mdLink = link.replace(/<a href='(.*?)'.*?>(.*?)<\/a>/g, "[$2]($1)");
console.log(mdLink);




