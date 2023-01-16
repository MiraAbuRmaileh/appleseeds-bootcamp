const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];
   function allnames(names){
    let ans =[];
    names.forEach((getnames)=>{
        ans.push({name:getnames.name});
    })
    return ans;
   }
     console.log(allnames(data));

    function born1990(data){
        return data.filter(nameperson => new Date(nameperson.birthday).getFullYear() < 1990);
}
console.log(born1990(data));
////////////////////////////////////
function getFoodCount(data) {
    let foodCount = {};
    data.forEach(person => {
        Object.values(person.favoriteFoods).forEach(foods => {
            foods.forEach(food => {
                if (foodCount[food]) {
                    foodCount[food]++;
                } else {
                    foodCount[food] = 1;
                }
            });
        });
    });
    return foodCount;
}
console.log(getFoodCount(data));