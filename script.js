//  1.) How to compare two JSON have the same properties without order?
// 1)ANSWER =>
let obj1 = {name: "Person 1", age:5};
let obj2 = {age:5, name: "Person 1"};
let compare = JSON.stringify(obj1)
console.log(compare);
console.log(obj2);

//2.) Use the rest countries' API URL => https://restcountries.com/v3.1/all and display all the country flags in the console
// 2)ANSWER =>
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.svg);
  }
};

//3.) Use the same rest countries and print all countries names, regions, sub-region and populations
// 3)ANSWER =>
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i = 0; i < result1.length; i++) {
    console.log("countryname:"+" "+result1[i].name.common,"regions:"+" "+result1[i].region,"sub-region:"+" "+result1[i].subregion,"population:"+" "+result1[i].population);
  }
};