const h1 = document.createElement("h1");
h1.innerText = "welcome to my page ";
document.body.appendChild(h1);

const p = document.createElement('p');
p.innerText= "The light was out on the front porch of the house. This was strange. Judy couldn't remember a time when she had ever seen it out. She hopped out of her car and walked to the door";
document.body.appendChild(p);
p.style.color = "blue";
p.style.fontSize = "2rem";
p.style.marginBottom = "55px";

const img = document.createElement('img')
img.src="https://4kwallpapers.com/images/wallpapers/windows-11-landscape-scenery-sunrise-stock-day-light-3840x2160-5661.jpg";
document.body.appendChild(img);
img.style.height ="750px";
img.style.width = "1500px";

const body = document.createElement('body');
document.body.appendChild(body);
body.style.fontFamily = "Arial";
body.style.boxSizing = "auto";


// Create the footer element
const footer = document.createElement("footer");
footer.innerText = "Copyright © 2023";
document.body.appendChild(footer);
footer.style.fontSize = "2rem";
// footer.style.marginTop = "10px";
footer.style.textAlign = "center";


// const header = document.createElement("header");
// document.body.appendChild(header);
// header.style.border = "3px";


const nav = document.createElement("nav");
nav.innerText = "nav";
document.body.appendChild(nav);
nav.style.fontSize = "2rem";
nav.style.border = "3px solid black ";
nav.style.marginTop = "-850px";
nav.style.backgroundColor = "green";
nav.style.color = "white";

const a = document.createElement("a");
a.innerText = "Home";
a.href = "#"
nav.appendChild(a);
a.style.marginRight = "20px";
a.style.fontSize = "2rem";
a.style.float = "right";

/////
// const a = document.createElement("a");
// a.innerText = "cotact";
// a.href = "#"
// nav.appendChild(a);
// a.style.marginRight = "20px";
// a.style.fontSize = "2rem";
// a.style.float = "right";
// a.style.background = "red";




