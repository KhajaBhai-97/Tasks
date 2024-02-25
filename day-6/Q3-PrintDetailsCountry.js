/* Print the following details name, capital, flag, using forEach function */

let countriesData;
let resArray = [];
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let showDetails = countriesData.forEach((country) => {
        let obj = {
          name: JSON.stringify(country.name),
          capital: country.capital,
          flag: country.flag,
        };
        resArray.push(obj);
      });
      console.log(resArray);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();
