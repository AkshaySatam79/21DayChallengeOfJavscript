// # 🏠 **Homework Questions**

// ## **1. Find the Product of All Distinct Prime Factors**

// - **Input:** `N = 150`
// - **Output:** `Product = 2 × 3 × 5 = 30`

// function getDistinctPrimeFactors(n) {
//   const factors = [];
//   let num = n;

//   // Handle factor 2
//   if (num % 2 === 0) {
//     factors.push(2);
//     while (num % 2 === 0) {
//       num = num / 2;
//     }
//   }

//   // Handle odd factors from 3 upwards
//   for (let i = 3; i * i <= num; i += 2) {
//     if (num % i === 0) {
//       factors.push(i);
//       while (num % i === 0) {
//         num = num / i;
//       }
//     }
//   }

//   // If something > 1 remains, it's a prime factor
//   if (num > 1) {
//     factors.push(num);
//   }

//   return factors;
// }

// function productOfDistinctPrimeFactors(n) {
//   const primes = getDistinctPrimeFactors(n);
//   let product = 1;

//   primes.forEach((p) => {
//     product *= p;
//   });

//   return product;
// }

// // Test
// const N = 150;
// const result = productOfDistinctPrimeFactors(N);
// console.log(result);

// ---

// ## **2. Check if a Number Is a Square-Free Number**

// A number is **square-free** if none of its prime factors repeat.

// - **Input:** `N = 30`
// - **Output:** `Square-Free Number`
//   (2 × 3 × 5 → no repeats)

// function squreFreeOrNot(num) {
//   let factor = [];
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factor.push(i);
//     }
//   }
//   let product = 1;
//   factor.forEach((el) => {
//     product *= el;
//   });

//   if (product === num) {
//     console.log("This is squre free number");
//   } else {
//     console.log("This is not squre free number");
//   }
//   return factor;
// }
// console.log(squreFreeOrNot(30));
// ## **3. Check if a Number Is a Smith Number**

// A composite number whose **sum of digits = sum of digits of prime factors**.

// - **Input:** `N = 666`
// - **Output:** `Smith Number`

// ---

// ## **4. Check if a Number Is an Ugly Number**

// Ugly numbers have only **2, 3, 5** as prime factors.

// - **Input:** `N = 18`
// - **Output:** `Not Ugly`
//   (Because 18 → 2 × 3 × 3 → allowed)
// - **Input:** `N = 14`
// - **Output:** `Not Ugly`
//   (Contains 7)

// function primeFactorization(num) {
//   let original = num;
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

//   primeFactor.forEach((el) =>{
//     if(el % 2 === 0){
//       console.log(original + "  Not is ugly")
//     }
//   })
//   return primeFactor;
// }
// console.log(primeFactorization(14));

// ---

// ## **5. Check if a Number Is a Kaprekar Number**

// Square the number → split → sum should give the original number.

// - **Input:** `N = 45`
// - **Output:** `Kaprekar Number`
//   (45² = 2025 → 20 + 25 = 45)

// function isKaprekar(n) {
//     if (n < 1) return false;

//     let sq = n * n;

//     let digits = 0;
//     let temp = sq;
//     while (temp > 0) {
//         temp = Math.floor(temp / 10);
//         digits++;
//     }

//     for (let i = 1; i <= digits; i++) {
//         let divisor = 1;

//         for (let j = 0; j < i; j++) {
//             divisor *= 10;
//         }

//         let left = Math.floor(sq / divisor);
//         let right = sq % divisor;

//         if (left + right === n) {
//             return true;
//         }
//     }

//     return false;
// }
// console.log(isKaprekar(45));

// ---

// ## **6. Check if a Number Is a Happy Number**

// Repeatedly replace the number with the sum of squares of its digits.
// If it becomes **1**, it is Happy.

// - **Input:** `N = 19`
// - **Output:** `Happy Number`

// function isHappy(n) {
//   const seen = {};

//   while (n !== 1) {
//     if (seen[n]) return false;
//     seen[n] = true;

//     let sum = 0;
//     let temp = n;

//     while (temp > 0) {
//       const digit = temp % 10;
//       sum += digit * digit;
//       temp = Math.floor(temp / 10);
//     }

//     n = sum;
//   }
//   return true;
// }

// // Example
// const N = 19;
// console.log(isHappy(N) ? "Happy Number" : "Not a Happy Number");

// ---

// ## **7. Number Base Conversion (Any Base to Any Base)**

// - **Input:** `Number = "101101", From Base = 2, To Base = 10`
// - **Output:** `45`
// Convert any-base number (as string) to decimal manually
// function toDecimal(numStr, fromBase) {
//     let value = 0;
//     let power = 1;

//     // Process digits from right to left
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         let digit = numStr[i].charCodeAt(0) - 48; // '0'→0, '1'→1

//         value += digit * power;
//         power *= fromBase;
//     }

//     return value;
// }

// // Convert decimal to any base manually
// function fromDecimal(num, toBase) {
//     if (num === 0) return "0";

//     let result = "";

//     while (num > 0) {
//         const remainder = num % toBase;
//         result = String.fromCharCode(remainder + 48) + result;
//         num = Math.floor(num / toBase);
//     }

//     return result;
// }

// // Convert any base → any base
// function convertBase(numberStr, fromBase, toBase) {
//     const decimal = toDecimal(numberStr, fromBase);
//     return fromDecimal(decimal, toBase);
// }

// // Example
// console.log(convertBase("101101", 2, 10)); // 45


// ---

// ## **8. Swap Variable without using third variable**

// - **Input:** `a = 5, b = 6`
// - **Output:** `a = 6, b = 5`

// let a = 6;
// let b = 10;
// console.log(`a = ${a} , b = ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`a = ${a} , b = ${b}`);
