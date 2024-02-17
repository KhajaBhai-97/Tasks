/* Return all the prime numbers in an array*/

/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: 1,2,3,4,5,6,7,8,9,10,11,13,17,19,22,27,29

*/

//================================================================

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
  //   let funcall =

  const inputArray = userInput[0].split(",");

  const funcall = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };

  for (let i = 0; i < inputArray.length; i++) {
    let chk = funcall(inputArray[i]);
    if (chk) {
      response.push(inputArray[i]);
    }
  }

  console.log(response);

  //end-here
});
