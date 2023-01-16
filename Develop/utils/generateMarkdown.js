// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
`;
}

module.exports = generateMarkdown;
