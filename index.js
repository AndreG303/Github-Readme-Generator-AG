const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { title } = require("process");
let basename = path.basename(process.cwd());

// array of questions for user
const questions = [
    // project author
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
        validate: github => {
            if (github.length) {
                return true;
            }
            return false;
        }
    },
    // project tittle
    {
        type: 'input',
        name: 'title',
        message: 'what would you like the title of your project to be?',
        validate: title => {
            if (title.length === 0) {
                return 'please enter a title'
            }
            return true;
        }

    },
    //  project description
    {
        type: 'input',
        name: 'description',
        message: 'describe your project',
        validate: description => {
            if (description.length < 10) {
                return 'Description is too short.';
            }
            else {
                return true;
            }
        }
    },
    // Installation
    {
        type: 'input',
        message: 'Please describe steps for installation',
        name: 'installation',
        validate: install => {
            if (install.length != 0) {
                return true;
            }
            else {
                return 'Please enter install instructions';
            }
        }
    },
    // project Usage
    {
        type: 'input',
        message: 'Please Enter a Usage description for this project?',
        name: 'usage',
        validate: usage => {
            if (usage.length < 10) {
                return 'Please enter a valid usage description';
            }
            else {
                return true;
            }
        },
    },
    // Technology 
    {
        type: 'checkbox',
        message: 'Please select the techonology used for this project',
        name: 'technology',
        choices: ['HTML', 'CSS', 'Javascript', 'Node.js', 'jQuery', 'Bootstrap', 'Foundation', 'React', 'MySQL', 'Ruby', 'Agile']
    },
    // license
    {
        type: "list",
        message: "Please select the license used for this project.",
        name: "license",
        choices: ["MIT", "GPL", "BSD", "LGPL"]
    },
    // Contributing 
    {
        type: 'input',
        message: 'Please list collaborators github user names, if any',
        name: 'contributors',
        default: 'none'
    },
    // Test
    {
        type: 'input',
        message: 'Are you running or have ran any test in this project?',
        name: 'tests',
        default: 'No tests'
    },
    // Questions 
    {
        type: 'input',
        message: 'Please enter your email?',
        name: 'email',
        validate: emailInput => {
            return (/^.+@.+\..+$/gi.test(emailInput) ? true : 'that is not an email')
        }
    },
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
        }, basename));
    })

}

// function call to initialize program
init();