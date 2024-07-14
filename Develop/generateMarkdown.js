function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license) {
    return `(https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here]${renderLicenseLink(license)} for more details.`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;