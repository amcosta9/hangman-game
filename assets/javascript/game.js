//declare variables

var userGuess = "";
var guesses = [];
var computerGuess = "";
var guessesLeft = "";
//this var may be unnecessary?
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["cake", "soccer", "shoe", "computer"];
var counter = 0;
var wins = 0;
var losses = 0;

//link variables to display on screen

var winsDisplay = document.getElementById("wins-d");
var lossesDisplay = document.getElementById("losses-d");
var guessesLeftDisplay = document.getElementById("guesses-left-d");
var guessesDisplay = document.getElementById("guesses-d");
var currentWordDisplay = document.getElementById("current-word");


//computer selects random word from array wordBank
computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log("Answer: " + computerGuess);
//display underscores for word
    var underscores = "";
    for(j=0; j<computerGuess.length; j++) {
        underscores = underscores + "_ "
    }
console.log("Current word: " + underscores);
//user presses key to "guess" letters in word, guess is added to guesses array

document.onkeyup = function game() {
    userGuess = event.key;
    //check if user has already pressed this key. if yes, alert already guessed that one. start over.
    if (guesses.indexOf(userGuess) >= 0) {
        console.log("you already guessed that one");
        userGuess = ".";
        // game();
        //need to start over here
    }
    console.log("user guessed " + userGuess);
    guesses.push(userGuess);
    console.log("guesses so far " + guesses);


    //compare user guess to the letters in current word
    function compare() {
            for (var i = 0; i < computerGuess.length; i++) {
            //if user guess is in the word, that letter is revealed on the page.
            if (computerGuess[i] === userGuess) {
                console.log(userGuess + " is in " + computerGuess);
            }

        }
    }

    //updates display values as game is played
    currentWordDisplay = underscores;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    guessesLeftDisplay.textContent = guessesLeft;
    guessesDisplay.textContent = guesses;
};

