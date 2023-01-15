const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
let result;
function equalsCheck(food, food1) {
    // check the length
    if (food.length != food1.length) {
        return false;
    } else {
        result = false;

        // comparing each element of array 
        for (let i = 0; i < food.length; i++) {

             if(food[i]===food1[j])
                result.push(food1[i])
                
        }
         return result;
    }
}
let newarr =[];
newarr= equalsCheck(food,food1);
console.log(newarr);
