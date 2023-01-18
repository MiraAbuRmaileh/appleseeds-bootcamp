// 1 
// counter +1 ;
// 2 
// debugging ion vs code . 
// 3 
// we must counter ++ ; not counter +1 ;
// 4
function countOccurrences (str, char){
let counter =0;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str.charAt ( i ) === char ){
    counter ++ ;
    }
    } 
    return counter ;
    }
    console.log(countOccurrences( "ini mini miny moe" , "n" ));