/*Print odd numbers in an array using anonymous function & IIFE*/

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: 1,2,3,4,5,6,7,8,9,10,11,12

*/
//=======================================================================
// using anonymous function
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

  let resArr = [];

  let res = function (userInput) {
    for (let num of userInput) {
      if (Number(num) % 2 === 1) resArr.push(Number(num));
    }
    return resArr;
  };

  console.log(res(userInput[0].split(",")));

  //end-here
});

//=======================================================================
//using IIFE function

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

  let resArr = [];

  let res = (function (userInput) {
    for (let num of userInput) {
      if (Number(num) % 2 === 1) resArr.push(Number(num));
    }
    return resArr;
  })(userInput[0].split(","));

  console.log(res);

  //end-here
});

//=======================================================================
