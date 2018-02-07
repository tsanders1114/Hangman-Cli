//Asks questions to the User

let questions = {
    readyToPlay : [{
        type: "input",
        name: "ready",
        message: "Begin Playing Hangman?",
        validate: (value) => {
            value = value.slice(0, 1).toLowerCase();
            return (value === "y" || value === "n") ? true : "Please input either yes or no only!"
        },
    }],

    guessLetter : [{
        type: "input",
        name: "guessLetter",
        message: "Guess a letter!",
        validate: (value) => value.match(/^[a-zA-Z]+$/) ? true : "Please type in a valid letter!"
    }],

    playAgain : [{
        type: "input",
        name: "playAgain",
        message: "Do you want to play again?",
        validate: (value) => {
            value = value.slice(0, 1).toLowerCase();
            return (value === "y" || value === "n") ? true : "Please input either yes or no only!"
        },
        default: "yes"
    }]
};

module.exports = questions;
