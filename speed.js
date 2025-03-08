const prompt = require("prompt-sync")();
const speedLimit = 70;
const speed = parseFloat(prompt("Enter car speed (km/h): "));

function checkSpeed(speed) {
  if (speed < speedLimit) {
    console.log("Ok");
    return 0; 
  } else {
    const demeritPoints = (speed - speedLimit) / 5;
    console.log(`Demerit Points: ${demeritPoints}`);
    return demeritPoints; 
  }
}
const points = checkSpeed(speed); // Call Function

function checkDemeritPoints(points) {
  if (points >= 12) {
    console.log("License Suspended!");
  }
}
const demeritPoints = checkDemeritPoints(points); // Call Function
