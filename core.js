const inquirer = require('inquirer');
const questions = require('./assets/questions')
const GameConstrctor = require("./game")

//Game executioner
console.log("\n Welcome toHangman Game \n");

inquirer.prompt(questions.readyToPlay).then((answers) => {
    answers = answers.ready.slice(0, 1).toLowerCase();

    switch(answers){
        case "y":
            let newGame = new GameConstrctor();
            newGame.newGame();
            break;
        case "n":
            console.log("\nThan you and I don't want to play either");
            process.exit();
            break;
        default:
            console.log("\nNot a valid Input\n");
            break;
    };
});