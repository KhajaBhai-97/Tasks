/* 
JSON Iteration loops (for, for in, for of, forEach)
*/

let ip = {
  name: "kajamaideen",
  mobile: 7987986774,
  mail: "kajamaideen@gmail.com",
  education: [
    {
      degree: "BE",
      institute: "Anna university",
      year: "2018",
    },
    {
      degree: "HSC",
      institute: "Govt Hr Sec School",
      year: "2014",
    },
    {
      degree: "SSLC",
      institute: "Govt Hr Sec School",
      year: "2012",
    },
  ],
  course: {
    institute: "GUVI",
    year: "2024",
    course: "FSD",
    Batch: "FSD56WE-T",
  },
};

//========================================================================
//for loop

let objKeys = Object.keys(ip);

for (let i = 0; i < objKeys.length; i++) {
  if (typeof ip[objKeys[i]] == "object") {
    console.log(`${objKeys[i]} : ${JSON.stringify(ip[objKeys[i]])}`);
  } else {
    console.log(`${objKeys[i]} : ${ip[objKeys[i]]}`);
  }
}

//========================================================================
//for in loop

for (let key in ip) {
  if (typeof ip[key] == "object") {
    console.log(`${key} : ${JSON.stringify(ip[key])}`);
  } else {
    console.log(`${key} : ${ip[key]}`);
  }
}

//========================================================================
//for of loop

for (const [key, value] of Object.entries(ip)) {
  if (typeof ip[key] == "object") {
    console.log(`${key} : ${JSON.stringify(ip[key])}`);
  } else {
    console.log(`${key} : ${ip[key]}`);
  }
}

//========================================================================
//forEach loop

Object.keys(ip).forEach((x) => {
  if (typeof ip[x] == "object") {
    console.log(`${x} : ${JSON.stringify(ip[x])}`);
  } else {
    console.log(`${x} : ${ip[x]}`);
  }
});
