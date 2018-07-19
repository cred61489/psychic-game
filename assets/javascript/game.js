
  var letters = ["a", "b", "c"];

  var guessedLetters = [];

  var letterToGuess = null;

  var guessesRemaining = 9;

  var wins = 0;
  var losses = 0;

  var updateGuessesRemaining = function() {
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
  };

  var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  var updateGuessesMade = function() {
    document.querySelector("#guesses-made").innerHTML = guessedLetters.join(", ");
  };

  
  var reset = function() {
    guessesRemaining = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuessesMade();
  };

  updateLetterToGuess();
  updateGuessesRemaining();

  document.onkeyup = function(event) {
    guessesRemaining--;

    var letter = String.fromCharCode(event.which).toLowerCase();

    guessedLetters.push(letter);

    updateGuessesRemaining();
    updateGuessesMade();


    if (letter === letterToGuess) {

      wins++;
      document.querySelector("#wins").innerHTML = wins;

      reset();
    }


    if (guessesRemaining === 0) {

      losses++;
      document.querySelector("#losses").innerHTML = losses;

      reset();
    }
  };