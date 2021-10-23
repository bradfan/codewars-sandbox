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


    
 