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


