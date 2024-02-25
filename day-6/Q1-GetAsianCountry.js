/* Get all the countries from Asia continent /region using Filter function */

let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let asianCountries = countriesData.filter(
        (country) => country.region === "Asia"
      );
      console.log(asianCountries);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();
