"use strict";

// Codewars Find min and max in an array

// let array = [-52, 56, 30, 29, -54, 0, -110];

// const min = (list) => Math.min(...list);

// const max = (list) => Math.max(...list);

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// Codewars Array plus Array

// function arrayPlusArray(arr1, arr2) {
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;

//     return arr1.concat(arr2).reduce(reducer);
//   }
//   console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

// CodeWars String repeat

// const repeatStr = (multiplier, str) => `${str.repeat(multiplier)}`

// console.log(repeatStr(4, "hubba"))

// Remove exclamation marks

// const removeExclamationMarks = str => str.replaceAll("!", "");

// const removeExclamationMarks = str => str.replace(/!/g, "");
// // used regex as codewars' browser doesn't support replaceAll
// console.log(removeExclamationMarks("Lets go Brandon!  !!! What the hell??!! Codewars does not support replaceAll!!"));

// Correct the mistakes of the character recognition software

// const correct = (string) => string.replace(/5/g,"S").replace(/1/g,"I").replace(/0/g,"O");
// console.log(correct("5 1 0"))

// Is it even?

// function testEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // with ternary operator

// function testEven(n) {
//   return n % 2 === 0;
// }
// console.log(testEven(6));

// Beginner Series #1 School Paperwork

// function paperwork0(n, m) {
//     if (n > 0 && m > 0) {
//       return n * m;
//     } else {
//       return 0;
//     }
//   }
// // With ternary operator

//   function paperwork1(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }
// console.log(paperwork0(4, 3))
// console.log(paperwork1(4, 3))

// Terminal Game move function
// const move = (position, roll) => (roll *2) + position;
// console.log(move(4, 3));

// You're a square

// const isSquare = function(n){
//     return n >= 0 && Math.sqrt(n) %1 === 0;
//     //  %1 (modulus 1 returns a whole number), 0 is a square root

//   }

//   console.log(isSquare(10));

// Reversed Words

// const reverseWords = (str) => str.split('').reverse().join('');

// console.log(reverseWords("P*KRlCadCe1){4x!T;GR5:kgJ1iW\,(0a+Qhmc&pnW/kx!#3C_%?"))

// Transportation on vacation

// function rentalCarCost(days) {
//   if (days >= 7) {
//     return days * 40 - 50;
//   } else if (days >= 3 && days < 7) {
//     return days * 40 - 20;
//   } else {
//     return days * 40;
//   }
// }
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(1));
// console.log(rentalCarCost(10));
// console.log(rentalCarCost(5));

// You only need one - Beginner

// function check(array, value) {
//     if (array.includes(value)) {
//       return true;
//     } else {
//       return false;
//     }

// }

// function check(array, value) {
//   return array.includes(value) ? true : false;
// }

// console.log(check([-52, 56, 30, 29, -54, 0, -110], 1));

// Century From Year

// const century = function (year) {
//   return Math.floor(year / 100) + (year % 100 ? 1 : 0);
// };

// console.log(century(1901));

// Basic Mathematical Operations

// const basicOp = (operator, value1, value2) =>
// {switch (operator) {
//   case '+': return value1 + value2;
//   case '-': return value1 - value2;
//   case '*': return value1 * value2;
//   case '/': return value1 / value2;
// }
// }

// console.log(basicOp('-', 3, 6));

//  Double Char

// function doubleChar(str) {
//   let doubleString = "";

//   for (let i = 0; i < str.length; i++) {
//     doubleString += str[i] + str[i];
//   }
//   return doubleString;
// }

// console.log(doubleChar("Let's go Brandon!"));

// Twice as old

// const twiceAsOld = (dadAge, sonAge) => Math.abs(sonAge * 2 - dadAge)

//  console.log(twiceAsOld(50,28))

//  USD => CNY

// const usdcny = (usd) =>  `${(usd * 6.75).toFixed(2)} Chinese Yuan`

// console.log(usdcny(83.25));

// Return Negative

// const makeNegative = (num) => num <= 0 ? num : num * -1;

// console.log(makeNegative(-526));

// Even Numbers in an array

// const evenNumbers = function (array, number) {
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//      if(array[i] % 2 === 0) newArray.push(array[i]);
//     }
//     return newArray.splice(newArray - number, number)
//   };
// console.log(evenNumbers([-52, 56, 30, 29, -54, 0, -110], 6));

//  Thinkful - Logic Drills: Traffic light

// const  updateLight = function(current) {
//   if(current === "green") {
//       return "yellow"
//   } else if(current === "yellow") {
//       return "red"
//   } else if(current === "red")
//       return "green"

//   }

//   console.log(updateLight("red"));

// Reversed sequence

// const reverseSeq = n => {
//     let reverse = [];
//     for (let i = n; i >= 1; i--) {
//         reverse.push(i);
//     } return reverse
// }

// console.log(reverseSeq(5))

// Invert values

// const invert = (array) => array.map((e) => (-e));

// console.log(invert([1, -2, 3, -4, 5]));

// Third Angle of a Triangle

// const otherAngle = (a, b) => 180 - (a + b);

// console.log(otherAngle(90,45));

// Is there a vowel in there?

// function isVow(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] === "a" ||
//       array[i] === "e" ||
//       array[i] === "i" ||
//       array[i] === "o" ||
//       array[i] === "u"
//     ) {
//       newArray.push(array[i]);
//       console.log("new array", newArray);
//       let result = newArray.toString();
//       console.log("result", result, typeof result);
//       //   return result;
//     }
//   }
// }

// console.log(
//   isVow([
//     118,
//     "u",
//     120,
//     121,
//     "u",
//     98,
//     122,
//     "a",
//     120,
//     106,
//     104,
//     116,
//     113,
//     114,
//     113,
//     120,
//     106,
//   ])
// );

// // ABOVE SOULTION DOES NOT WORK. LINE 244 IS THE ANSWER BUT IT WON'T RETURN CORRECTLY

// Return Two Highest Values in List

// const twoHighest = function (array) {
//   let highest = [];
//   let secondHighest = [];
//   let result = [];
//   if (array.length !== 0) {
//     highest.push(Math.max(...array));
//     console.log(highest);
//     array.splice(array.indexOf(highest));
//     console.log(array)
//     secondHighest.push(Math.max(...array));
//     result = secondHighest.concat(highest);
//     return result;
//   } else {
//     return [];
//   }
// };
// console.log(twoHighest([15, 20, 21, 17]));

// // const twoHighest = function (array) {
   
// //     for (let i = 0; i < array.length; i++) {
// //         const newArray = [];
// //         if(array[i] > array[i++]) {
// //            newArray.push(array[i]);
// //            console.log(newArray)
// //         }
        
// //     }
        
// // };
// // console.log(twoHighest([15, 20, 21, 17]));

// // const invert = (array) => array.map((e) => (-e));

// Codewars Array plus Array Redux

// const arrayPlusArray = (a,b) => a.concat(b).reduce((x, y) => x + y)

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// Grasshopper - Summation

// const summation = function (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   };
  
//   console.log(summation([100]));


// Returning Strings

// const greet = function (name) {
//   return `Hello, ${name} how are you doing today?`;
// };

// const greet = name => `Hello, ${name} how are you doing today?`

// console.log(greet("Brandon"));

// Convert a Number to a String!

// const numberToString = (num) => num.toString()

// console.log(numberToString(5))

// Opposite number

// const opposite = (number) => number * -1;

// console.log(opposite(-14))

// Even or Odd

// const even_or_odd = (number) => number %2 === 0 ? "Even" : "Odd";

// console.log(even_or_odd(16))

// Sum of positive

// const positiveSum = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum+=arr[i];
//   }
//   return sum;
// };
  
// console.log(positiveSum([1, -2, 3, 4, 5]));

// Alternate solution!!

// const positiveSum = (arr) => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 
// console.log(positiveSum([1, -2, 3, 4, 5]));

// const countSheeps = function (array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === true) {
//       result.push(array[i]);
//     }
//   }
//   return result.length;
// };

// Alternate solution 
// const countSheeps = (array) => array.filter(Boolean).length;

// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

//  Remove First and Last Character
// const removeChar = (str) => str.substring(1,str.length -1);
    
// console.log(removeChar("brandon"));

// Grasshopper - Messi goals function

// const goals = (a, b, c) => a + b + c;

// console.log(goals(3, 4, 5));

// Will there be enough space?

// const enough = (cap, on, wait)  => wait <= (cap - on) ? 0 : Math.abs(wait - (cap - on));

// console.log(enough(10, 5, 7));