/*
create paragraph
para.classList.add('important');
const newPara = document.createElement('p');
newPara.textContent = 'Another Paragraph';
para.appendChild(newPara);
*/
//or with jQuery $(para).addClass('important').append('<p>Another Paragraph</p>');

//Underscore & Lodash
// flatten an array
//_.flatten([1, [2, [3, [4]], 5]]);
// return the last element in an array
//_.last([1, 2, 3]);
// randomly shuffle an array
//_.shuffle([1, 2, 3, 4]);

//import { PI } from './pi.js';
//import  { mean, variance } from './equations.js';
//or 
//import  { mean } from './equations.js';
//or import * as stats from './equations.js';
 //console.log(equations.mean([2,6,10]));

//The big difference with default exports is that 
//you don't need to use curly braces or make any mention 
//of the value that is being imported, making the statement 
//read more elegantly.

 //import PI from './pi.js';
//import square from './square.js';
//import stats from './stats.js';
//console.log()

//with ECMASCript import ordinal from "ordinal";
//import {days, months} from "date-names";

//export function formatDate(date, format) { /* ... */ }
//import {days as dayNames} from "date-names";//reassign name

/*
//not usable but proper addition of dependencies and export
const {buildGraph} = require("./graph");

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

exports.roadGraph = buildGraph(roads.map(r => r.split("-")));
*/
//from squareFunction.js
//const square = require('./squareFunction');
//square(6);