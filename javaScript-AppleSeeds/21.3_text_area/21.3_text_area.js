const textArea = document.getElementById("cover-letter");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (textArea.value.length < 100) {
    errorMessage.innerHTML = "Cover letter must be at least 100 characters.";
  } else {
    // Add code here to submit the form
    alert("Form Submited Successfully")
  }
});