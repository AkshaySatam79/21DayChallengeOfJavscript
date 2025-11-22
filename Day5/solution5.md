// ## 🏫 **Class Questions**

// 1. **Print All Factors of a Number**

//    * **Input:** `N = 24`
//    * **Output:** `[1, 2, 3, 4, 6, 8, 12, 24]`


function factorCheck(num) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      let otherValues = num / i
      if(i !== otherValues){
        factors.splice(factors.length /2 + 1, 0, otherValues)
    }
  }
  }
  return factors;
}
console.log(factorCheck(100));


// 2. **Print All Multiples of a Number up to N**

//    * **Input:** `Number = 4, Limit = 30`
//    * **Output:** `[4, 8, 12, 16, 20, 24, 28]`

function multiples(number, limit) {
  let multi = [];
  for (let i = number; i <= limit; i+= number) {
    multi.push(i);
  }
  return multi;
}
console.log(multiples(5, 30));
// ---

// 3. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `HCF = 6`

function highestCommonFactor(num1, num2) {
  let hcf = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}
console.log(highestCommonFactor(12, 18));

function findHCF(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   console.log({loopCount});
   return divisor
    
}

console.log(findHCF(20, 36));



function findHCF(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   console.log({loopCount});
   return divisor
    
}

console.log(findHCF(20, 36));
// ---

// 4. **Find the LCM (Least Common Multiple) of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `LCM = 36`
