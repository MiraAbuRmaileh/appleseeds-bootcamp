// 1 
console.log(this);
// that is refers to node.js and window 
//======================================
// 2 
//   myObj.greet.call(myObj);
// const myObj = {
//     name: "Timmy",
//     greet: () => {
//     console.log(`Hello ${this.name}`);
//     },
//     };
//     myObj.greet();
// it will be print Undefined
// how can we fix it by uding an arrow func : we have a 2 ways :
// 1 .
const myObj = {
    name: "Timmy",
    greet: () => {
      console.log(`Hello ${myObj.name}`);
    },
  };
  //2 . 
  const myObj2 ={
    name : "Timmy",
    greet:function(){
        console.log(`hello${this.name}`);
    },
  };
  myObj2.greet();
  //=================================
  // 3. 
  const myFuncDec = function () {
    console.log(this);
    };
// So if you run myFuncDec(), console.log(this) will log the window or global object in the global scope.    
//================================================
// 4. const myFuncArrow = () => {
    const myFuncArrow = () => {
        console.log(this);
        };
        myFuncArrow();
// This is because arrow functions do not have their own this value and instead inherit the this value from their surrounding lexical scope
//===========================================
// 5.
// document.querySelector(".element").addEventListener(() => {
//     console.log(this);
//     });        
document.querySelector(".element").addEventListener("click", function () {
    console.log(this);
  });
//   With this change, console.log(this) inside the event listener function will log the .element element, which is the element that the event listener is attached to.
