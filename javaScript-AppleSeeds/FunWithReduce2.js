function extractValue(arr, key) {
    return arr.reduce(function(accum, object) {
        if (key in object) accum.push(object[key]);
        return accum;
    }, []);
}
console.log(extractValue([{name: 'bob'}, {name: 'jim'}, {name: 'sarah'}, {age: 100}], 'name'));
///////
const str ="hi my name is Mira AbuRmaileh ,";

const countAlpha = str => {
    return str.split('').reduce((acc, val) => {
        const vowel = ["a", "e", "i", "o", "u" ,"A","E","I","O","U"];
       let { vowels } = acc;
       if(val.toLowerCase() === val.toUpperCase()){
          return acc;
       };
       if(vowel.includes(val.toLowerCase())){
          vowels++;
       };
       return { vowels,};
    }, {
       vowels: 0,
     
    });
 };
 console.log(countAlpha(str));
 ////////////////
 const arr = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
    const addKeyAndValue = (arr, key, value) => {
      arr.reduce((arr, obj) => {
          obj[key] = value
          return arr
      }, arr)
      return arr
  }
  console.log(addKeyAndValue(arr,'mira',24));




    

    
    
    



