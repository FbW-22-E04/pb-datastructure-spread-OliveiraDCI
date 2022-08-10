"use strict";
console.clear();

console.log("-- 1 --------------------------------");
const euroCountries = ["Germany", "Greece", "Turkey"];
const asianCountries = ["China", "Vietnam", "Cambodia"];
euroCountries.push(...asianCountries);
console.log(euroCountries);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mixArr = [...arr1, ...arr2];
console.log(mixArr);

console.log("-- 2 --------------------------------");
const arrLetters = ["a", "b", "c"];
const copyArr = [...arrLetters];
console.log(copyArr);

console.log("-- 3 --------------------------------");
const arrNumbersLargest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findLargest(arr) {
  return arr.reduce((acc, el) => (acc > el ? acc : el));
}
console.log(findLargest(arrNumbersLargest));

console.log("-- 4 --------------------------------");
const arrNumbersSmallest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findSmallest(arr) {
  return arr.reduce((acc, el) => (acc < el ? acc : el));
}
console.log(findSmallest(arrNumbersSmallest));

console.log("-- 5 --------------------------------");
const person = { name: "John" };
const job = { role: "Teacher" };
const personClone = Object.assign({}, person);
const employee = { ...person, ...job };
employee.name = "John Lennon";
employee.role = "Legend";
console.log(employee);

console.log("-- 6 --------------------------------");

function isWhole(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  return average % 1 === 0 ? true : false;
}
console.log(isWhole(1, 2, 3, 4)); // false
console.log(isWhole(9, 2, 2, 5)); // false
let arrWholeAverage = [2, 2, 2, 2];
console.log(isWhole(...arrWholeAverage)); // true
