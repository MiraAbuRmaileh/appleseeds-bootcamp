//1
// var sum // return sum?
//2 
// in my eyse i did not see the devide by the length of array .
//3
// we must equal the var of sum to 0 and
// the return sum to devide by the length of array
//4
function calcAverage(arr){
   var sum =0 ;
    for ( var i = 0 ; i < arr.length; i ++ ){
        sum += arr[i] ;
        } 
         return sum / arr.length ;
    } 
    console.log(calcAverage([ 85 , 90 , 92 ]));