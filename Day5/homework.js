//? 1. **Count the Total Number of Factors of a Number**

//TODO:    * **Input:** `N = 24`
//TODO:    * **Output:** `8 Factors`

//! OUTPUT
//  function numberOfFactors(num) {
//  let arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
//   return arr.length;
// }
// console.log("Total Factors Of Number: " + numberOfFactors(12));

//! This is important (red)
//* Highlighted comment (green)
//? Question comment (blue)
//TODO: Something to do (orange)
// Normal comment

// ---

//? 2. **Sum of All Factors of a Number**

//TODO:    * **Input:** `N = 12`
// TODO:   * **Output:** `Sum = 28`

// ---
//! OUTPUT
//  function numberOfFactors(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log("Sum of Factors: " + numberOfFactors(28));


//? 3. **Find the Greatest Factor of a Number (Other Than Itself)**

//TODO    * **Input:** `N = 36`
//TODO   * **Output:** `18`
// //!OUTPUT

//  function numberOfFactors(num) {
//  let big;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       big = Math.max(i)
//     }
//   }

//   return big;
// }
// console.log("Total Factors Of Number: " + numberOfFactors(36));
// ---

//todo 4. **Check if a Number is a Perfect Number**

//    *Input:** `N = 28`
//    * **Output:** `Perfect Number`
//    * If sum of all proper divisors = number → Perfect Number.

// function isPerfect(num) {
//   let original = num;
// let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if(num % i === 0){
//       sum += i;
//     }
//   }
//   return sum === num ? "isperfect" : "not perfect";
// }
// console.log(isPerfect(8128));
// ---

//todo 5. **Find the HCF and LCM of Three Numbers**

//    * **Input:** `8, 12, 16`
//    * **Output:** `HCF = 4, LCM = 48

// function gcd(a, b) {
//   return b === 0 ? a : gcd(b, a % b);
// }

// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// function gcdOfThree(a, b, c) {
//   return gcd(gcd(a, b), c);
// }

// function lcmOfThree(a, b, c) {
//   return lcm(lcm(a, b), c);
// }

// console.log(gcdOfThree(8, 12, 16)); // 4
// console.log(lcmOfThree(8, 12, 16)); // 48
