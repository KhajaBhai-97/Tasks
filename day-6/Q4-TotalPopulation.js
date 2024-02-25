/* Print the total population of countries using reduce function */

let countriesData;

const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let showDetails = countriesData.map((data) => data.population);
      let totalPopulation = showDetails.reduce((prev, nxt) => {
        return prev + nxt;
      });
      console.log(totalPopulation);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();
