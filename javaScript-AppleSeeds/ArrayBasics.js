const people = ["Greg", "Mary", "Devon", "James"];
//1. Using a loop, iterate through this array and console.log all
//of the people.
let text = "";
for (let i = 0; i < people.length; i++) {
  text += people[i] + "<br>";
  console.log(people[i]);
}
//2. Write the command to remove "Greg" from the array.
delete people[0];
//3. Write the command to remove "James" from the array.
people.pop();
//4. Write the command to add "Matt" to the front of the array.
people[0] = "Matt";
//5. Write the command to add your name to the end of the
//array.
people.push("Mira");
//6. Using a loop, iterate through this array, and after
//console.log "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }
// 7
const copy = people.slice(1, people.indexOf("Mary")).concat(people.slice(people.indexOf("Mary") + 1, people.length));
// 8 
people.indexOf("Mary")
// 9
people.indexOf("Foo")
// 10 
// people = ["Greg", "Mary", "Devon", "James"];
// people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
// 11
const withBob = people.concat("Bob");


