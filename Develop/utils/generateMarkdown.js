// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(questions) {
  switch (questions.licenses) {
    //Licenses badges location here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
    case 'MIT':
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case 'GPLv2':
      licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      break;
    case 'Apache':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'GPLv3':
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    default: 
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(questions) {
  switch (questions.licenses) {
    case 'MIT':
      link = "https://opensource.org/licenses/MIT";
      break;
    case 'GPLv2':
      link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0";
      break;
    case 'Apache':
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'GPLv3':
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(questions) {
  return `[Licenses](#licenses)`
}

// TODO: Create a function to generate markdown for README
//This function generates the markdown in the file that it is written to (see index.js)
function generateMarkdown(questions) {
  return `
  # ${questions.projectTitle}

  ## TABLE OF CONTENTS
  * [User Name](#userName)
  * [User Email](#userEmail)
  * [Repository Name](#repositoryName)
  * [Project Title](#projectTitle)
  * [Project Description](#projectDescription)
  * [Contribution](#contribution)
  * [Installation Steps](#installationSteps)
  * [App Usage](#appUsage)
  * [Licenses](#licenses)
  * [Tests](#tests)

  ### User Name
  ${questions.userName}

  ### User Email
  ${questions.userEmail}

  ### Repository Name
  ${questions.repositoryName}

  ### Project Title
  ${questions.projectTitle}

  ### Project Description
  ${questions.project}

  ### Contribution 
  ${questions.contribution}

  ### Installation Steps
  ${questions.installationSteps}

  ### App Usage
  ${questions.appUsage}

  ### Licenses
  * License Badge: ${renderLicenseBadge(data.licenses)}
  * Link for license Badge: ${renderLicenseLink(data.licenses)}

  ### Tests 
  ${questions.tests}
`
}

module.exports = generateMarkdown;
