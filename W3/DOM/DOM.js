const body = document.body;
console.log(typeof body);
console.log(body.nodeType);
//turn node list into Array
const imageArray = Array.from(document.images);
//OR spreader const imageArray = [...document.images];
