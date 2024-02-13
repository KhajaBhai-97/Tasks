/* Return all the palindromes in an array using anonymous function & iife function */

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: hermoine,appa,amma,harry,road

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
    let argsSep = args.split("");
    return argsSep.reverse().join("");
  };

  let input = userInput[0].split(",");
  let resArr = [];
  for (let i = 0; i < input.length; i++) {
    let res = funCall(input[i]);
    if (input[i] === res) {
      resArr.push(input[i]);
    }
  }

  console.log(resArr);
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

  let input = userInput[0].split(",");
  let resArr = [];
  for (let i = 0; i < input.length; i++) {
    let res = (function (args) {
      let argsSep = args.split("");
      return argsSep.reverse().join("");
    })(input[i]);
    if (input[i] === res) {
      resArr.push(input[i]);
    }
  }

  console.log(resArr);
  //end-here
});
