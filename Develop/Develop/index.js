const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            { name: 'MIT License', value: 'MIT' },
            { name: 'Apache License 2.0', value: 'Apache-2.0' },
            { name: 'GNU General Public License v3.0', value: 'GPL-3.0' },
            { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD-3-Clause' },
            { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0-1.0' },
            { name: 'Mozilla Public License 2.0', value: 'MPL-2.0' },
            { name: 'The Unlicense', value: 'Unlicense' },
            { name: 'Eclipse Public License 2.0', value: 'EPL-2.0' },
            { name: 'SIL Open Font License 1.1', value: 'OFL-1.1' },
            { name: 'Boost Software License 1.0', value: 'BSL-1.0' }
            // Add more license options here
        ]
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file generated successfully!')
    );
}

// Function to initialize application
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        });
}

// Initialize application
init();
