
// // 1) Find the Maximum of Three Numbers
//  let greatest;
// function greatestOfThreeNumbers(a, b, c){

// if(a >= b && a >= c){
//   greatest = a;
// } else if(b > a && b > c){
//   greatest = b;
// }else{
//   greatest = c;}
//   return greatest;
// }
// greatestOfThreeNumbers(9 , 8 ,8);
// console.log(greatest);

// // 2) Check if a Number is Positive, Negative, or Zero
// function checkNumber(num = 0){
//   if (num > 0){
//     console.log("Positive");
//   }else if(num < 0){
//     console.log("Negative");
//   }else{
//     console.log("Zero");
//   }
//   return num;
// }
// checkNumber(12);

// 3) Calculate Electricity Bill
// function calculateElectricityBill(units) {
//   let totalBill = 0;
//   if (units <= 100 && units == 100) {
//     totalBill = units * 5;
//     return totalBill;
//   } else if (units > 100 && units <= 200) {
//     totalBill = (100 * 5) + ((units - 100) * 7);
//     return totalBill;
//   } else if (units > 200 && units <= 300) {
//     totalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
//     return totalBill;
//   } else {
//     totalBill = 100 * 5 + 100 * 7 + 100 * 10 + ((units - 300) * 12);
//     return totalBill;
//   }

// }
// console.log(calculateElectricityBill(230));

// // 4) Check if a Character is a Vowel or Consonant
// function checkVowelOrConsonant(char = '') {
// let charToLowercase = char.toLowerCase()
//   if (charToLowercase === 'a' 
//     || charToLowercase === 'e' 
//     || charToLowercase === 'i' 
//     || charToLowercase === 'o' 
//     || charToLowercase === 'u') {
//     return "Vowel";
//   } else if (/[a-z]/.test(charToLowercase)) {
//     return "Constant";
//   }
//   return "Not a valid alphabet"

// }
// checkVowelOrConsonant();

//another way
// function checkVowel(char = '0'){
// if('aeiou'.includes(char.toLowerCase()) && char !== ''){
//   return "Vowel";
// }else if(/[a-z]/.test(char.toLowerCase())){
//   return "Consonant";
// }
// return "Not a valid alphabet";
// }
// checkVowel();

// 5) Check if a Year is a Leap Year
// function LeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } 
//   else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   }
//   return false;
// }
// console.log(LeapYear(2000));