// a //
const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];
foods.sort();
console.log(foods);
foods.reverse();
console.log(foods);
// b // 
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
foodsWithUpperCase.sort();
console.log(foodsWithUpperCase);
foodsWithUpperCase.reverse();
console.log(foodsWithUpperCase);
// c // 
const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];
words.sort((a, b) => b.length - a.length);
console.log("words" , words);

