// let digit = [2, 4, 6, 5];
// let a = digit[0] = 5000;
// let b = digit[1] = 600;
// let c =digit[2] = 40;
// let d = digit[3] = 2;

// digit = a + b + c + d;
// console.log(digit);

// let num = 2 * 1 + 6 * 100 + 4 * 10 + 5 * 1000;
// console.log(num);

// let num2 = 7 * 1 + 3* 10 +2 *100;
// console.log(num2);



// let digits = [5, 6, 8, 7];
// function digitsToNumber(digit) {

//   let a = digits[0] * 1;
//   let b = digits[1] * 10;
//   let c = digits[2] * 100;
//   let d = digits[3] * 1000;
//   let digit2 = a + b + c + d;

//   return digit2;
// }

// console.log(digitsToNumber(digits));

let digits = [5, 6, 8, 7];
  let num = 0;
function digitsToNumber(digit){

digits.forEach((digit, index) => {

  num += digit * Math.pow(10, index);
  
});                                                       
return num;
};
console.log(digitsToNumber(num));