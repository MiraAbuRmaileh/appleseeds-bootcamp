// var result = 'x ';
// for (var i = 0; i < 11; i++) {

//     for (var j = 0; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n'
// }

// console.log(result);
let table = document.getElementById("table");

for (let i = 1; i <= 10; i++) {
  let row = table.insertRow();
  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();
    cell.innerHTML = i * j;
  }
}
