const LetterConstructor = require("./letter");

function WordConstructor(currentWord){
    this.word = currentWord
    this.currentWordArray = currentWord.split("");
    this.guessedLetters = [];
    this.wordFound = false;

    this.populateGuessedLetters = () => {
        this.currentWordArray.forEach((letterObect) => {
            this.guessedLetters.push(new LetterConstructor(letterObect));            
        })
    };

    this.checkLetter = (letter) => {
        this.guessedLetters.forEach((letterObect) => {
            if(letterObect.letter.indexOf(letter) > -1){
                letterObect.guessed = true;
            }
        })
    };

    this.printWord = () => {
        var displayWord = "";
        this.guessedLetters.forEach((letterObect) => displayWord += letterObect.displayWord());
        console.log(displayWord + "\n");
    }

    this.wordGuessCompleted = () => {
        //every() - it returns True if Every Object property Guessed is True othewise false
        if(this.guessedLetters.every((letterObect) =>
            letterObect.guessed = true
        )){
            this.wordFound = true;
        }
    };
};

module.exports = WordConstructor;

/*
1. Create a word file = (word.js)
2. Create a constructor in it = (WordConstructor)
3. function to Populate the guessed LetterConstructor
4. function that will check letter
5. function to printWord
6. function that will if word guess is completed?
7. module.exports = WordConstructor
*/