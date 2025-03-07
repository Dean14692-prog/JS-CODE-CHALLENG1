const prompt = require("prompt-sync")();
const speedLimit = 70;
const speed = parseFloat(prompt("Enter car speed (km/h): "));

function checkSpeed(speed) {
  if (speed < speedLimit) {
    console.log("Ok");
    return 0; // Return 0 demerit points if speed is below the limit
  } else {
    const demeritPoints = ((speed - speedLimit) / 5);
    console.log(`Demerit Points: ${demeritPoints}`);
    return demeritPoints; // Return the calculated demerit points
  }
}
const points = checkSpeed(speed); // Call Function

function checkDemeritPoints(points) {
  if (points >= 12) {
    console.log("License Suspended!");
  }
}
const demeritPoints = checkDemeritPoints(points); // Call Function
 



