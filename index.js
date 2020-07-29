const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [{
    type: "input",
    name: "github",
    message: "what is your github name?",
},
{
    type: "input",
    name: "title",
    message: "what would you like the title of your project to be?",

}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown({
            ...response
        }));
    })

}

// function call to initialize program
init();
