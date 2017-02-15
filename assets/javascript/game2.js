//declaring game object and initial values
var game = {
    userGuess: "",
    guesses: [],
    computerGuess: "",
    underscores: "",
    guessesLeft: 10,
    wins: 0,
    losses: 0,
    wordBank: ["Hogwarts", "Marauders Map", "Hedwig", "Quidditch"],
    showAnswer: false,

    //function to determine if there are guesses left to play
    canWePlay: function () {
        if (game.guessesLeft > 0) {
            console.log("We can play, there are " + game.guessesLeft + " guesses left");
        }
        else {
            game.losses--;
            console.log("Game Over");
        }
    },

    //function to compare letter guessed to letters in the answer
    compare: function () {
        for (var i = 0; i < game.computerGuess.length; i++) {
            //if user guess is in the word, that letter is revealed on the page.
            if (game.computerGuess[i] === game.userGuess) {
                //THIS DOES NOT WORK
                game.underscores.replace(game.underscores.indexOf(game.computerGuess[i]), game.userGuess);
                console.log(game.underscores);
                console.log(game.userGuess + " is in " + game.computerGuess);
            }
        }

    },


};


document.onkeyup = function (event) {
    game.userGuess = event.key;
    // game.canWePlay();
    game.guessesLeft--;
    document.getElementById("guesses-left-d").innerHTML = game.guessesLeft;
    console.log("user guessed " + game.userGuess);
    game.guesses.push(game.userGuess);
    document.getElementById("guesses-d").innerHTML = game.guesses;
    console.log("guesses so far " + game.guesses);
    game.compare();
};

// links variables to html ids
var winsDisplay = document.getElementById("wins-d");
var lossesDisplay = document.getElementById("losses-d");
var guessesLeftDisplay = document.getElementById("guesses-left-d");
var guessesDisplay = document.getElementById("guesses-d");
var currentWordDisplay = document.getElementById("current-word");

game.computerGuess = game.wordBank[Math.floor(Math.random() * game.wordBank.length)];
console.log("Answer: " + game.computerGuess);
//display underscores for word
    for (var k = 0; k < game.computerGuess.length; k++) {
    game.underscores = game.underscores + "_ "
}
console.log("Current word: " + game.underscores);
//displays the var underscores on the DOM as current word
document.getElementById("current-word").innerHTML = game.underscores;


currentWordDisplay.textContent = game.underscores;
winsDisplay.textContent = game.wins;
lossesDisplay.textContent = game.losses;
guessesLeftDisplay.textContent = game.guessesLeft;
guessesDisplay.textContent = game.guesses;