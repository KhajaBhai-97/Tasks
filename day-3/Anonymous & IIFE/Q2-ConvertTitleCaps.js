/*Convert all the strings to title caps in a string array using anonymous function & IIFE*/

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: apple,orange,grapes,cherry

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

  let callFun = function (str) {
    let uppCase = str[0].toUpperCase();
    return uppCase + str.substring(1);
  };

  let resultArr = [];

  let abc = userInput[0].split(",");
  for (let i = 0; i < abc.length; i++) {
    let result = callFun(abc[i]);
    resultArr.push(result);
  }

  console.log(resultArr);

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

  let resultArr = [];

  let abc = userInput[0].split(",");
  for (let i = 0; i < abc.length; i++) {
    let result = (function (str) {
      let uppCase = str[0].toUpperCase();
      return uppCase + str.substring(1);
    })(abc[i]);
    resultArr.push(result);
  }

  console.log(resultArr);

  //end-here
});
