// Import prompt-sync to take input from the terminal
const prompt = require("prompt-sync")();

// Collect student name and phase marks
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

// Calculate mean
const mean = calculateMean(Phase0, Phase1, Phase2, Phase3, Phase4, Phase5);

// Get grade based on mean
const grade = getGrade(mean);

// Print results
console.log("\nMoringa School Student Results.");
console.log("Software Engineering.");
console.log(`${studentName}`);
console.log(`Mean Marks: ${mean}`); // Display mean with 2 decimal places
console.log(`Grade: ${grade}`);
