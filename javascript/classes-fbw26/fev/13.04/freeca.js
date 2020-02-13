const numbers = [10, 11, 12, 25, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]

/**
 * We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
 */
function htmlColorNames(arr) {
  // change code below this line
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex, amountToDelete, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick"
  ])
);

/**
 * Basic Data Structures: Copy Array Items Using slice()
 */

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

/**
 * We have defined a function, forecast, that takes an array as an argument. Modify the function using slice()
 * to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
 */

const forecast = (arr) => {
  // change code below this line

  return arr.slice(2, 4);
};

// do not change code below this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

/**
 * Basic Data Structures: Copy an Array with the Spread Operator
 */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5)); //should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]

/**
 * Basic Data Structures: Combine Arrays with the Spread Operator
 */
