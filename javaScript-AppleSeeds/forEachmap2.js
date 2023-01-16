// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const arr = [1,2,3];
function doubleValue (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleValue(arr));
/////////////////////////////////////////////
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const numbers = [7, 10, 15, 8, 13, 18, 6];
function onlyEvenValues(numbers){
    const evens = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            evens.push(num);
          }
        });
   return evens;
}
console.log(onlyEvenValues(numbers));
///////////////////////////////////////////////
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
const strings=["Mira" ,"Mayar","Nancy","Muhammad","Mike","Sara"];
var newString = [];
function showFirstAndLast(strings){
    strings.forEach((element)=>{
        if(typeof(element)==="string")
          newString.push(element);

    });
    console.log(newString);
    return[newString[0],newString[newString.length-1]];
}
console.log(showFirstAndLast(strings));
////////////////////////////////////////////////
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
// const words=["Mira" ,"Mayar","Nancy","Muhammad","Mike","Sara"];

const vowels = ["a", "e", "i", "o", "u" ,"A","E","I","O","U"]

function countVowelsIterative(text) {
  let counter = 0

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }

  console.log(`The text contains ${counter} vowel(s)`)

  return counter
}
console.log(countVowelsIterative("Mira Mayar Nancy Muhammad Mike Sara"));
//////////////////////////////////////////////////
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalize(str){
  let capitalize =str.toUpperCase()
      return capitalize;   
}
console.log(capitalize("mira"));
////////////////////////////////////////
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
function shiftLetters (string){
    let a = string;
    let b = [];
    let c = "";
    let d = [];
    let e = [];
    for (let i = 0; i < string.length; i++) {
      b.push(string[i]);
    }
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < b.length; k++) {
        c += b[k];
      }
      e.push(c);
      d = b.shift();
      b.push(d);
      c = ""
    }
    return e;
  }
 console.log(shiftLetters("abcd"));
 console.log(shiftLetters("hello world"));
 
///////////////////////////// 
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(str){
    let words = str.split(' ');
    words.forEach((word, i) => {
        if (i % 2 === 0) {
            words[i] = word.toUpperCase();
        } else {
            words[i] = word.toLowerCase();
        }
    });
    return words.join(' ');
}
console.log(swapCase("hello world"));