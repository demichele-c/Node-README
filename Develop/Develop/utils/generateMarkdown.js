// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    // Logic to return the appropriate license badge based on the license type
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license) {
    // Logic to return the license link based on the license type
    return `(https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    // Logic to return the license section based on the license type
    return `## License

This project is licensed under the ${license} license. Click [here]${renderLicenseLink(license)} for more details.`;
  } else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
