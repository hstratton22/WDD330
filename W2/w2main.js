console.log(Number('23'))
const answer = '5' * 1;
console.log(typeof answer);
const ans = + '5';
console.log(typeof ans);
console.log(10..toString());
console.log(10..toString(2));
console.log(parseInt('23',10));
for (let line = "#"; line.length < 8; line += "#")
console.log(line);


for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
  
//chessboard
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
function sumAll(num) {
  let result = 0;
  for ( let i = 0; i <= num; i++){
      result += i;

  }return result;
}
console.log(sumAll(4));
function sumAllIncNeg(num) {
  let result = 0;
  let multiplier = 1;

  if (num < 0) {
     multiplier = -1; 
     num = Math.abs(num)};
  for ( let i = 0; i <= num; i++){
      result += i;
     }
     return result * multiplier; }
     console.log(sumAllIncNeg(-5));


