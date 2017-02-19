
var game = {
    guesses: [],
    computerGuess: "",
    underscores: [],
    guessesLeft: 10,
    wins: 0,
    losses: 0,
    wordBank: ["HOGWARTS", "MARAUDERS MAP", "HEDWIG", "QUIDDITCH", "AGUAMENTI", "DOBBY", "POLYJUICE", "VOLDEMORT", "SICKLE", "RAVENCLAW", "STUPEFY", "BUTTERBEER", "BELLATRIX", "MUGGLE"],
    showAnswer: false,
    pictureChange: false,

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
            this.reset();
        }

        else if (this.underscores.join("") === this.computerGuess) {
        // if there are no underscores left, you win! (space isn't working)
        // else if (this.underscores.indexOf("_") === -1 && this.underscores.indexOf("\u00A0") >= 0){
            setTimeout(this.wins++, 100000);
            this.pictureChange = true;
            this.changePicture ();
            document.getElementById("wins-d").innerHTML = this.wins;
            alert("You Win! The word was " + this.computerGuess + " !");
            this.reset();
        };
    },

    changePicture: function () {
            if (this.pictureChange = true && this.computerGuess === "AGUAMENTI") {
            document.getElementById("winImage").src="assets/images/aguamenti.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "BELLATRIX") {
                document.getElementById("winImage").src="assets/images/bellatrix.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "BUTTERBEER") {
                document.getElementById("winImage").src="assets/images/butterbeer.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "DOBBY") {
                document.getElementById("winImage").src="assets/images/dobby.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "HEDWIG") {
                document.getElementById("winImage").src="assets/images/hedwig.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "HOGWARTS") {
                document.getElementById("winImage").src="assets/images/hogwarts.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "MARAUDERS MAP") {
                document.getElementById("winImage").src="assets/images/maurmap.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "MUGGLE") {
                document.getElementById("winImage").src="assets/images/muggle.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "POLYJUICE") {
                document.getElementById("winImage").src="assets/images/polyjuice.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "QUIDDITCH") {
                document.getElementById("winImage").src="assets/images/quidditch.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "RAVENCLAW") {
                document.getElementById("winImage").src="assets/images/ravenclaw.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "SICKLE") {
                document.getElementById("winImage").src="assets/images/sickle.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "STUPEFY") {
                document.getElementById("winImage").src="assets/images/stupefy.jpg";
            };
            if (this.pictureChange = true && this.computerGuess === "VOLDEMORT") {
                document.getElementById("winImage").src="assets/images/voldemort.jpg";
            };
    },

    reset: function () {
        console.log("reset - press enter to start again");
        document.getElementById("pressKeyToPlay").innerHTML = "Press Enter to play again";
        var hideG = document.getElementById("turtles");
        hideG.style.display = "none";
        var hideGL = document.getElementById("turtles2");
        hideGL.style.display = "none";
        var hideGSF = document.getElementById("turtles3");
        hideGSF.style.display = "none";
        document.onkeyup = function (event) {
            if (event.keyCode === 13) {
                document.getElementById("pressKeyToPlay").innerHTML = "Press any key to guess the word";
                hideG.style.display = "initial";
                hideGL.style.display = "initial";
                hideGSF.style.display = "initial";
                this.pictureChange = false;
                game.startOver();
            }
        };
        //reset all variables to default except wins and losses
        this.guesses = [];
        document.getElementById("guesses-d").innerHTML = this.guesses;
        this.guessesLeft = 10;
        document.getElementById("guesses-left-d").innerHTML = this.guessesLeft;
        this.underscores = [];
        this.computerGuess = "";
        document.getElementById("current-word").innerHTML = this.computerGuess;

        this.showAnswer = false;
        //if user presses key, start game

    },
    startOver: function () {
        game.startGame();
        document.getElementById("winImage").src=("assets/images/express.jpg");
        document.onkeyup = function (event) {
            var userGuess = event.key.toUpperCase();
            console.log(userGuess);
            if (game.guesses.indexOf(userGuess) < 0) {
                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    game.compare(userGuess);
                }
                if (event.keyCode === 32) {
                    game.compare(userGuess);
                }
            }
        };
    }
};




game.startGame();

document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);
    if (game.guesses.indexOf(userGuess) < 0) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            game.compare(userGuess);
        }
        if (event.keyCode === 32) {
            game.compare(userGuess);
        }
    }
};


