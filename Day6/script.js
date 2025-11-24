//TODO ## 🏫 **Class Questions**

//! 1. **Check if a Number is Prime**

//?    - **Input:** `7`
// ?   - **Output:** `Prime Number`

//*output :
// function isPrime(num) {
//   let factorsCount = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factorsCount++;
//       const otherPair = num / i;
//       if (i !== otherPair) factorsCount++;
//     }
//   }
//   return factorsCount === 2;
// }
// console.log(isPrime(49));

//TODO 2. **Check if two Numbers are Co-Prime**

//?    - **Input:** `(7, 8)`
//?    - **Output:** `Co-Prime`

//! Solution :
// function isCoPrime(a, b) {
//   let divisor = a < b ? a : b;
//   let dividend = a > b ? a : b;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor === 1;
// }
// console.log(isCoPrime(7, 8));
// ---

//TODO 3. **Print Fibonacci Series up to N Terms**

//?    - **Input:** `N = 10`
// ?   - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

//! Solution :
// function fibonacci(num) {
//   const series = [0, 1];
//   let sum = 0 ;
//   for (let i = 2; i < BigInt(num); i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series;
// }

// console.log(fibonacci(100));
// ---

//TODO 4. **Find the Nth Fibonacci Number**

//?    - **Input:** `N = 8`
// ?   - **Output:** `13`

//! Solution :
// function nthFibonacci(num) {
//   const series = [0n, 1n];
//   for (let i = 2n; i < BigInt(num); i++) {
//     series.push(series[i - 1n] + series[i - 2n]);
//   }
//   return series[series.length - 1n];
// }

// console.log(nthFibonacci(8n));
// ---

//TODO 5. **Check if a Number Belongs to the Fibonacci Series**

//?    - **Input:** `21`
//?    - **Output:** `Yes`

//!  Solution
// function nthFibonacci(num) {
//   num = BigInt(num);
//   const series = [0n, 1n];

//   for (let i = 2n; true; i++) {
//     const nextNumber = series[i - 1n] + series[i - 2n];
//     if(nextNumber === num || nextNumber === 0n) return true;
//     if(nextNumber > num) break;
//     series.push(nextNumber);
//   }
//   return false;
// }

// console.log(nthFibonacci(21n));
// ---

//! Optimize Solution  O(1)
// function BelongsToFibonacci(num){
//   return (
//     Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
//     Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
//   )
// }
// console.log(BelongsToFibonacci(22))

//TODO ## 🏠 **Homework Questions**

//? 1. ****

//!    - **Input:** `N = 20`
//!    - **Output:** `2, 3, 5, 7, 11, 13, 17, 19`

//todo output:

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrimesUpToN(n) {
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// printPrimesUpToN(20);

// ---

// 2. **Sum of All Prime Numbers till N**

//    - **Input:** `N = 10`
//    - **Output:** `Sum = 17`

// function isPrime(num){
//   if( num <= 1) return false;

//   for(let i = 2;i <= Math.sqrt(num); i++){
//     if(num % i === 0)
//       return false;
//   }
//   return true;
// }

// function sumOfAllPrimeNumber(n){
//   let sum= 0;
//  for(let i = 2; i <= n; i++){
//   if(isPrime(i)){
//     sum += i;
//   }
// }
// return sum;
// }

// console.log(sumOfAllPrimeNumber(10))
// ---

// 3. **Check if Two Numbers are Twin Primes**

//    - **Input:** `(3, 5)`
//    - **Output:** `Twin Primes`

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function areTwinPrimes(a, b) {
//   return isPrime(a) && isPrime(b) && Math.abs(a - b) === 2;
// };
// console.log(areTwinPrimes(3, 5) ? "Twin Primes" : "Not Twin Primes");

// ---

// 4. **Print All Fibonacci Numbers up to a Given Limit**

//    - **Input:** `Limit = 100`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`
// let limit = 100;
// let a = 0;
// let b = 1;

// for (let i = 0; a <= limit; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// console.log(nthFibonacci(9));
// ---

// 5. **Generate Fibonacci Numbers Within a Range**

//    - **Input:** `Start = 10, End = 100`
//    - **Output:** `13, 21, 34, 55, 89`

// function fibonacciInRange(start, end) {
//   const result = [];
//   let a = 0, b = 1;

//   while (b <= end) {
//     if (b >= start) result.push(b);
//     [a, b] = [b, a + b];
//   }

//   return result;
// }

// console.log(fibonacciInRange(10, 100));
// → [13, 21, 34, 55, 89]

// ---

// 6. **Find the Sum of Even Fibonacci Numbers up to N Terms**

//    - **Input:** `N = 10`
//    - **Output:** `Sum = 44` (`2 + 8 + 34`)

// let a = 0;
// let b = 1;
// let sum = 0;

// function upToNthFibonacii(num) {
//   for (let i = a; i <= num; i++) {
//     if (b % 2 === 0) {
//       sum += b;
//     }
//     [a, b] = [b, a + b];
//   }
//   return sum;
// }

// console.log(upToNthFibonacii(10));
// ---

// 7. **Check if the Sum of Two Consecutive Fibonacci Numbers is Prime**

//    - **Input:** `(5 + 8)`
//    - **Output:** `13 is Prime`
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// function isConsecutiveFibonacii(a, b) {
//   const sum = a + b;
//   if (isPrime(sum)) {
//     console.log(`${sum} is Prime`);
//   } else {
//     console.log(`${sum} is not Prime`);
//   }
//   return sum;
// }
// console.log(isConsecutiveFibonacii(5, 8));
// ---

// 8. **Print First N Prime Fibonacci Numbers**

//    - **Input:** `N = 5`
//    - **Output:** `2, 3, 5, 13, 89`

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function firstNPrimeFibonacci(N) {
  const result = [];
  let a = 0, b = 1;

  while (result.length < N) {
    if (isPrime(b)) result.push(b);
    [a, b] = [b, a + b];
  }

  return result;
}

console.log(firstNPrimeFibonacci(5)); 

