const numberOfSmileys = document.getElementById("number-of-smileys");
const submitButton = document.getElementById("submit-button");
const removeButton = document.getElementById("remove-button");
const errorMessage = document.getElementById("error-message");
const smileys = document.getElementById("smileys");

submitButton.addEventListener("click", function() {
  const number = parseInt(numberOfSmileys.value);
  if (isNaN(number)) {
    errorMessage.innerHTML = "Please enter a valid number.";
    return;
  }
  errorMessage.innerHTML = "";
  smileys.innerHTML = "";
  for (let i = 0; i < number; i++) {
    const smiley = document.createElement("img");
    smiley.src = "smileyIMG/smiley.png";
    smiley.style.width = "100px";
    smiley.style.height = "100px";
    // smiley.style.textalign= "center";
    smiley.style.marginLeft = "10px";
    smileys.appendChild(smiley);
  }
});

removeButton.addEventListener("click", function() {
    smileys.innerHTML = "";
});