const prompt = require("prompt-sync")();
const basic = parseFloat(prompt("Basic Salary(Ksh.): "));
const benefit = parseFloat(prompt("Benefits(Ksh.): "));
const commissions = parseFloat(prompt("Commission(Ksh.): "));
const gross = basic + benefit + commissions;
console.log(`Gross Salary: ${gross}`);

const tier1 = 8000;
const tier2 = 72000;
const minSalary = 24000;
const maxSalary = 800000;
const rate = 0.06;

// Function to calculate NSSF
function calculateNssf(gross) {
  //initialization of both employer and employee contribution
  let employeeContribution = 0;
  let employerContribution = 0;

  if (gross <= tier1) {
    // If salary is within Tier 1
    employeeContribution = gross * rate;
    employerContribution = gross * rate;
  } else if (gross > tier1 && gross <= tier2) {
    // If salary is within Tier 2
    employeeContribution = tier1 * rate + (gross - tier1) * rate;
    employerContribution = tier1 * rate + (gross - tier1) * rate;
  } else {
    // If salary is above Tier 2
    employeeContribution = tier1 * rate + (tier2 - tier1) * rate;
    employerContribution = tier1 * rate + (tier2 - tier1) * rate;
  }

  const totalNssf = employeeContribution + employerContribution;
  return totalNssf;
}

const nssf = calculateNssf(gross); // creating nssf variable
console.log(`NSSF: ${nssf}`);     //  printing the value of nssf

// Function to calculate NHIF
function calculateNhif(gross) {
  return gross * 0.0275;
}
const nhif = calculateNhif(gross);
console.log(`NHIF: ${nhif}`);

// Function to calculate PAYEE
function calculatePayee(gross) {
  if (gross >= 0 && gross <= minSalary) {
    return gross * 0.01;
  } else if (gross >= 24001 && gross <= 32333) {
    return gross * 0.25;
  } else if (gross >= 32334 && gross <= 500000) {
    return gross * 0.3;
  } else if (gross >= 500001 && gross <= maxSalary) {
    return gross * 0.325;
  } else {
    return gross * 0.35;
  }
}
const payee = calculatePayee(gross);
console.log(`PAYEE: ${payee}`);

// Function to calculate House Levy
function calculateHouseLevy(gross) {
  return gross * 0.015;
}
const houseLevy = calculateHouseLevy(gross);
console.log(`HOUSE LEVY: ${houseLevy}`);

// Calculation of Total Deductions
function totalDeduction(payee, houseLevy, nhif, nssf) {
  return payee + houseLevy + nhif + nssf;
}
const totalDeductions = totalDeduction(payee, houseLevy, nhif, nssf);
console.log(`TOTAL DEDUCTIONS: ${totalDeductions}`);

//Calculation of Net Pay
function netPay(gross, totalDeductions) {
  return gross - totalDeductions;
}
const net = netPay(gross, totalDeductions);
console.log(`NET SALARY: ${net}`);
