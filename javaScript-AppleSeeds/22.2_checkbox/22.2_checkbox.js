 const checkbox = document.getElementById("checkbox");
 const image = document.getElementById("image");
 // checkbox change
 checkbox.addEventListener("change", function() {
   if (checkbox.checked) {
     // Show image
     image.style.display = "block";
   } else {
     // Hide image
     image.style.display = "none";
   }
 });