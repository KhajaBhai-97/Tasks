/* Rotate an array by k times using anonymous function & IIFE*/

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
    let ipLength = args.length;
    for (let i = 0; i < ipLength; i++) {
      let removeItem = args.pop();
      args.unshift(removeItem);
      console.log("*********", args);
    }
    return args;
  };

  // let input = userInput[0].split(',')

  console.log(funCall(userInput[0].split(",")));

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
    let ipLength = args.length;
    for (let i = 0; i < ipLength; i++) {
      let removeItem = args.pop();
      args.unshift(removeItem);
      console.log("*********", args);
    }
    return args;
  })(userInput[0].split(","));

  // let input = userInput[0].split(',')

  console.log(funCall);

  //end-here
});
