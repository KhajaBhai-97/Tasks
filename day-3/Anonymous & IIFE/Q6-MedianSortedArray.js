/*Return median of two sorted arrays of the same size. using anonymous function & IIFE */

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: first array --> 1,2,3
             2nd array --> 4,5,6
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

  let arr1 = userInput[0].split(",");
  let arr2 = userInput[1].split(",");

  let arr3 = arr1.concat(arr2);

  console.log(arr3);

  let funCall = function (arr) {
    const mid = Math.floor(arr.length / 2);

    const sortedArr = arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0) {
      return (Number(sortedArr[mid - 1]) + Number(sortedArr[mid])) / 2;
    } else {
      return sortedArr[mid];
    }
  };

  console.log(funCall(arr3));
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

  let arr1 = userInput[0].split(",");
  let arr2 = userInput[1].split(",");

  let arr3 = arr1.concat(arr2);

  let res = (function (arr) {
    const mid = Math.floor(arr.length / 2);

    const sortedArr = arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0) {
      return (Number(sortedArr[mid - 1]) + Number(sortedArr[mid])) / 2;
    } else {
      return sortedArr[mid];
    }
  })(arr3);

  console.log(res);
  //end-here
});
