const numbers = [7, 10, 15, 8, 13, 18, 6];
const maxValue = numbers.reduce((acc , value)=>{
   return Math.max(acc, value);  
});
console.log(maxValue);
/////
let sumEven = numbers.filter(i => i%2 ===0).reduce((a,v) => a += v);
console.log(sumEven);
/////
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(average);
