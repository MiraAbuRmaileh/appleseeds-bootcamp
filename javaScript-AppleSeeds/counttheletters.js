const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
function count(array){
  let lettercount ={};
  for(const word of array){
    for(const letter of word.toLowerCase()){
        if(lettercount[letter]){
            lettercount[letter]++;
        }
        else{
            lettercount[letter] =1;
        }
    }
  }
  return lettercount;
}
const lettercount = count(array);
console.log(lettercount);
