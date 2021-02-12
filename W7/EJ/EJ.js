function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

console.log(repeat(3, console.log));
//
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
//
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
//
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
//
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
//
["A", "B"].forEach(l => console.log(l));
//
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
//
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
//
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
//
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  //
  function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  console.log(every([2, 4, 16], n => n < 10));
  console.log(every([], n => n < 10));
  
  /*
  fetch("example/data.txt")
  .then(resp => resp.text())
  .then(text => console.log(text));
  //second argument
  fetch("example/data.txt", {method: "DELETE"}).then(resp => {
    console.log(resp.status);
    // → 405
  });
  */
 //to set headers
 //useful to include things such as authentication information or to tell the server which file format you’d like to receive.
 /*
 fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
  .then(resp => resp.text())
  .then(console.log);*/
  
  //focus and blur
  //The first moves focus to the DOM element it is called on, and the second removes focus. 
  /*focus.html
  <input type="text">
<script>
  document.querySelector("input").focus();
  console.log(document.activeElement.tagName);
  // → INPUT
  document.querySelector("input").blur();
  console.log(document.activeElement.tagName);
  // → BODY
</script>
*/
//preventDefault for form submission
/*
<form action="example/submit.html">
  Value: <input type="text" name="value">
  <button type="submit">Save</button>
</form>
<script>
  let form = document.querySelector("form");
  form.addEventListener("submit", event => {
    console.log("Saving value", form.elements.value.value);
    event.preventDefault();
  });
</script>
*/
localStorage.setItem("uname", "marijn");
console.log(localStorage.getItem("uname"));
// → marijn
localStorage.removeItem("uname");
//A value in localStorage sticks around until it is overwritten, 
//it is removed with removeItem, or the user clears their local data.
//
/*The URL https://eloquentjavascript.net/author is configured to respond 
with either plaintext, HTML, or JSON, depending on what the client asks for. 
These formats are identified by the standardized media types text/plain, text/html, 
and application/json.

Send requests to fetch all three formats of this resource. Use the headers property 
in the options object passed to fetch to set the header named Accept to the desired media type.

Finally, try asking for the media type application/rainbows+unicorns and see which status 
code that produces.
*/
//answer:
/*
const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
               "text/html",
               "application/json",
               "application/rainbows+unicorns"];

async function showTypes() {
  for (let type of types) {
    let resp = await fetch(url, {headers: {accept: type}});
    console.log(`${type}: ${await resp.text()}\n`);
  }
}

showTypes();
*/