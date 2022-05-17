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

function wrap(value) {
  return {
    "value": value,
  };
}

console.log(wrap("bozo"));

function pillars(num_pill, dist, width) {
  if (num_pill === 1) {
    return 0;
  }
  const distCm = dist * 100;
  const addWidth = (num_pill - 2) * width;
  return distCm * (num_pill - 1) + addWidth;
}

console.log(pillars(5, 25, 25))

function isToday(date) {
  let today = new Date().toISOString().slice(0, 10)
  console.log(today)
  console.log(date)
  return today == date;
  }

console.log(isToday("2022-05-17"))




