// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create an array of questions for user input
//Similar to the JSQuiz format
const questions = [
    {
        type: 'input',
        name: 'User Name',
        message: 'What is your name?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter something!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'Repository Name',
        message: 'Please enter the link to your repository',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter a link to your repository!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'Project Title',
        massage: 'What is the name of the project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the name of this project!'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'Project Description',
        message: 'Please enter the project description:',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please describe the project!'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'Project Title',
        massage: 'What is the name of the project?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please give your project a name!'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'Installation Steps',
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
        name: 'App usage',
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
        name: 'Licenses',
        message: 'What licenses do you need for this project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        default: 'MIT',
        validate: (response) => {
        if (response !== 'MIT' || response !== 'GPLv2' || response !== 'Apache' || response !== 'GPLv3') {
        if (!(response.includes(choices)))
            return 'Sorry! Please tell us what license to use!'
        }
        return true
        } 
        // do not need to validate, since it's a list!!
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, questions, (err) => {
        //Node uses the failure check first
        if (err) {
            console.log(err)
        }
        console.log("README generated");
    })
}

// FILE: It is a string, Buffer, URL or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similar to fs.write() method.
//? Writing to the new file I just created, 'readmeFile.md'


// DATA: It is a string, Buffer, TypedArray or DataView that will be written to the file.
//? 'questions', since that will be the data written to the file


// OPTIONS: It is an string or object that can be used to specify optional parameters that will affect the output. It has three optional parameter:
//     ENCODING: It is a string value that specifies the encoding of the file. The default value is ‘utf8’.

//     MODE: It is an integer value that specifies the file mode. The default value is 0o666.

//     FLAG: It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.
//^utf8 as the obvious standard


// CALLBACK: It is the function that would be called when the method is executed.
//? This would have to be the 'write stuff to the specified file ('readmeFile.md')


// ERR: It is an error that would be thrown if the operation fails.

// TODO: Create a function to initialize app
function init() {}
//&Hint for initializing this app
// Function call to initialize app
init();
