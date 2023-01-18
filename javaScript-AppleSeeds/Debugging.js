  //1. First, find the line that contains the problem. Write it down.
  // line 2 
  // 2. Which debug method did you use to find the bug?
  // debugging vs code .
  // 3. Explain the bug in your own words
  // line 2 we must do it let not const , and must be a return sum befor print the resalt .
  //4. Fix the code and submit it all.
function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for ( i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum ;
    }

  console.log(getSum([1,2,3],[5,66,23])); 