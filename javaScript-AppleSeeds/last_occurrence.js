const string = "The more you know, the more you know that you don't know";
// with last index of method
let result = string.lastIndexOf("you");
console.log(result);
// without !
const search = "you";
console.log(`The index of the first "${search}" from the end is ${string.lastIndexOf(search)}`);