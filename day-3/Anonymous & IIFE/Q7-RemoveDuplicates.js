/* Remove duplicates from an array using anonymous function & IIFE */

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: hermoine,appa,amma,amma,harry,appa,road

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
    let arr = [];
    for (let i = 0; i < args.length; i++) {
      if (arr.indexOf(args[i]) === -1) {
        arr.push(args[i]);
      }
    }
    return arr;
  };

  let input = userInput[0].split(",");

  let res = funCall(input);

  console.log(res);
  //end-here
});

//================================================================
//IIFE functions
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
    let arr = [];
    for (let i = 0; i < args.length; i++) {
      if (arr.indexOf(args[i]) === -1) {
        arr.push(args[i]);
      }
    }
    return arr;
  })(userInput[0].split(","));

  // let input = userInput[0].split(',')

  // let res = funCall(input)

  console.log(funCall);
  //end-here
});
