// Establishing variable of alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Establishing variables for wins, losses, guesses left which all begin at 0
//Establishes the random letter the computer selects, while showing it in the browser's console log
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLog = [];

//Sometimes the computer picks the same letter twice in a row, is there a way to avoid that?
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

//Function for user keypress
document.onkeydown = function(event) {
    var userGuess = event.key;
    guessesLog.push(userGuess);

    //if user guess is the same as computer choice, +1 to "wins"
    if (userGuess === computerChoice) {
        wins++;
        // alert("You win!");
        // computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        // guesses = 9;
        // guessesLog = "";
        reset("win");
    }
    // if user guess is not the same as computer choice, -1 to "guesses"
    else {
        guesses--;
    }
    //if user reaches 0 guesses left, +1 to "losses"
    if (guesses === 0) {
        losses++;
        // alert("You lose!");
        // computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        // guesses = 9;
        // guessesLog = "";
        reset("lose");
    }

    // Get element by ID in order to update numbers for wins, losses, and guesses
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("guessesLog").innerHTML = "Your guesses so far: " + guessesLog.join(', '); 
 
    function reset(result) {
        alert("You " + result + "!");
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        guesses = 9;
        guessesLog = [];
    }
}
