// 3. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `HCF = 6`

// function highestCommonFactor(num1, num2) {
//   let hcf = 0;
//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       hcf = i;
//     }
//   }
//   return hcf;
// }
// console.log(highestCommonFactor(12, 18));

// function hcfFind(a , b){
// let max = Math.max(a < b);
// let ans ;
// let remider;
// if(max === true){
//   remider = b % a;
//   ans = b % remider === 0;
// }else{
//    remider = a % b;
//   ans = a % remider === 0;
// }

// return ans
// }
// console.log(hcfFind(12, 16))

// ---

// 4. **Find the LCM (Least Common Multiple) of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `LCM = 36`

function findLCM(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   return a * b / divisor
}
console.log(findLCM(12, 16));

