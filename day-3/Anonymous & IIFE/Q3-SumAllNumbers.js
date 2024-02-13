/*Sum of all numbers in an array anonymous function & IIFE*/

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: 1,2,3,4

*/

//================================================================
//Anonymous function

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let funCall = function (args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += Number(args[i]);
    }
    return sum;
  };

  let input = userInput[0].split(",");

  console.log(funCall(input));

  //end-here
});

//================================================================
//IIFE function

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let funCall = (function (args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += Number(args[i]);
    }
    return sum;
  })(userInput[0].split(","));

  console.log(funCall);

  //end-here
});
