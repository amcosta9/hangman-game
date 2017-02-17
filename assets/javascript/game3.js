/**
 * Created by Ariel on 2/16/2017.
 */
var game = {
    guesses: [],
    computerGuess: "",
    underscores: [],
    guessesLeft: 10,
    wins: 0,
    losses: 0,
    wordBank: ["Hogwarts", "Marauders Map", "Hedwig", "Quidditch"],
    showAnswer: false,

    //function to compare letter guessed to letters in the answer
    compare: function (guess) {
        var match = false;
        for (var i = 0; i < this.computerGuess.length; i++) {
            //if user guess letter is in the word, var match is true
            if (this.computerGuess[i] === guess) {
                match = true;
            }
        }
        console.log(match);
        //if match is true, the underscore [i] that matches guess is replaced with the guess (letter)
        if (match) {
            for (var i = 0; i < this.computerGuess.length; i++ ) {
                if (this.computerGuess[i] === guess) {
                    this.underscores[i] = guess;
                    console.log(this.underscores[i], guess);
                    console.log(this.underscores);
                }
            }
            document.getElementById("current-word").innerHTML = this.underscores.join(" ");
        }
        // if match is not true, guesses left reduces and the incorrect guess is added to guesses array
        else {
            this.guessesLeft--;
            this.guesses.push(guess);
            document.getElementById("guesses-d").innerHTML = this.guesses.join(" ");
            document.getElementById("guesses-left-d").innerHTML = this.guessesLeft;
        }
        //run next round function
        this.nextRound();
    },



    updateWord: function (guess) {
        for (var k = 0; k < this.computerGuess.length; k++) {
            this.underscores.push("_");
        }
        console.log("Current word: " + this.underscores);
        document.getElementById("current-word").innerHTML = this.underscores.join(" ");
    },

    startGame: function () {
        this.computerGuess = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toLowerCase();
        console.log("Answer: " + this.computerGuess);
        this.updateWord();
        this.nextRound();
    },

    nextRound: function () {
        // logs true/false if underscores equals exactly the computer guess - the user has guessed all the letters
        console.log(this.underscores.join("") === this.computerGuess);
        // if there are 0 guesses left, losses + 1
        if (this.guessesLeft === 0) {
            this.losses++;
            document.getElementById("losses-d").innerHTML = this.losses;
            this.startOver();
        }
        // if underscores equals exactly computer guess, wins + 1
        else if (this.computerGuess === this.underscores.join("")) {
            this.wins++;
            document.getElementById("wins-d").innerHTML = this.wins;
            this.startOver();
        }
    },

    startOver: function () {
        //reset all variables to default except wins and losses
        this.guesses = [];
        document.getElementById("guesses-d").innerHTML = this.guesses;
        this.guessesLeft = 10;
        document.getElementById("guesses-left-d").innerHTML = this.guessesLeft;
        this.underscores = [];
        this.computerGuess = "";
        document.getElementById("current-word").innerHTML = this.computerGuess;

        showAnswer = false;
        this.startGame();
        }
};




game.startGame();

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    if (game.guesses.indexOf(userGuess) < 0) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            game.compare(userGuess);
        }
    }
};


