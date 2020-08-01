const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { title } = require("process");
// array of questions for user
const questions = [{
    type: "input",
    name: "github",
    message: "what is your github name?",
    // validate: github => {
    //     if (github.lenght) {
    //         return true;
    //     }
    //     return false;
    // }
},
{
    type: "input",
    name: "title",
    message: "what would you like the title of your project to be?",
    // validate: title =>{
    //     if (title.lenght === 0){
    //         return 'please enter a title'
    //     }
    // }

},
{
    type: "input",
    name: "description",
    message: "describe your project",
        //  validate: description => {
        //         if(description.length < 10){
        //             return "Description is too short.";
        //         }
        //         else{
        //             return true;
        //         }
        //     }
},
];
{
    type: "input",
    name: "description",
    message: "Please provide a detail description of the project",
         validate: description => {
                if(description.length < 10){
                    return "Description is too short.";
                }
                else{
                    // all validation checks passed
                    return true;
                }
            }
},

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
