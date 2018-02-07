const inquirer = require('inquirer');
const fs = require('fs');
const randomWords = require('./assets/words')

const questions = require('./assets/questions')
const WordConstructor = require('./word')

function GameConstructor(){
    var game = this
    this.wordsWon = 0;
    this.wordsLose = 0;

    this.newGame = () => {
        this.guessRemaining = 10;
        this.getNextWord()
    

    };

    this.getNextWord = () => {
        var index = Math.floor(randomWords.length * Math.random())
        this.populateWord = new WordConstructor(randomWords[index])
        console.log(this.populateWord);
        this.userGuess()
    };

    this.userGuess = () => {

       this.requestedLetter()
        if (userLost) {
            endGame 
            } else if (userWon) {
            endGame 
            } else {
            game.userGuess()
            } (edited)



    };

    this.requestedLetter = () => {
        return inquirer.prompt([{
            type:"input",
            name:"letter",
            message:"guess a letter"
        }])
        .then(function (value){
            var correctLetter = game.populateWord.checkLetter(value.letter)
            if(correctLetter){
                console.log("Letter Correct")
            }else{
                console.log("wrong Guess")
                game.guessRemaining--
            }
        })

    }
};

module.exports = GameConstructor;

/*So your program works through guessing the  first letter.  What you'll need to do after the letter is guess (after line 29 I think), is check for the ending conditions.  The two ending conditions are either 1) the user has run out of guesses or 2) the user has correctly guessed the word.  In both of those cases, the game ends.  Otherwise, the user needs to  enter another letter.  Now to enter another letter, you're going to call `userGuess` again.
So you'll be looking at something like this.
if (userLost) {
endGame 
} else if (userWon) {
endGame 
} else {
game.userGuess()
} (edited)
The userWon, userLost, and endGame are just placeholders I used for whatever you need to do in your app to check it*/