//1 
// the first condition if (a < b < c) and the ReferenceError with calling a function .  .
//2
// debugging vs  code .
//3
// the first condition we must to be if we want a(a) to be a smallest as the error is the >< symbol. 
// 4
function findSmallest(a, b, c){
    if (a < b < c){
      return c;
    }
     else if (a > c > b) {
       return a;
    } 
    else {
      return b;
    }
    }
   console.log(findSmallest(52,66, 2));