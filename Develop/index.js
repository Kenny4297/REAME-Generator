// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Similar to the JSQuiz format
const questionsForReadme = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the title of the project!!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the description!'
            }
            return true
        }   
    }, 
    
    {
        type: 'input',
        name: 'gitHubRepository',
        message: 'Enter the link to the github repository:',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell give us the repository link'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please type in your email:'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps for installing this project',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us how to install this project!'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'appUsage',
        message: 'How do you run this project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us how to run this project!'
            }
            return true
        }       
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses do you need for this project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        default: 'MIT',
        // No validation needed, it's a list!
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please tell us how to contribute to your project',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please describe how to contribute to your project!'
            }
            return true
        }                 
    },
    
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for this project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us how to run test for this project!'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your github username?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us what your github username is!'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Feel free to leave any questions about the project below:',
        default: ''
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        //Node uses the failure check first
        if (err) {
            console.log("An error occurred")
        }
        console.log("README generated");
    })
}



// TODO: Create a function to initialize app
const init = async () => {
    //awaiting the prompt method that takes in a set of questions and saves the user input to the variable 'responses'
    let responses = await inquirer.prompt(questionsForReadme);

    //Writes to the MD file
    writeToFile(`./readmeFile.md`, generateMarkdown(responses));
}

//&Hint for initializing this app
// Function call to initialize app
init();
