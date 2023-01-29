  // Generate random letter
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet[Math.floor(Math.random() * 26)];
  console.log(letter); // for testing purposes only

  // Get DOM elements
  const guessInput = document.getElementById("guess");
  const submitButton = document.getElementById("submit");
  const messageDiv = document.getElementById("message");
  const guessesDiv = document.getElementById("guesses");

  let guesses = [];

  // Submit button event listener
  submitButton.addEventListener("click", function() {
    const guess = guessInput.value.toLowerCase();
    if (!alphabet.includes(guess)) {
      // Not a valid alphabetical letter
      messageDiv.innerHTML = "Not a valid alphabetical letter.";
      messageDiv.classList.add("wrong");
      return;
    }
    if (guesses.includes(guess)) {
      // Already guessed this letter
      messageDiv.innerHTML = "You already guessed this letter.";
      messageDiv.classList.add("wrong");
      return;
    }
    guesses.push(guess);
    if (guess === letter) {
      // Right guess
      messageDiv.innerHTML = "You are correct! The letter was " + letter + ".";
      messageDiv.classList.add("right");
      messageDiv.style.color ="green";
      guessesDiv.style.display = "none";
      guessInput.disabled = true;
      submitButton.disabled = true;
      if (confirm("Do you want to play again?")) {
        // Reset game
        guesses = [];
        guessInput.value = "";
        messageDiv.innerHTML = "";
        messageDiv.classList.remove("right");
        messageDiv.classList.remove("wrong");
        guessInput.disabled = false;
        submitButton.disabled = false;
      }
    } else {
      // Wrong guess
      messageDiv.innerHTML = "Wrong guess.";
      messageDiv.classList.add("wrong");
      guessesDiv.innerHTML = "Guesses: " + guesses.join(", ");
      guessesDiv.style.display = "block";
    }
  });