const numbers = [1, -5, 666, 2, 400, 11];
// 1 
console.log(numbers.sort((a,b) =>{return a-b;}));
// 2 
console.log(numbers.sort((a,b) =>{return b-a;}));