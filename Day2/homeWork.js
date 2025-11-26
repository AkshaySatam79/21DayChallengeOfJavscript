// 🏠 Homework / Practice Challenge
// 1) Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// Input: A
// Output: Uppercase Letter
// ✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
// 🔍 Concepts: ASCII range checks, compound && and || operators.

function checkTheCase(char = '') {
  let upper = char.toUpperCase();
  let lower = char.toLowerCase();
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return "Upper Letter";
  } else if (/[a-z]/.test(lower)) {
    return "Lower Letter";
  } else if (/[0-9]/.test(char)) {
    return "number";
  } else if (char === '') {
    return "Invalid Input";
  } else {
    return "Special character";
  }
}
console.log(checkTheCase('/'));

//2) Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5



// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene

// 🔺 Check Triangle Type using Sides
let a = 3, b = 4, c = 5;  // you can change these values

// Step 1: Sort sides to identify the largest (for Pythagoras check)
let sides = [a, b, c].sort((x, y) => x - y);
a = sides[0];
b = sides[1];
c = sides[2];

// Step 2: Check type
if (a + b <= c) {
  console.log("Not a valid triangle");
}
else if (a === b && b === c) {
  console.log("Equilateral Triangle");
}
else if (a === b || b === c || a === c) {
  console.log("Isosceles Triangle");
}
else if (Math.abs(a * a + b * b - c * c) < 1e-10) {
  // Small tolerance to handle floating point
  console.log("Right-Angled Triangle");
}
else {
  console.log("Scalene Triangle");
}


// 3) Calculate Income Tax Based on Slabs
// Input: Income = ₹7,50,000

// Output: Tax = ₹62,500

// ✨ Applies progressive slab logic similar to electricity bill but with financial context.

// Example Logic (example slabs):

// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%
// 🔍 Requires cumulative calculation using nested if–else or multiple slab loops.
function calculateTax(tax) {
  let taxes;
  if (tax == 250000) {
    return "No Tax";
  } else if (tax < 250001 && tax >= 500000) {
     taxes +=(5 / 100) * (tax - 250000);
     return "This the Tax you need to pay:" + taxes;
  } else if (tax < 500001 && tax >= 1000000) {
    taxes += (5 / 100) * 250000 + (20 / 100) * (tax - 500000);
    return "This the Tax you need to pay:" + taxes;
  } else if (tax > 1000000) {
    taxes +=(5 / 100) * 250000 + (20 / 100) * tax +(30 / 100) * (tax - 1000000);
     return "This the Tax you need to pay:" + taxes;
  }
}
console.log(calculateTax(450000));