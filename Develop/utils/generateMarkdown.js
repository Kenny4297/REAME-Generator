// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(questionsForReadme) {
  switch (questionsForReadme.licenses) {
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
function renderLicenseLink(questionsForReadme) {
  switch (questionsForReadme.licenses) {
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
function renderLicenseSection(questionsForReadme) {
  return `[Licenses](#licenses)`
}

// TODO: Create a function to generate markdown for README
//This function generates the markdown in the file that it is written to (see index.js)
function generateMarkdown(questionsForReadme) {
  return `

  ### Licenses
  * License Badge: ${renderLicenseBadge(questionsForReadme.licenses)}
  * Link for license Badge: ${renderLicenseLink(questionsForReadme.licenses)}


  # ${questionsForReadme.title}

  ## TABLE OF CONTENTS
  * [Description](#description)
  * [Installation](#installation)
  * [App Usage](#appUsage)
  * [Licenses](#licenses)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ### Description
  ${questionsForReadme.descriptions}

  ### Installation
  ${questionsForReadme.installation}

  ### App Usage
  ${questionsForReadme.appUsage}
  
  ### Contribution
  ${questionsForReadme.contribution}

  ### Tests
  ${questionsForReadme.tests}

  ### Questions
  * Any questions? Visit the github repository here! ${questionsForReadme.gitHubRepository}
  * Any questions? Visit the github repository here! ${`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
`
}

module.exports = generateMarkdown;
