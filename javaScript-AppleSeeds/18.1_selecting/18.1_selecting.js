// 1. 
var elements = document.body.children;
for (var i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
// 2. 
var elements = document.querySelectorAll('body *');
elements.forEach(function(element) {
  console.log(element);
});
// 3.
// Using querySelectorAll
var inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  console.log(input);
});

// Using getElementsByTagName
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
}