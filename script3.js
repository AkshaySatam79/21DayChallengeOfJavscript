// 1. **Print Right-Angled Star Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```
//    * ✨ *Teaches nested loops and increasing sequence printing.*
// let row = 5;
// for(let i =1; i <= row; i++){
//     let str = '';
//     for(let j = 1; j <= i; j++){
//         str = str + "*";
//     }
//     console.log(str);
// }

// 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

// const row = 5;
// for(let i = row; i >= 1; i--){
//     let str = '';
//     for(let j = 1; j <= i; j++){
//         str = str + "*";
//     }
// console.log(str)
// }


// 3. **Print Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Teaches alignment using spaces and nested loops.*

// const row = 5;
// for(let i = 1; i<= 2 * row - 1; i+= 2){
//     let str = '';
//     let currentRow = (i + 1) / 2;
//         for(let j= 1; j <= row + currentRow - 1 ; j++){
//             if( j <= row - currentRow){
//                 str += '.'
//             }else{
//              str += "*";
//             }
//         }
//     console.log(str)
// }



// 4. **Print Inverted Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//      ```
//    * ✨ *Teaches reverse space-star pattern alignment.*
// const row = 5;
// for(let i = 2 * row -1; i>= 1; i -= 2){
//     let str = '';
//     let currentRow = (i + 1) / 2;
//         for(let j= 1; j <= row + currentRow - 1 ; j++){
//             if( j <= row - currentRow){
//                 str += '.'
//             }else{
//              str += "*";
//             }
//         }
//     console.log(str)
// }

// 5. **Print Hollow Square Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      *   *
//      *   *
//      *   *
//      *****
//      ```
//    * ✨ *Practices conditional printing within nested loops.*

// const row = 5;
// for (let i = 1; i <= row; i++) {
//     let str = ''
//     for (let j = 1; j <= row; j++) {
//         if(i === 1 || i == row || j === 1 || j === row){
//         str = str + '*'
//         }else {
//             str = ''
//         }
//     }
//     console.log(str)
//     document.writeln(str)
// }


// 6. **Print Hollow Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:
//      ```
//          *
//         * *
//        *   *
//       *     *
//      *********
//      ```
//    * ✨ *Combines conditionals and symmetrical logic in loops.*


// const row = 5;
// for (let i = 1; i <= 2 * row - 1; i += 2) { 
//     let str = '';
//     let currentRow = (i + 1) / 2;
//     for (let j = 1; j <= row + currentRow - 1; j++) {
//         if (j <= row - currentRow || j > row - currentRow + 1 && j < row + currentRow - 1 && i !== 2 * row - 1) {
//             str += ' '
//         } else {
//             str += "*";
//         }
//     }
//     console.log(str)
// }

// 7. **Print Alternating Binary Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      1
//      0 1
//      1 0 1
//      0 1 0 1
//      1 0 1 0 1
//      ```
//    * ✨ *Combines parity logic with nested loops.* 


const row = 5;
for (let i = 1; i <= row; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        if(j === (i - 1) || j === (i - 3)){
            str += ' 0';
        }else{
        str += ' 1'
    }
}
    console.log(str)
}