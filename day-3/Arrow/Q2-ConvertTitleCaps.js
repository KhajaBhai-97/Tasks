/* Convert all the strings to title caps in a string array*/


/* using guvi IDE ...
input format:
    Enter the number with comma separation in single line without spaces.

    Example: apple,orange,grapes,cherry

*/

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

  let strChange = (str) => {
    let uppCase = str[0].toUpperCase();
    return uppCase + str.substring(1);
  };

  let abc = userInput[0].split(",");
  for (let i = 0; i < abc.length; i++) {
    let sdf = strChange(abc[i]);
    resultArr.push(sdf);
  }

  console.log(resultArr);

  //end-here
});
