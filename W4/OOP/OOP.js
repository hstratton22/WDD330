//constructor function
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
const redDice = new Dice();
console.log(redDice);

//also const redDice = new Dice;
//or const whiteDice = new Dice(4);
console.log(redDice instanceof Dice);

//create new object
const literalObject = {};
//or constructedObject = new Object();
//literalObject instanceof Object;//<<true

const literalArray = [1,2,3];
//or constructedArray = new Array(1,2,3);
/*Array constructor functions exhibit some strange behavior regarding the 
arguments supplied, however. If only one argument is given, it doesn’t create 
an array with that argument as the first element, as you might expect. It sets 
the array’s length property instead, and returns an array full of undefined !
*/
//new Array(5); // you might expect [5]//<< [undefined, undefined, undefined, undefined, undefined]

//OR
class Dice1 {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
const blueDice = new Dice1(20);
console.log(blueDice.constructor);
//if constructor unknown
const greenDice = new redDice.constructor(10);
//prototype inheritance
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
const leo = new Turtle('Leonardo');
console.log(leo.name);

console.log(leo.sayHi());
console.log(Turtle.prototype);
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }

const raph = new Turtle('Raphael');
console.log(raph.name);
console.log(raph.sayHi());
console.log(raph.weapon);
console.log(raph.attack());
console.log(raph.constructor.prototype);
//or
console.log(Object.getPrototypeOf(raph));
//or raph.__proto__  but use previous instead
console.log(Turtle.prototype.isPrototypeOf(raph));
raph.hasOwnProperty('name');
raph.hasOwnProperty('weapon');

const don = new Turtle('Donatello');
console.log(don.weapon);
//protype object is live meaning applies to previous instances as well
console.log(leo.weapon);
leo.attack();
Turtle.prototype.weapon = 'Feet';
console.log(leo.attack());
leo.weapon = "Katana Blades";
console.log(leo.weapon);
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';
console.log(leo.attack());
Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function() {
    return 'Mmm, this ${this.food} tastes great!';
}
const mike = new Turtle('Michelangelo');
console.log(mike.eat());
mike.weapon = 'Nunchakus';

/*
class Turtle {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = (color) => {
if(typeof color === 'string'){
    return _color = color;
    } else {
        throw new Error('Color must be a string');
    }
}
        this.getColor = () => _color;
    }
}*/

console.log(Object.getPrototypeOf(raph));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(raph)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(raph))));
console.log(Turtle.prototype.propertyIsEnumerable('eat'));//enumerable mean will appear in forloop of properties
/*
class Turtle {
    constructor(name) {
        this.name = name;
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    swim() {
        return `${this.name} paddles in the water`;
    }
}
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}*/

console.log([1,2,3].toString());
console.log(2..toString);
//monkeypatching   //don't do it though, better to add to method to own constructor instead
/*Number.prototype.isEven = function() {
    return this%2 === 0;
}
Number.prototype.isOdd = function() {
    return this%2 === 1;
}
console.log(42..isEven());
console.log(765234..isOdd());*/
/*Array.prototype.delete = function(i) {
    return self.splice(i,1);
}*/
//fix for before IE8
/*
String.prototype.trim = String.prototype.trim || function() { 
    return this.replace(/^\s+|\s+$/,''); 
}*/
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i,1);
    }
}
const list = new myArray(1,2,3);
list.delete(1);
console.log(list);
const me = { name: 'DAZ' };
//value attributes
//writable false means can't change
//Object.defineProperty(me, 'eyeColor', { value: 'blue', writable: false, enumerable: true }); 
Object.getOwnPropertyDescriptor(me,'name');
//Value attributes OR getter() and setter()
me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});
console.log(me.yearsToRetirement);
me.yearsToRetirement = 10;
console.log(me.age);

/*
class Dice {
constructor(sides=6){    
    Object.defineProperty(this, 'sides', {
        get() {
        return `This dice has ${sides} sides`;
        },
        set(value) {
        if(value > 0) {
            sides = value;
            return sides;
        } else {
            throw new Error('The number of sides must be positive');
        }
        }
    });
    this.roll = function() {
        return Math.floor(sides * Math.random() + 1)
    }
    }
}*/
const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
    }
    //create instance

const lois = Object.create(Human);
console.log(Human.isPrototypeOf(lois));
lois.name = 'Lois Lane';
lois.job = 'Reporter';
//OR
const jimmy = Object.create(Human, { name: { value: 'Jimmy Olsen', enumerable: true }, job: { value: 'Photographer', enumerable: true } })
const Superhuman = Object.create(Human);
Superhuman.change = function() {
return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};
Superhuman.name = 'Name Needed';
Superhuman.realName = 'Real Name Needed';
const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';
console.log(superman.change());
Superhuman.init = function(name,realName){
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}
const batman = Object.create(Superhuman);
batman.init('Batman','Bruce Wayne');
console.log(batman.change());
const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry');
aquaman.change();
superman.walk();
superman.change();


//Mixins
const a = {};
const b = { name: 'JavaScript' };
Object.assign(a,b);
console.log(a.name);

function mixin(target,...objects) {
    for (const object of objects) {   
    if(typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
            target[key] = Array.isArray(object[key]) ? [] : {};
            mixin(target[key],object[key]);
            } else {
            Object.assign(target,object);  
            }
        }
        }
    }
    return target;
}
