
var game = {
    guesses: [],
    computerGuess: "",
    underscores: [],
    guessesLeft: 10,
    wins: 0,
    losses: 0,
    wordBank: ["hogwarts", "marauders map", "hedwig", "quidditch", "aguamenti", "dobby", "polyjuice", "voldemort", "sickle", "ravenclaw", "stupefy", "butterbeer", "bellatrix", "muggle"],
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


    //generating underscores for the length of answer
    updateWord: function (guess) {
        for (var k = 0; k < this.computerGuess.length; k++) {
            if (this.computerGuess[k] === " "){
                this.underscores.push("\u00A0");
            }
            else {
                this.underscores.push("_");
            }
        }
        console.log("Current word: " + this.underscores);
        //replaces , separating array to spaces
        document.getElementById("current-word").innerHTML = this.underscores.join(" ");
    },

    startGame: function () {
        this.computerGuess = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toUpperCase();
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
            alert("Sorry, the word was: " + this.computerGuess + ". Game Over!");
            this.startOver();
        }
        // if there are no underscores left, you win! (space isn't working)
        else if (this.underscores.indexOf("_") === -1 && this.underscores.indexOf("\u00A0") >= 0){
            this.wins++;
            document.getElementById("#winImage").src=("./images/muggle.jpg");
            document.getElementById("wins-d").innerHTML = this.wins;
            alert("You Win! The word was " + this.computerGuess + " !");
            setTimeout(this.startOver(), 10000000);
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

        this.showAnswer = false;
        this.startGame();
    }
};




game.startGame();

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    document.getElementById("#winImage").src=("./images/express.gif");
    if (game.guesses.indexOf(userGuess) < 0) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            game.compare(userGuess);
        }
        if (event.keyCode === 32) {
            game.compare(userGuess);
        }
    }
};


