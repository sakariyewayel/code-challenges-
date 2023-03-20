// Constants for tax rates and deductions
const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200];
const NHIF_MAX = 12000;
const NSSF_RATE_EMPLOYEE = 0.06;
const NSSF_RATE_EMPLOYER = 0.06;
const NSSF_CEILING = 6000;
const TAX_THRESHOLDS = [0, 12298, 23885, 35472, 47059];
const TAX_RATES = [0.1, 0.15, 0.2, 0.25];
const TAX_FIXED_AMOUNTS = [0, 1229.8, 2809.3, 4893.9, 7638.3];

function calculateSalary() {
  // Get input values for employee's basic salary and benefits
  const basicSalary = Number(document.getElementById("basic-salary").value);
  const benefits = Number(document.getElementById("benefits").value);

  // Calculate NHIF deduction
  let nhifDeduction = 0;
  if (basicSalary + benefits < NHIF_RATES[0]) {
    nhifDeduction = NHIF_RATES[0];
  } else if (basicSalary + benefits >= NHIF_RATES[NHIF_RATES.length - 1]) {
    nhifDeduction = NHIF_MAX;
  } else {
    for (let i = 0; i < NHIF_RATES.length; i++) {
      if (basicSalary + benefits < NHIF_RATES[i]) {
        nhifDeduction = NHIF_RATES[i - 1];
        break;
      }
    }
  }

  // Calculate NSSF deduction
  let nssfDeduction = Math.min(basicSalary * NSSF_RATE_EMPLOYEE, NSSF_CEILING);

  // Calculate taxable income
  let taxableIncome = basicSalary + benefits - nhifDeduction - nssfDeduction;

  // Calculate Payee Tax
  let payeeTax = 0;
  for (let i = 0; i < TAX_THRESHOLDS.length; i++) {
    if (taxableIncome > TAX_THRESHOLDS[i]) {
      payeeTax += (Math.min(taxableIncome, TAX_THRESHOLDS[i + 1]) - TAX_THRESHOLDS[i]) * TAX_RATES[i];
      payeeTax += TAX_FIXED_AMOUNTS[i];
    } else {
      break;
    }
  }

  // Calculate net salary
  let netSalary = basicSalary + benefits - nhifDeduction - nssfDeduction - payeeTax;

  // Display results
  document.getElementById("result").innerHTML = `
    <p>Basic Salary: ${basicSalary}</p>
    <p>Benefits: ${benefits}</p>
    <p>NHIF Deduction: ${nhifDeduction}</p>
    <p>NSSF Deduction: ${nssfDeduction}</p>
    <p>Taxable Income: ${taxableIncome}</p>
    <p>Payee Tax: ${payeeTax}</p>
    <p>Net Salary: ${netSalary}</p>
  `;
}
