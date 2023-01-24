// EX 1 
// Basic 
function yesNo(value) {
    if (value === true) {
      return "Yes";
    } else if (value === false) {
      return "No";
    }
  }
  // ternary operator :
  function yesNo(value) {
    return value ? 'Yes' : 'No';
  }
///////////////////////////////////////////
// Simple Math 
// Ex2.1 - Sum of lowest numbers 
// function sumTwoSmallestNumbers(numbers) {  
//     var longestArr = [];
//   for(var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     if(numbers[i] < longestArr[0] || longestArr[0] == null) {
//       if(longestArr[0] < longestArr[1] || longestArr[1] == null) {
//         longestArr[1] = longestArr[0];
//       }
//       longestArr[0] = numbers[i];
//     } else if(numbers[i] < longestArr[1] || longestArr[1] == null) {
//       longestArr[1] = numbers[i];
//     }
    
//   }
//   return longestArr[0] + longestArr[1];
// }
//   console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
  ///////////////////////////////////////////////
//   Ex2.2 - One and Zero - Binary
// function binaryToDecimal(string) {
//     let decimal = +0;
//     let bits = +1;
//     for(let i = 0; i < string.length; i++) {
//         let currNum = +(string[string.length - i - 1]);
//         if(currNum === 1) {
//             decimal += bits;
//         }
//         bits *= 2;
//     }
//     console.log(decimal);
// }
// console.log(binaryToDecimal('101010'));
//////////////////////////////////////////
// Ex2.3 - Find the Next Perfect Square 
// function findNextSquare(sq){
//     return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
// }
// console.log(findNextSquare(121));
////////////////////////////////////////////
// Ex2.4 - Unique
// let arr = [1, 1, 2, 1, 1];
// const fundUniq = (arr) => {
//     arr.sort();
//     let temp = 0;
//     if((arr[0] === arr[1]) && (arr[arr.length - 1] !== arr[arr.length - 2])){
//         temp = arr[arr.length -1];
//     } else if((arr[0] !== arr[1]) && (arr[arr.length - 1] === arr[arr.length - 2])){
//         temp = arr[0];
//     }
//     console.log(temp);
//     return arr;
// }
// fundUniq(arr);
///////////////////////////////
//Ex2.5 - Summation
// function numberSum(N) {
//     var total = 0;
//       for(var i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }
//   console.log(numberSum(8));
//////////////////////////////////////
//Ex2.6 - Years and Centuries
// function centuryFromYear(year) {
//     var x = Math.floor(year/100) + 1;
//     return x; 
// }
// console.log(centuryFromYear(1601));
////////////////////////////////////
//Ex2.7 - Basic Math
// const SimpCalc =(op,N1,N2) =>{
//     let temp =0;
//     switch(op){
//         case "+":
//             temp = N1 + N2;
//             break;
//         case "-":
//             temp = N1 - N2;
//             break;
//         case "*":
//             temp = N1 * N2;
//             break;
//         case "/":
//             temp = N1 / N2;
//             break;
//         case "%":
//             temp = N1 % N2;
//             break;
//         default:
//             console.log('your choose a Wrong oprerator ');

//             }
//             return temp;
// }
// const N1 = 12 ;
// const N2 = 24 ;
// const op = '*';
// console.log(SimpCalc(op,N1,N2));
// const N1 = 12 ;
// const N2 = 24 ;
// const op = '-';
// console.log(SimpCalc(op,N1,N2));
// const N1 = 12 ;
// const N2 = 24 ;
// const op = '/';
// console.log(SimpCalc(op,N1,N2));
// const N1 = 12 ;
// const N2 = 24 ;
// const op = '+';
// console.log(SimpCalc(op,N1,N2));
///////////////////////////////////////
        // ***********************************//
        // Math In Story ex 3 i did  not this //
        //*********************************** //
/////// EX 4 //////////////////
// Ex 4.1 Febonacci
// const fibonacci = n => {
//     let a = 0, b = 1, c = n;
    
//     for(let i = 2; i <= n; i++) {
//       c = a + b;
//       a = b;
//       b = c;
//     }
    
//     return c;
//   };
//   console.log(fibonacci(10));
//////////////////////////
// Ex4.2 - Tribonacci 
// function tribonacci(x){  
// 	if(x === 0) return 0; 
// 	if(x === 1) return 1; 
// 	if(x === 2) return 1; 
// 	return tribonacci(x-1) + tribonacci(x-2) + tribonacci(x-3); 
// } 
// console.log(tribonacci(3));
/////////////////////////////////
///////////// EX 5 ////////////////
// 1. trimming string 
// let str = "Hello World!";
// const triming = (str) => {
//     let newStr = str.split('');
//     newStr.pop();
//     newStr.shift();
//     return newStr.join('');
// }
// console.log(triming(str));
/////////////////////////////////
// 2. String Repeat
// const song ="hello it is me ";
// console.log(`The song " hello by Adele " has been repeating :${song.repeat(5)}`);
// const song2 = "I hate you I love you  "
// console.log(`The song " I hate you I love you By Ganash " has been repeating :${song2.repeat(5)}`);
/////////////////////////////
// 3. To Camel Case
// function camelize(str) {
//     return str.split(' ')
//        .map(a => a.trim())
//        .map(a => a[0].toUpperCase() + a.substring(1))
//        .join("")
//  }
//  console.log(camelize("the stealth warrior"));
////////////////////////////////////////////
// 4. To Weird Case
// function toWeirdCase(str) {
//     return str.split(' ').map((v,i)=>v.split('').map((v,i)=>i%2===0?v.toUpperCase():v.toLowerCase()).join('')).join(' ')}
// console.log(toWeirdCase("Weird string case"));
//////////////////////// 
// 5. Abbreviate two words
// function Abbreviate(str){
//     return (
//         str.split(" ")
//         .map((part) => part[0].toUpperCase())
//         .join(".")
//     );  
// }
// console.log(Abbreviate("Sam Harris"));
// console.log(Abbreviate("mira rmaileh"));
// console.log(Abbreviate("johny deep"));
///////////////////////////////////
// 6. Mask 
// let str = "4556364607935616";
// const maskify =(str) =>{
//     let encrypt = str.split('');
//     for(let i = 0; i < str.length - 4; i++) {
//          encrypt[i] = encrypt[i].replace(encrypt[i], '*'); 
//     }
//     encrypt = encrypt.join('');
//     return encrypt;
// }
// console.log(maskify(str));
//////////////////////////
// 7. shortest words
function shortestWord(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    // Set the initial value of shortestWordLength to the length of the first word
    let shortestWordLength = words[0].length;
    // Iterate over the array of words
    for (let i = 1; i < words.length; i++) {
      // If the current word's length is less than the current value of shortestWordLength
      if (words[i].length < shortestWordLength) {
        // Update shortestWordLength to the current word's length
        shortestWordLength = words[i].length;
      }
    }
    // Return the final value of shortestWordLength
    return shortestWordLength;
  }
  //It will return 3, which is the length of the word "The".
  console.log(shortestWord("can you give me an informations about js examples"));
  ////////////////////////////////////////
  // 8. longest words 2 
  function longestWord(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    // Set the initial value of longestWord to the first word
    let longestWord = words[0];
    // Iterate over the array of words
    for (let i = 1; i < words.length; i++) {
      // If the current word's length is greater than the current value of longestWord
      if (words[i].length > longestWord.length) {
        // Update longestWord to the current word
        longestWord = words[i];
      }
    }
    // Return the final value of longestWord
    return longestWord;
  }
  console.log(longestWord("can you give me an informations about js examples"));


 
  



