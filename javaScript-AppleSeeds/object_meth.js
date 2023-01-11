const mycountry ={
country:"Southkorea",
capital:"Seoul",
language:"korean",
population: 10,
neighbours:['China','Japan','Hongkong'],
describe(){
    console.log(`${this.country} has ${this.population} 
    million peaople,their mother tongue is ${this.language}, 
    ther have ${this.neighbours.length} neighbouring countries and a 
    capital called ${this.capital}.`);
},
checkIsland(){
    this.isIsland = this.neighbours.length===0 ?true :false;
}

}
mycountry.describe();
mycountry.checkIsland();
console.log(mycountry);