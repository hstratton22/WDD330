/*8
'use strict';
e = 2.718;
*/

function strictly() {
    'use strict';
}

(function () {
    'use strict';
    // All your code would go inside this function
}());
/*
function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}*/


function amIOldEnough(age) {
    console.log(age);
    if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
    } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
    } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}

/*
function amIOldEnough(age){
    debugger;
        if (age < 12) {
        debugger;
        return 'No, sorry.';
        } else if (age < 18) {
        debugger;
        return 'Only if you are accompanied by an adult.';
        } else {
        debugger;
        return 'Yep, come on in!';
    }
}*/
console.log(amIOldEnough(16));


//const error = new Error('Oops, something went wrong');
/*
//all will cause program to halt
throw 2;
throw 'Up';
throw { toys: 'out of pram' };
*/
//throw new Error('Something has gone badly wrong!');
//const error = new TypeError('You need to use numbers in this function');
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};
console.log(squareRoot(121));
//console.log(squareRoot(-1));
/*
function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}
console.log(imaginarySquareRoot(-49));
*/
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}
console.log(imaginarySquareRoot(-49));
//compare to answer of squareRoot(4) and return true if same
function itSquareRoots4() {
    return squareRoot(4) === 2;
}

console.log(itSquareRoots4());
//Jest
//npm install -g jest
//jest -v
/*
Create a file called squareRoot.test.js and add the following code:

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};
test('square root of 4 is 2', () => {
expect(squareRoot(4)).toBe(2);
});
*/
/*
This file contains the squareRoot() function that we are testing, as well as a 
test() function. The first parameter of the test() function is a string that 
describes what we are testing, in this case that ‘square root of 4 is 2’. The 
second parameter is an anonymous function that contains a function called expect() , 
which takes the function we’re testing as an argument, and returns anexpectation object. 
The expectation object has a number of methods calledmatchers. In the example above, the 
matcher is toBe() , which tests to see if the value returned by our squareRoot() function 
is the same as the value provided as an argument (2, in this case). These matchers are named 
so they read like an English sentence, making them easier to understand (even for non-programmers), 
and the feedback they provide more meaningful. The example above almost reads as ‘expect the square 
root of 4 to be 2’. It’s important to recognize that these are just functions at the end of the day, 
so they behave in exactly the same way as any other function in JavaScript. This means that any valid 
JavaScript code can be run inside the test function.
*/
//in folder with squareRoot.test.js enter //jest -c {}
//should be:
/*<< PASS  ./squareRoot.test.js
✓ square root of 4 is 2 (2ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.996s*/


