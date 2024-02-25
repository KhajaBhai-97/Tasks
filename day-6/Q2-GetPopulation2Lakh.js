/* Get all the countries with a population of less than 2 lakhs using Filter function */

let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let below2lakhs = countriesData.filter(
        (country) => Number(country.population) < 200000
      );
      console.log(below2lakhs);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();
