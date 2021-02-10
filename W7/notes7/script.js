function square(x) {
    return x*x;
}
console.log(square.length);//1  because receives one parameter

function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
console.log(sayHello.call(clark));

function sayHello2(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}
console.log(sayHello2.call(clark, 'How do you do'));
console.log(sayHello2.call(bruce));

//If a function doesn’t refer to an object as this in its body, 
//it can still be called using the call() method, but you need 
//provide null as its first argument.
console.log(square.call(null, 4));
//apply()
//arguments of the function are provided as an array, even if there is only one argument
console.log(square.apply(null, [4]));

//custom properties
square.description = 'Squares a number that is provided as an argument'

function squareCache(x){
    squareCache.cache = squareCache.cache || {};
    if (!squareCache.cache[x]) {
        squareCache.cache[x] = x*x;
    }
    return squareCache.cache[x]
}
console.log(squareCache(3));
squareCache(-11);
console.log(squareCache.cache);

//iffe
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
//temp
let a = 1;
let b = 2;
(()=>{
    const temp = a;
    a = b;
    b = temp;
})();
console.log(a);
console.log(b);
//destructuring
let [c,d] = [1,2];
[c,d] = [d,c];
console.log(c);
console.log(d);
//initialization code
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();
//or
/*
{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}*/
//use strict safely
(function() {
    'use strict';
// All your code would go inside this function
})();
//self-contained code blocks
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());
    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());
//functions that define and rewrite themselves
//Every time the function is called after the first time, 
//it will log the message 'Been there, got the T-Shirt':
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
console.log(party());
console.log(party());
console.log(party());

//lazy definition pattern
//initialize code required for first tim invoked, the redefined for subsequent
function party2(){
    console.log('Wow this is amazing!');
    party2 = function(){
        console.log('Been there, got the T-Shirt');
    }
}
const beachParty = party2; // note that the party function has not been invoked
console.log(beachParty());
console.log(party2());
console.log(beachParty());
console.log(beachParty());
//init-time branching
function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}
console.log(ride());
console.log(ride);
//reccursive
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//collatz conjecture
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }
    return collatz(n,[...sequence,n]);
}
//Event-driven Asynchronous Programming
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}
function selfDestruct(){
    console.log('BOOOOM!');
}
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
//promise
/*
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});
*/
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log("Before the roll");

const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');

//promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );
//promise.catch( result => console.log(`Drat! ... I rolled a ${result}`));
//or
/*
promise.then( result => console.log(`I rolled a ${result}`) )
            .catch( result => console.log(`Drat! ... I rolled a ${result}`) );
            */
//player promise
/*
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch( throw error)
*/
//async
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}
//generalized functions
//abstraction
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    } 
    return Math.floor((b-a+1) * Math.random()) + a;
}
console.log(random(6));
console.log(random(10,20));
/*
function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
        const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}
function square(n) {
    return n*n;
}
random(1,10,square);
random(1,5, (n) => 2 * n );
*/
//functions return functions
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}
const hello = returnHello();
console.log(hello());
function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}
returnHello();
const englishGreeter = greeter();
console.log(englishGreeter());
const frenchGreeter = greeter('Bonjour');
console.log(frenchGreeter());
const germanGreeter = greeter('Guten Tag');
console.log(germanGreeter());