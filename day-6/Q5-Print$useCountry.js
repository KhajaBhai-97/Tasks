/* Print the country that uses US dollars as currency. */

let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let usdCountry = countriesData.filter((country) => {
        if (country?.currencies?.hasOwnProperty("USD")) {
          return JSON.stringify(country);
        }
      });
      console.log(usdCountry);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();
