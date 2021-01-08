let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers.length);
avengers = [ ...avengers, ...['Hulk','Hawkeye', 'Black Widow'] ];
console.log(avengers);
avengers.join();//turn array into string separated by commas
console.log(avengers.join(' & '));//separated by &
avengers.splice(3, 1, 'Scarlet Witch');//at index[3] remove 1 item and replace with 'Scarlet Witch'
avengers.splice(4,0,'Quicksilver');//don't have to remove anything to add something
avengers.includes('Black Widow', 1); // will start the search from the second element in the array

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [ summer, winter ];
console.log(nested);
const flat = [...summer, ...winter];
console.log(flat);
//sets
const list = new Set();
list.add(1);
console.log(list);
const numbers = new Set([1,2,3]);
const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]);
console.log(moreNumbers);
const letters = new Set('hello');
console.log(letters);
//A set can be converted into an array by placing the set, 
//along with the spread operator directly inside an array literal.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
//then we convert it into an array
const shoppingArray = [...shoppingSet];
console.log(shoppingArray);
//or
const shoppingSet2 = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray2 = Array.from(shoppingSet2);
console.log(shoppingSet2);

let array = [1,2,3];
const strong = new Set().add(array);
array = null; // remove reference to the original
console.log(strong);
array = [...strong][0];
console.log(array);

const weak = new WeakSet();
const arr = [1,2,3];
weak.add(arr);
console.log(weak);
console.log(weak.has(arr));//true
weak.delete(arr);//true
console.log(weak.has(arr));   
//map
const romanNumerals = new Map();
console.log(romanNumerals.set(1,'I'));
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);
//Maps can be converted into a nested array of key-value pairs in a similar way to sets; 
console.log([...romanNumerals]);
//or
console.log(Array.from(romanNumerals));
//ternary
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
//or
console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`);
//while loop
let bottles = 11;
while (--bottles){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}
//multiplication table with nested loops
//too long to keep visible
/*for(let i=1 ; i<13 ; i++){
    for(let j=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
        }
    }*/
for(let i=0, max=avengers.length; i < max; i++){
console.log(avengers[i]);
}
/*variable max in the initialization part of the for loop, 
then the condition becomes i < max . This is preferable to u
sing i < avengers.length because then the length of the avengers 
array would have to be calculated after every pass through the loop. 
*/
//for-of loop
//*******variable must be declared using const*******
for(const value of avengers){
    console.log(value);
    }
//looping over sets
const lets = new Set('hello');
for(const letter of lets) {
    console.log(letter);
}

for(const key of romanNumerals.keys()) {
    console.log(key);
}

for(const value of romanNumerals.values()) {
    console.log(value);
}

for(const [key,value] of romanNumerals.entries()) {
    console.log(`${key} in Roman numerals is ${value}`);
}

    