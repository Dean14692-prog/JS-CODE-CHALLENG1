// I Imported prompt-sync to take input from the terminal
// I installed prompt-sync in my terminal to be able to input values at terminal
//I used npm install prompt-sync command
//I have several variable
/* 
1. Phase Marks
2. Mean Mark
3. Grade
4. Student Name
*/

// Collect student name and phase marks
const prompt = require("prompt-sync")();
const studentName = prompt("Student Name: ");
const Phase0 = parseFloat(prompt("Phase 0 Marks: "));
const Phase1 = parseFloat(prompt("Phase 1 Marks: "));
const Phase2 = parseFloat(prompt("Phase 2 Marks: "));
const Phase3 = parseFloat(prompt("Phase 3 Marks: "));
const Phase4 = parseFloat(prompt("Phase 4 Marks: "));
const Phase5 = parseFloat(prompt("Phase 5 Marks: "));

// Function to calculate mean marks
function calculateMean(Phase0, Phase1, Phase2, Phase3, Phase4, Phase5) {
  return (Phase0 + Phase1 + Phase2 + Phase3 + Phase4 + Phase5) / 6;
}
const mean = calculateMean(Phase0, Phase1, Phase2, Phase3, Phase4, Phase5);

// Function to determine grade
function getGrade(mean) {
  if (mean >= 79 && mean <= 100) {
    return "A";
  } else if (mean >= 60 && mean < 79) {
    return "B-";
  } else if (mean >= 49 && mean < 60) {
    return "C-";
  } else if (mean >= 40 && mean < 49) {
    return "D-";
  } else {
    return "E";
  }
}

const grade = getGrade(mean);

console.log("\nMoringa School Student Results.");
console.log("Software Engineering.");
console.log(`${studentName}`);
console.log(`${vague}`);
console.log(`Mean Marks: ${mean}`);
console.log(`Grade: ${grade}`);
