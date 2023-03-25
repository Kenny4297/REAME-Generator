// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
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
    name: 'motivation',
    message: 'What inspired you to create this project?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please describe what inspired you to create this project!'
      }
      return true
    }   
  }, 

  {
    type: 'input',
    name: 'technologies',
    message: 'What technologies did you use to build this project?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please describe what technologies you used to build this project!'
      }
      return true
    }   
  }, 

  {
    type: 'input',
    name: 'features',
    message: 'What are the main features of the project?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please describe the main features of the project!'
      }
      return true
    }   
  }, 

  {
    type: 'input',
    name: 'examples',
    message: 'Can you provide some examples or screenshots of the project in action?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please provide some examples or screenshots of the project in action!'
      }
      return true
    }   
  }, 

  {
    type: 'input',
    name: 'installation',
    message: 'How can users deploy or install the project?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please describe how users can deploy or install the project!'
      }
      return true
    }                 
  },

  {
    type: 'input',
    name: 'testing',
    message: 'How can users run tests to ensure the project is working correctly?',
    validate: (response) => {
      if (response === '') {
        return 'Sorry! Please describe how users can run tests for the project!'
      }
      return true
    }       
  },

  {
    type: 'input',
    name: 'troubleshooting',
    message: 'Are there any common issues or errors that users may encounter? How can they resolve them?',
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'How can users contribute to the project? Are there any specific guidelines or requirements for contributing?',
  },

  {
    type: 'list',
    name: 'license',
    message: 'What license(s) apply to this project?',
    choices: ['MIT', 'Apache', 'GPLv3', 'BSD-3-Clause'],
    default: 'MIT',
  },
]

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

    //Writes to the MD file in the first argument, and passes in the user responses as the second argument
    writeToFile(`./README.md`, generateMarkdown(responses));
}

// Function call to initialize app
init();
