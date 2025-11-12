// 1. **Split Number into Digits**
//    * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`
//    * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*
// function splitIntoNumber(num){
//   const digits = [];
//   while(num > 0){
//   digits.unshift(num % 10);
//   num = Math.floor(num / 10);
//   }
//   return digits;
// }
// console.log(splitIntoNumber(1234456));
// }
// console.log(arr)
// 2. **Remove the Decimal Point Mathematically**
//    * Input: `N = 12.34`
//    * Output: `1234`
//    * ✨ *Do not use string operations.*
// output:
// let n = 12.34;
// while(n % 1 !== 0){
//   n = n * 10;
// }
// console.log(n)
// 3. **Separate Whole and Fractional Parts of a Number**
//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`
//    * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` method.*
// output:
// let num = 12.34;
// let fractional =  Number((num % 1).toFixed(10));
// let whole = Number((num - fractional).toFixed(10));
// console.log(" whole: " + whole +" " + "Fractional: " + fractional);
// function number(num) {
//   while (!Number.isInteger(num)) {
//     num = num * 10;
//   }
//   return num;
// }
// console.log(number(45.87));                 
// // Reverse a Number
// function splitIntoNumber(num){
//   const digits = [];
//   while(num > 0){
//   digits.push(num % 10) ;
//   num = Math.floor(num / 10);
//   }
//   let reverseNumber = 0;
//   for(let i = 0; i < digits.length; i++){
//     reverseNumber += digits[i] * 10 ** is;
//   }
//   return reverseNumber;
// }
// console.log(splitIntoNumber(1234));
// check if number is palindrome
// function palidromNumber(num){
//   const originalNumber = num;
//   const digits = [];
//   while(num > 0){
//   digits.push(num % 10) ;
//   num = Math.floor(num / 10);
//   }
//   let reverseNumber = 0;
//   for(let i = 0; i < digits.length; i++){
//     reverseNumber += digits[i] * 10 ** i;
//   }
//   return reverseNumber === originalNumber;
// }
// 
// function isArmstrong(num){
//   const original = num;
//   const digits = [];
//   while(num > 0){
//   digits.unshift(num % 10);
//   num = Math.floor(num / 10);
//   }
//  let powersDigitsSum =0;
//  for(let i = 0; i < digits.length; i++){
//     powersDigitsSum += digits[i] ** digits.length;
//  }
// return powersDigitsSum === original;
// }
// isArmstrong()
// 7. **Check if a Number is a Harshad Number**
//    * Input: `N = 18`
//    * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
//    * ✨ *Applies divisibility and digit-sum logic together.*
let num = 18;
