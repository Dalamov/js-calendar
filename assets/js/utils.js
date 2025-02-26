'use strict';

/**
 * Toggle styles when we press the switch button
 */
var main = document.querySelector("main");
var changeButton = document.getElementById("toggle_classes");
changeButton.addEventListener("click", switchStyle);

function switchStyle() {
  main.classList.toggle("darkMode");
  main.classList.toggle("lightMode");
}

function pad(val) {
  let valString = val + "";

  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

/**
 * Convert dateSelected string to date
 */
function convertStringToDate(stringDate, stringTime) {

  //convert date string
  const targetDateArr = stringDate.split("-");
  const targetYear = targetDateArr[0];
  const targetMonth = targetDateArr[1] - 1;
  const targetDay = targetDateArr[2];

  //convert time string
  const targetTimeArr = stringTime.split(":");
  const targetHours = targetTimeArr[0];
  const targetMinutes = targetTimeArr[1];

  //return date
  return new Date(targetYear, targetMonth, targetDay, targetHours, targetMinutes);
}