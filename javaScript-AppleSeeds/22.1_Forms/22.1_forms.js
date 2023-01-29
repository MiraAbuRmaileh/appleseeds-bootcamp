// Get form element
const form = document.getElementById("form");
// Add event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get form data
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  // Open confirmation window
  const confirmation = window.confirm(`Name: ${name}\nAge: ${age}\nEmail: ${email}\n\nConfirm submission?`);
  if (confirmation) {
    alert("Congratulations, you have successfully sent this form!");
  } else {
    // Give user the option to change information
    const change = window.confirm("Do you want to change the information?");
    if (change) {
      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";
    }
  }
});