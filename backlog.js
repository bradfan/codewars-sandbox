"use strict";

const log = console.log.bind(document);

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

// const sumStr = (a, b) => (Number(a) + Number(b)).toString();
  
// console.log(sumStr("4", "5"));

// gpa function that returns integer.1st decimal -  CODEJAM

// const randoGen = () => Math.random();

// const randomGPA = () => (randoGen()) * 3 + 1;

// console.log(randomGPA().toFixed(1))

// console.log("gpa",randomGPA());

// Improve firstName/lastName function CODEJAM

// const firstNames = ["Brad 1", "Zintis 2", "Joe 3", "Phoebe 4", "Giuseppe 5"];

// const fName = () =>  Math.trunc(Math.random() * firstNames.length);

// console.log(firstNames[fName()])
// console.log(firstNames[fName()])
// console.log(firstNames[fName()])
// console.log(firstNames[fName()])
// console.log(firstNames[fName()])

//   Filter out the geese

// return an array containing all of the strings in the input array EXCEPT those that match strings in geese

// const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// const gooseFilter = (birds) => birds.filter((elm) => !geese.includes(elm));

// console.log(gooseFilter(["Mallard","Hook Bill","African","Crested","Pilgrim","Toulouse","Blue Swedish",])
// );

// Generate number 3 - 18 using 1-6 * 3
// const bellCurve = () => (Math.trunc(Math.random() * 6 + 1) * 3)
// console.log(bellCurve());
// console.log(bellCurve());
// console.log(bellCurve());
// console.log(bellCurve());
// console.log(bellCurve());
// console.log(bellCurve());

// Keep up the hoop CODEWARS

// const hoopCount = (n) =>
//   n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"


// console.log(hoopCount(15))

// CODE SNIPPET RE: DYNAMICALLY CREATED RADIO BUTTONS

// let fighterBtn = document.createElement("input");
// let fighterBtnLbl = document.createElement("label");
// fighterBtnLbl.for = "fighterBtn";
// fighterBtnLbl.innerHTML = "Fighter  ";
// classForm.append(fighterBtnLbl);
// fighterBtn.type = "radio";
// fighterBtn.name = "profession";
// fighterBtn.onclick = "formFunction(this.value)";
// fighterBtn.value = "Fighter";

// classForm.append(fighterBtn);

// let palladinBtn = document.createElement("input");
// let palladinBtnLbl = document.createElement("label");
// palladinBtnLbl.for = "palladinBtn";
// palladinBtnLbl.innerHTML = "Palladin  ";
// classForm.append(palladinBtnLbl);
// palladinBtn.type = "radio";
// palladinBtn.name = "profession";
// palladinBtn.onclick = "formFunction(this.value)";
// palladinBtn.value = "Palladin";

// classForm.append(palladinBtn);

// let rangerBtn = document.createElement("input");
// let rangerBtnLbl = document.createElement("label");
// rangerBtnLbl.for = "rangerBtn";
// rangerBtnLbl.innerHTML = "Ranger  ";
// classForm.append(rangerBtnLbl);
// rangerBtn.type = "radio";
// rangerBtn.name = "profession";
// rangerBtn.onclick = "formFunction(this.value)";
// rangerBtn.value = "Ranger";

// classForm.append(rangerBtn);

// let clericBtn = document.createElement("input");
// let clericBtnLbl = document.createElement("label");
// clericBtnLbl.for = "clericBtn";
// clericBtnLbl.innerHTML = "Cleric  ";
// classForm.append(clericBtnLbl);
// clericBtn.type = "radio";
// clericBtn.name = "profession";
// clericBtn.onclick = "formFunction(this.value)";
// clericBtn.value = "Cleric";

// classForm.append(clericBtn);

// let druidBtn = document.createElement("input");
// let druidBtnLbl = document.createElement("label");
// druidBtnLbl.for = "druidBtn";
// druidBtnLbl.innerHTML = "Druid  ";
// classForm.append(druidBtnLbl);
// druidBtn.type = "radio";
// druidBtn.name = "profession";
// druidBtn.onclick = "formFunction(this.value)";
// druidBtn.value = "druid";

// classForm.append(druidBtn);

// let magicUserBtn = document.createElement("input");
// let magicUserBtnLbl = document.createElement("label");
// magicUserBtnLbl.for = "magicUserBtn";
// magicUserBtnLbl.innerHTML = "Magic-User  ";
// classForm.append(magicUserBtnLbl);
// magicUserBtn.type = "radio";
// magicUserBtn.name = "profession";
// magicUserBtn.onclick = "formFunction(this.value)";
// magicUserBtn.value = "MagicUser";

// classForm.append(magicUserBtn);

// let illusionistBtn = document.createElement("input");
// let illusionistBtnLbl = document.createElement("label");
// illusionistBtnLbl.for = "illusionistBtn";
// illusionistBtnLbl.innerHTML = "Illusionist  ";
// classForm.append(illusionistBtnLbl);
// illusionistBtn.type = "radio";
// illusionistBtn.name = "profession";
// illusionistBtn.onclick = "formFunction(this.value)";
// illusionistBtn.value = "Illusionist";

// classForm.append(illusionistBtn);

// let thiefBtn = document.createElement("input");
// let thiefBtnLbl = document.createElement("label");
// thiefBtnLbl.for = "thiefBtn";
// thiefBtnLbl.innerHTML = "Thief  ";
// classForm.append(thiefBtnLbl);
// thiefBtn.type = "radio";
// thiefBtn.name = "profession";
// thiefBtn.onclick = "formFunction(this.value)";
// thiefBtn.value = "Thief";

// classForm.append(thiefBtn);

// let assasinBtn = document.createElement("input");
// let assasinBtnLbl = document.createElement("label");
// assasinBtnLbl.for = "assasinBtn";
// assasinBtnLbl.innerHTML = "Assasin  ";
// classForm.append(assasinBtnLbl);
// assasinBtn.type = "radio";
// assasinBtn.name = "profession";
// assasinBtn.onclick = formFunction(this.value);
// assasinBtn.value = "Assasin";

// classForm.append(assasinBtn);

// let submitClass = document.createElement("input");
// submitClass.type = "text";
// submitClass.id = "result";
// submitClass.placeholder = "Your selection.";
// classForm.append(submitClass);
// let submitClass2 = document.createElement("input");
// submitClass2.type = "submit";
// submitClass2.value = "Submit class";

// classForm.append(submitClass2);

// this function (also saved in sandbox) returns cannot read properties of null. It works in standard html/js but not dynamically. It may be out of place.
     // function formFunction(profession) {
     //   console.log("Profession", profession);
     //   document.getElementById("result").value = profession;
     // }


// I love you, a little , a lot, passionately ... not at all CODEWARS

// const howMuchILoveYou = (nb_petals) => {
//      switch (nb_petals % 6) {
//        case 0:
//          return "not at all";
//        case 1:
//          return "I love you";
//        case 2:
//          return "a little";
//        case 3:
//          return "a lot";
//        case 4:
//          return "passionately";
//        case 5:
//          return "madly";
//      }
//    };
   
   
//    console.log(howMuchILoveYou(7));

// Beginner Series #4 Cockroach

// const cockroachSpeed = (s) => Math.floor((s * 1000)/36);
    
  

//   console.log(cockroachSpeed(100))

// Drink about

// const peopleWithAgeDrink = function (old) {
//      if(old < 14) {
//          return "drink toddy";
//      } else if(old < 18) {
//         return "drink coke";
//      } else if(old < 21) {
//          return "drink beer";
//      } else return 'drink whisky';
//    };
 
//    console.log(peopleWithAgeDrink());
 
 //   Abbreviated solution:
 //   const peopleWithAgeDrink = (age) =>
 //   age < 14 ? "drink toddy" :
 //   age < 18 ? "drink coke" :
 //   age < 21 ? "drink beer" : "drink whisky"

 // Switch it up

// const switchItUp = function (number) {
//   switch (number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";

//     case 2:
//       return "Two";

//     case 3:
//       return "Three";

//     case 4:
//       return "Four";

//     case 5:
//       return "Five";

//     case 6:
//       return "Six";

//     case 7:
//       return "Seven";

//     case 8:
//       return "Eight";

//     case 9:
//       return "Nine";
//   }
// };

// console.log(switchItUp(5));

// HACKER RANK TEST QUIZ fizzbuzz

// function fizzBuzz(n) {
//   for (let i = 1; i < n + 1; i++) {
//     if (i % 15 === 0) console.log(i, "fizzbuzz");
//     else if (i % 3 === 0) console.log(i, "fizz");
//     else if (i % 5 === 0) console.log(i, "buzz");
//     else console.log(i);
//   }
// }

// console.log(fizzBuzz(15));

// For Twins: 2. Math operations

// // function iceBrickVolume(radius, bottleLength, rimLength) { let volume =  (radius ** 2 * (bottleLength - rimLength)) * 2;
// //      return volume
// //   }

// // same function as =>
//   const iceBrickVolume = (radius, bottleLength, rimLength) => (radius ** 2 * (bottleLength - rimLength)) * 2

//   console.log(iceBrickVolume(1, 10, 2));

// DNA TO RNA CONVERSION CODEWARS

// function DNAtoRNA(dna) {
//     let RNA = dna.replaceAll('T', 'U');
//     return RNA
//   }

// replaceAll() is not yet supported by all browsers. the reg exp /T/g stands in, "g" is for global
 
// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U')

// log(DNAtoRNA("TTTTTT"))

// let str = "String with spaces.";

// function noSpace(x) {
//   let result = x.split(" ").join("");
// }
// noSpace(str);

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//   const sharkTime = sharkDistance / sharkSpeed;
//   const humanTime = pontoonDistance / youSpeed;
//   if ((dolphin = true)) {
//     sharkTime === sharkTime * 2;
//   }
//   console.log(humanTime < sharkTime ? "Alive!" : "Shark Bait!");

//   return humanTime < sharkTime ? "Alive!" : "Shark Bait!";
// }
// // Testing for 28 and 109 and 1 and 7 and true
// shark(28, 109, 1, 107, true);

// function countPositivesSumNegatives(input) {
//     if (input.length === 0 || input === null) {
//         return input;
//     }
//   let result = [];
//   let negs = 0;
//   let counter = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       counter++;
//     } else if (input[i] < 0) {
//       negs += input[i];
//     }
//   }
//   result.push(counter);
//   result.push(negs);
//   console.log(result);
//   return result;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// countPositivesSumNegatives(array);

//  function stringClean(s) {
//   return s.replace(/[0-9]/g, "");
// }

// console.log("If either of the characters is not a letter, return -1");
// console.log("If both characters are the same case, return 1");
// console.log("If both characters are letters, but not the same case, return 0");
// function sameCase(a, b) {
//   if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) {
//     return -1;
//   }
//   if (
//     (a.toUpperCase() === a && b.toUpperCase() === b) ||
//     (a.toLowerCase() === a && b.toLowerCase() === b)
//   ) {
//     return 1;
//   } else return 0;
// }
// const char1 = "T";
// const char2 = "3";
// console.log(sameCase(char1, char2));

// function nameShuffler(str) {
//   const strArray = str.split(" ");
//   return strArray[1].concat(" ", strArray[0]);
// }
// // OR

// function nameShuffler2(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(nameShuffler("Phil McKrevis"));
// console.log(nameShuffler2("Phil McKrevis"));

// function solution(a, b) {
//   return a.length > b.length
//     ? b.concat(a).concat(b)
//     : a.concat(b).concat(a);
// }
// console.log(solution("1", "22"));

// function capitalizeWord(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
 
// }

// console.log(capitalizeWord("fucker"));

// function findMultiples(integer, limit) {
//      const multipleNumber = Math.floor(limit / integer);
//      let result = [];
//      for (let i = 1; i <= multipleNumber; i++) {
//        result.push(integer * i);
//      }
//      return result;
//    }
//    console.log(findMultiples(11, 32));
   
//    function removeEveryOther(arr) {
//      let result = [];
//      for (let i = 0; i < arr.length; i++) {
//        if (i % 2 === 0) {
//          result.push(arr[i]);
//        }
//      }
//      return result;
//    }
   
//    console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
   
//    function magNumber(info) {
//      const totalRds = info[1] * 3;
   
//      switch (info[0]) {
//        case "PT92":
//          return Math.ceil(totalRds / 17);
//          break;
//        case "M4A1":
//          return Math.ceil(totalRds / 30);
//          break;
//        case "M16A2":
//          return Math.ceil(totalRds / 30);
//          break;
//        case "PSG1":
//          return Math.ceil(totalRds / 5);
//          break;
//        }
     
//    }
//    console.log(magNumber(["PT92", 20]));

// function toFreud(string) {
//      if (string.length === 0) {
//        return string;
//      }
//      let array = string.split(" ");
//      let result = "";
//      for (let i = 0; i < array.length; i++) {
//        result += "sex" + " ";
//      }
//      return result;
//    }
   
//    console.log(toFreud("Stick it up your ass."));
   
//    function mergeArrays(arr1, arr2) {
//      if (arr1 === [] || arr2 === []) {
//        return [];
//      }
//      let temp = arr1;
//      for (let i = 0; i <= arr2.length - 1; i++) {
//        temp.push(arr2[i]);
//      }
//      let result = [...new Set(temp)];
   
//      return result.sort((a, b) => {
//        return a - b;
//      });
//    }
   
//    console.log(mergeArrays([ 3, 1, 2, 4, 5, 6], [6, 7, 8, 9, 10]));

// function wrap(value) {
//      return {
//        value: value,
//      };
//    }
   
//    console.log(wrap("bozo"));
   
//    function pillars(num_pill, dist, width) {
//      if (num_pill === 1) {
//        return 0;
//      }
//      const distCm = dist * 100;
//      const addWidth = (num_pill - 2) * width;
//      return distCm * (num_pill - 1) + addWidth;
//    }
   
//    console.log(pillars(5, 25, 25));
   
//    function isToday(date) {
//      let today = new Date().toISOString().slice(0, 10);
//      console.log(today);
//      console.log(date);
//      return today == date;
//    }
   
//    console.log(isToday("2022-05-17"));
   
//    function isPalindrome(x) {
//      const y = x.split("").reverse().join("");
//      return y.toLowerCase() === x.toLowerCase();
//    }
   
//    console.log(isPalindrome("Bob"));


// function dontGiveMeFive(start, end) {
//      const array = [];
//      const newArray = [];
//      for (let i = start; i <= end; i++) {
//        array.push(i);
//      }
//      console.log(array);
//      const tempArray = array.map((x) => {
//        return String(x);
//      });
//      console.log(tempArray);
//      for (let i = 0; i < tempArray.length; i++) {
//        if (!tempArray[i].includes("5")) {
//          newArray.push(tempArray[i]);
//        }
//      }
//      return newArray.length;
//    }
   
//    console.log(dontGiveMeFive(4, 17));
   
//    function dontGiveMeFiveCondensed(start, end){
//      let res = [];
//      for (let i = start; i <= end; i++) {
//        if (!i.toString().includes('5')) res.push(i);
//      }
//      return res.length;
//    }
   
//    console.log(dontGiveMeFiveCondensed(4, 17));

// function remainder(n, m) {
//      return n > m ? n % m : m % n;
//    }
   
//    console.log(remainder(4, 15));