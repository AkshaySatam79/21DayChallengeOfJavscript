// 1. **Find the Sum of Digits**

//    * Input: `N = 987`
//    * Output: `24`
//    * ✨ *Builds understanding of digit extraction and accumulation.*

// function findSumOfDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(findSumOfDigits(987));

// 2. **Find the Average of Digits**

//    * Input: `N = 4567`
//    * Output: `Average = 5.5`
//    * ✨ *Combines digit sum and count for average computation.*

// let num = 987;
// let count = num.toString().length;
// console.log(count);
// let sum = 0;
// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum / count);

// 3. **Remove the Decimal Point Mathematically**

//    * Input: `N = 12.34`
//    * Output: `1234`
//    * ✨ *Do not use string operations.*

// let num = 1642.34;
// let digitRemove = Math.round(num * 100);
// console.log(digitRemove);

// 3. **Find the Largest and Smallest Digit in a Number**

//    * Input: `N = 9483`
//    * Output: `Largest = 9, Smallest = 3`
//    * ✨ *Enhances comparison logic using loops.*

// let num = 9483;
// let largest = 0;
// let smallest = 9;
// while(num > 0){
//   let digit = num % 10;
//   if(digit > largest){
//     largest = digit;
//   }
//   if(digit < smallest){
//     smallest = digit;
//   }
//   num  =Math.floor(num / 10)
// }
// console.log("Largest: ",largest);
// console.log("Smalest: ",smallest);

// 4. **Check if a Number is a Strong Number**

//    * Input: `N = 145`
//    * Output: `Strong Number`
//    * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*

// function strongNumber(num) {
//   let temp = num;
//   let sum = 0;
//   while (temp > 0) {
//     let digit = temp % 10;
//     let fact = 1;
//     for (let i = 1; i <= digit; i++) {
//       fact *= i;
//     }
//     sum += fact;
//     temp = Math.floor(temp / 10);
//   }
//   if (sum === num) {
//     console.log(num + ": is a Strong Number!");
//   } else {
//     console.log(num + ": is Not a Strong Number!");
//   }
// }
// console.log(strongNumber(145));

// 5. **Check if a Number is an Automorphic Number**

//    * Input: `N = 25`
//    * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
//    * ✨ *Practices modulus-based pattern matching.*
// let num = 76;
// let squre = Math.pow(num, 2);
// let lastTowNum = squre % 100;

// if(num === lastTowNum){
//   console.log("Automorphic Number");
// }else{
//     console.log("Not a Automorphic Number");
// }

// 6. **Find the Frequency of Each Digit**

//    * Input: `N = 112233`
//    * Output: `1 → 2, 2 → 2, 3 → 2`
//    * ✨ *Combines loops and conditionals for counting repetitions.*

// let num = 112267777;
// let temp = num.toString();
// let freq = {};
// for (let i = 1; i <= temp.length; i++) {
//   let digit = temp[i];

//   if (freq[digit]) {
//     freq[digit]++;
//   } else {
//     freq[digit] = 1;
//   }
// }

// for(let key in freq){
//   console.log(`${key} -> ${freq[key]}`);
// }


// 7. **Check if a Number is a Harshad Number**

//    * Input: `N = 18`
//    * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
//    * ✨ *Applies divisibility and digit-sum logic together.*

// let num = 19;
// let temp = num.toString();
// let sum = 0
// for(let i =0; i <= temp.length;i++){
//  sum += num % 10; 
// }
// let harshadNum = Math.floor(num / sum); 
// if(harshadNum === 0){
//   console.log("THIS IS HARSHAD NUMBER")
// }else{
//     console.log("THIS IS NOT A HARSHAD NUMBER")

// }

// function isHarshad(num) {
//   let sum = 0;
//   let temp = num;

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }
//   return num % sum === 0;
// }

// let N = 18;
// if (isHarshad(N)) {
//   console.log(`${N} is a Harshad Number`);
// } else {
//   console.log(`${N} is NOT a Harshad Number`);
// }
