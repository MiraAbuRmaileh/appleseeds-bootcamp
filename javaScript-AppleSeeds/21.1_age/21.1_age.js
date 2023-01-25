const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkAge);

function checkAge() {
  const age = document.getElementById("age").value;
  if (age >= 18) {
    document.getElementById("output").innerText = "you can drink";
  } else {
    document.getElementById("output").innerText = "you're too young";
  }
}