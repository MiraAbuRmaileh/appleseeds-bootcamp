// 1
const x = document.getElementsByClassName("start-here");
x[0].innerText = "main title";
// 2
// const newListItem = document.createElement("li");
// const newListItemContent = document.createTextNode("sub 4");
// newListItem.appendChild(newListItemContent);
const ul = document.querySelectorAll('ul')[1];
const li = document.createElement('li');
li.innerText = 'sub title 4';
ul.appendChild(li);
// 3 
const ul_1 = document.getElementsByTagName('ul')[1];
const item = document.getElementsByTagName('li')[3];
    ul_1.removeChild(item);
// 4 
document.title = "Master Of The Dom ";
 document.getElementsByTagName('title').innerText= document.title;
// 5
// const p = document.getElementsByTagName('p') = ("Hello World!");
// p.getElementsByTagName('p');
// p.innerText= "mira";
// const p = document.getElementsByTagName('p')[0];
// document.getElementsByTagName('p');
// p.innerText ="lorem5";
// document.p = "lorem ";
//  document.getElementsByTagName('p');
// p.innerText= document.p;
// const p = document.getElementsByTagName("p")[0] 
// document.p.innerText("mira");
document.p =  "Mira AbuRmaileh";
document.querySelector('p').innerText = document.p;