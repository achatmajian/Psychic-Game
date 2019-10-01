// Establishing variable of alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Establishing variables for wins, losses, guesses left which all begin at 0
//Establishes the random letter the computer selects, while showing it in the browser's console log
var wins = 0;
var losses = 0;
var guesses = 0;

//Sometimes the computer picks the same letter twice in a row, is there a way to avoid that?
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]

console.log(computerChoice)

//Function for user keypress
$(userGuess).keydown(function)  {
    var userGuess = event.key;

    //if user guess is the same as computer choice, +1 to "wins"
    if (userGuess === computerChoice) {
        wins++;
    }
    // if user guess is not the same as computer choice, -1 to "guesses"
    else (userGuess !== computerChoice) 
        guessess--;
    }
    //if user reaches 0 guesses left, +1 to "losses"
    if (guesses === 0) {
        losses++;
    

};



