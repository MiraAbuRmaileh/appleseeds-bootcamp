// EX 6.1 Mumbling 
// function mumbling(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       result += str[i].toUpperCase();
//       for (let j = 0; j < i; j++) {
//         result += str[i].toLowerCase();
//       }
//       if (i !== str.length - 1) {
//         result += "-";
//       }
//     }
//     return result;
//   }
//   console.log(mumbling("abcd"));
//   console.log(mumbling("hello"));
//   // another methods 
//   function mumbling2(s) {
//     return s.split("").map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join("-");
// }
// console.log(mumbling2("abcd"));
// console.log(mumbling2("hello"));
////////////////////////////////
//Ex 6.2  Counting Duplicate.
// function countDuplicates(str) {
//     let count = 0;
//     let charCount = {};
//     for (let i = 0; i < str.length; i++) {
//       if (charCount[str[i]]) {
//         charCount[str[i]]++;
//       } else {
//         charCount[str[i]] = 1;
//       }
//     }
//     for (let char in charCount) {
//       if (charCount[char] > 1) {
//         count += charCount[char] - 1;
//       }
//     }
//     return count;
//   }
//   console.log(countDuplicates("indivisibilities"));
//   console.log(countDuplicates("abcdefghijklmnopqrstuvwxyz"));
//////////////////////////////////////////
// EX 6.3 organize strings
// function sortString(str) {
//     return str.split('').sort().join('');
//   }
// console.log(sortString("Hello World!"));
// console.log(sortString("cbaedfghijklmnopqrstuvwxyz"));
/////////////////////////////////////
// Ex 6.4 isogram i did not do it 
//////////////////////////
// EX 7 
// filter () methods , for find a even number in the array .
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = filter(numbers, function (number) {
//   return number % 2 === 0;
// });
// console.log(evenNumbers); [2, 4, 6]
// let number = [1,2,3,4,5,6];
// let evenNumbers = number.filter(function(num){
//     return num % 2 === 0;
// });
// console.log(evenNumbers); // [2, 4, 6]
// forEach methods 
// let data = {a:1,b:2,c:3};
// forEach(data, function (key,value) {
//   console.log(key, value);
// });  
// map () 
let numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map( function (number) {
    return number * number;
  });
  console.log(squares); // [1, 4, 9, 16, 25, 36]
  ////////////////////////////////////////
  // EX 8 find the parameter of a Rectangle.
  function findPerimeter(width, height) {
    return 2 * (width + height);
  }
  console.log(findPerimeter(4, 5)); // 18
  function findArea(width, height) {
    return width * height;
  }
  console.log(findArea(4, 5)); // 20
    


    


    