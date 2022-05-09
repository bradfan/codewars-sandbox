"use strict";

const log = console.log.bind(document);

// document.getElementById('generate').onclick = function() {

//     let values = ["dog", "cat", "parrot", "rabbit"];

//     const select = document.createElement("select");
//     select.name = "pets";
//     select.id = "pets"

//     for (const val of values)
//     {
//         var option = document.createElement("option");
//         option.value = val;
//         option.text = val.charAt(0).toUpperCase() + val.slice(1);
//         select.appendChild(option);
//     }

//     const label = document.createElement("label");
//     label.innerHTML = "Choose your pets: "
//     label.htmlFor = "pets";

//     document.getElementById("container").appendChild(label).appendChild(select);
// }

function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}

console.log("If either of the characters is not a letter, return -1");
console.log("If both characters are the same case, return 1");
console.log("If both characters are letters, but not the same case, return 0");
function sameCase(a, b) {
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) {
    return -1;
  }
  if (
    (a.toUpperCase() === a && b.toUpperCase() === b) ||
    (a.toLowerCase() === a && b.toLowerCase() === b)
  ) {
    return 1;
  } else return 0;
}
const char1 = "T";
const char2 = "3";
console.log(sameCase(char1, char2));

function nameShuffler(str) {
  const strArray = str.split(" ");
  return strArray[1].concat(" ", strArray[0]);
}
// OR

function nameShuffler2(str) {
  return str.split(" ").reverse().join(" ");
}


console.log(nameShuffler("Phil McKrevis"));
console.log(nameShuffler2("Phil McKrevis"));
