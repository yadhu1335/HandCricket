// import { batorbowl } from "./index";

console.log("batorbowl:" + window.bob);

currently = document.getElementById("currently").innerText;
currently = batorbowl;
//work on the above
let prevsel = [];

function play(val) {
  prevsel.push(val);
  console.log("prev sel: " + val);
  let prediction = predict(prevsel);
  console.log("computer prediction=" + prediction);

  if (prediction == val) {
    console.log("you loose");
  }
}

function predict(selections) {
  let freeqmap = {};
  selections.forEach((selection) => {
    freeqmap[selection] = (freeqmap[selection] || 0) + 1;
  });

  let prediction = null;
  let maxfreeq = null;

  for (let number in freeqmap) {
    if (freeqmap[number] > maxfreeq) {
      maxfreeq = number;
      prediction = freeqmap[number];
    }
  }
  console.log("prediction=" + prediction);
  console.log("maxfreeq=" + maxfreeq);
  return prediction;
}
