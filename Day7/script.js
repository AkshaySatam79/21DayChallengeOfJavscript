// # 🏫 **Class Questions**

// ## **1. Find the Prime Factorization (Return as an Array)**

// - **Input:** `N = 84`
// - **Output:** `[2, 2, 3, 7]`

// function primeFactorization(num) {
//   const primeFactor = [];
//    while (num % 2 === 0) {
//       primeFactor.push(2);
//       num = num / 2;
//     }
//   let factor = 3;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactor.push(factor);
//       num = num / factor;
//     }
//     factor += 2;
//   }
//   if (num > 2) primeFactor.push(num);
//   return primeFactor;
// }
// console.log(primeFactorization(120));

// ---

// ## **2. Factorization in Exponent Form**

// - **Input:** `N = 360`
// - **Output:** `"2^3 × 3^2 × 5^1"`

// function primeFactorizationInExponentForm(num) {
//   const primeFactors = {};
//   while (num % 2 === 0) {
//     primeFactors[2] = (primeFactors[2] || 0) + 1;
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//       num = num / factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;
//   let output = "";
//   Object.keys(primeFactors).forEach((key, i) => {
//     output +=
//       `${key}^${primeFactors[key]}` +
//       (i !== Object.keys(primeFactors).length - 1 ? " x " : "");
//   });
//   return output;
// }

// console.log(primeFactorizationInExponentForm(360))


// ---

// ## **3. Distinct Prime Factor Count**

// - **Input:** `N = 100`
// - **Output:** `Distinct Prime Factors = 2`
//   (Because 100 → 2, 5)

// function primeFactorizationInExponentForm(num) {
//   const primeFactors = {};
//   while (num % 2 === 0) {
//     primeFactors[2] = (primeFactors[2] || 0) + 1;
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//       num = num / factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

//   return Object.keys(primeFactors).length;
// }

// console.log(primeFactorizationInExponentForm(30));

// ---

// ## **4. Check if a Number Is a Powerful Number**

// A number is **powerful** if every prime factor appears with an exponent ≥ 2.

// - **Input:** `N = 36`
// - **Output:** `Powerful Number`
//   (36 → 2² × 3² → all exponents ≥ 2)


// function primeFactorizationInExponentForm(num) {
//   const primeFactors = {};
//   while (num % 2 === 0) {
//     primeFactors[2] = (primeFactors[2] || 0) + 1;
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//       num = num / factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

//   return Math.min(...Object.values(primeFactors)) >= 2;
// }

// console.log(primeFactorizationInExponentForm(30));
