//declaration
function hello(){
    console.log('Hello World!');
}
hello();
//expression
const goodbye = function bye(){
    console.log('Goodbye World!');
};
goodbye();//must include semi-colon at end
//rest 
function rest(...args){
    return args;
}
//The args parameter is an actual array, and has access to the same methods
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}
rest(2,4,6,8);

//mean function
function mean(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}
const square = x => x*x;
const add = (x,y) => x + y;
//const hey = () => alert('Hey World!');//works but alert is SO annoying
square();
add();
//hey();

//forEach()
const colors = ['Red', 'Green', 'Blue']
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
//OR
colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );

//map with callback
console.log([1,2,3].map( square ));
//An anonymous function can also be used as a callback
console.log([1,2,3].map( x => 2 * x));
//potentially very handy wrapping in tags:
console.log(['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` ));
//This callback can also take two more parameters ― the second parameter refers to the 
//index number in the array and the third refers to the array itself.
['red','green','blue'].map( (color, index, array) => `Element ${index} is ${color}. There are ${array.length} items in total.` );
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val ));
//The reduce() method also takes a second parameter after the callback, which is the initial value of the accumulator, acc 
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val,10)); // <---- second parameter of 10 here
//find avg word length in sentence
const sentence = 'The quick brown fox jumped over the lazy dog';
//convert to array with split()
console.log(words=sentence.split(" "));
//reduce to calc letters by starting count at 0 and adding length of each word
const total = words.reduce( (acc,word) => acc + word.length,0 );
const average = total/words.length;
console.log(average);
//filter() returns a new array that only contains items from the original array 
//that return true when passed to the callback.
const nums = [ 2, 7, 6, 5, 11, 23, 12 ]
console.log(nums.filter(x => x%2 === 0 ));//this returns true if the number is even
//look up info about reduceRight() , every() , find() and some()

//calculate the sum of square numbers using the map() method to square each number in 
//the array and then chain the reduce() method on the end to add the results together
console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ));
//apply salestac
const sales = [ 100, 230, 55];
totalAfterTaxSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
console.log(totalAfterTaxSales);
//inproved mean()
function meanImproved(array) {
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}
//improved mean() with callback
function meanWithCallback(array,callback) {
    if (callback) {
    array.map( callback );
    } 
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}
//.....eloquent javascript

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

//next two are the same
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square1(3));
console.log(square2(4));
//recursive
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
console.log(power(2,3));
 //recursive
 function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
console.log(findSolution(24));

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
  }
  printFarmInventory(7, 11);
  //revised
  function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
      numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
  }
  
  printFarmInventory(7, 11, 3);
  //clearly named and organized
  function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
      string = "0" + string;
    }
    return string;
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
  }
  printFarmInventory(7, 16, 3);

  //min
  function min(a,b) {
    if (a < b)
      return a;
    else if (b < a)
      return b;
  }
console.log(min(0, 10));
console.log(min(0, -10));
//recursive exercise
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
