'use strict';
//only for use with Jest

//We have used the toEqual() match in this test. This is because we are testing an array.

/*function factorsOf(n) {
const factors = [];
    for (let i=1; i < n ; i++) {
        if (n/i === Math.floor(n/i)){
        factors.push(i);
        }
}
    return factors;
}*/



/*
function factorsOf(n) {
    const factors = [];
    for (let i=1; i <= n ; i++) { // change on this line
        if (n/i === Math.floor(n/i)){
        factors.push(i);
        }
    }
    return factors;
}
test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);
});*/
/*
function factorsOf(n) {
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) => a - b);
}
test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});
test('10 is not prime', () => {
    expect(isPrime(10)).not.toBe(true);
});*/
/*
function isPrime(n) {
    return factorsOf(n).length === 2;
}
*/

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

function isPrime(n) {
    try{
        return factorsOf(n).length === 2;
    } catch(error) {
        return false;
    }
    }