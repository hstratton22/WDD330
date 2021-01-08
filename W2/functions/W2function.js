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