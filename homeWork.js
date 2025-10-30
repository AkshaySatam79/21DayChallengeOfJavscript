// 1. **Print all numbers divisible by 3 and 5 up to N**

//    * Input: `30`
//    * Output: `15 30`
//    * ✨ *Reinforces conditional checks inside loops.*

//code
let num = 30;
for(let i = 1; i <= num; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(i + " is Divisible by 3 and 5");
  }
}


// 2. **Find the sum of all odd numbers up to N**

//    * Input: `10`
//    * Output: `25` (`1 + 3 + 5 + 7 + 9`)
//    * ✨ *Combines looping with conditional accumulation.*

let oddNum = 20;
let sum = 0;
for(let i =1; i <=oddNum; i++){
  if(i % 2 == 1){
    sum += i;
  }
}
console.log("sum of odd number is : " + sum);

// ---

// 3. **Print the cubes of numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 8 27 64 125`
//    * ✨ *Extends arithmetic pattern logic beyond squares.*
let n = 20;
let cube;
for(let i = 1; i <= n; i++){
cube = Math.pow(i, 3);
console.log("Cube of " + i + " is : " + cube);
}

// ---

// 4. **Print only the numbers that are both even and perfect squares**

//    * Input: `1 to 20`
//    * Output: `4 16`
//    * ✨ *Encourages combining two conditions within one loop.*
let number = 20;
let sqr;
for(let i = 1; i <= number; i++){
  sqr = Math.pow(i, 2);
  if(sqr % 2 === 0 && sqr <= number){
    console.log("Even Perfect square is : " + sqr);
  }
  
}