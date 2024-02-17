/* Return all the prime numbers in an array*/

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: 1,2,3,4,5,6,7,8,9,10,11,13,17,19,22,27,29

*/

//================================================================
//Anonymous functions

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
  let response = [];
  let funcall = function (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const inputArray = userInput[0].split(",");

  for (const number of inputArray) {
    let primeChk = funcall(number);
    if (primeChk) {
      response.push(number);
    }
  }

  console.log(response);

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
  let response = [];

  const inputArray = userInput[0].split(",");

  for (const number of inputArray) {
    let primeChk = (function (num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    })(number);
    if (primeChk) {
      response.push(number);
    }
  }

  console.log(response);

  //end-here
});
