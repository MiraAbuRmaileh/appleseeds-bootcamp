//font size does not go below 6px 
const text = document.querySelector('.text');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let textSize = 6;

// for increase
plus.addEventListener('click' , () => {
    textSize = textSize + 5;
    text.style.fontSize = textSize + 'px';
})

// for decrease
minus.addEventListener('click' , () => {
    textSize = textSize - 5;
    text.style.fontSize = textSize + 'px';
})