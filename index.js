#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will genarate a random number -DONE
//2) user input for guessing number -DONE
//3) guess user input with comouter generated number and show result -DONE
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 -6 :",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed a wrong number");
}
