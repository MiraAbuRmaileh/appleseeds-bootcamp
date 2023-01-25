const lightbulb = document.getElementById("lightbulb");
let isOn = false;
lightbulb.addEventListener("click", function() {
  if (isOn) {
    lightbulb.src = "lightbulb_IMG/lightbulb-off.jpg";
    isOn = false;
  } else {
    lightbulb.src = "lightbulb_IMG/lightbulb-on.jpeg";
    isOn = true;
  }
});