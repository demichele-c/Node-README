const inquirer = require('inquirer'); // Import inquirer module for command line prompts
const fs = require('fs'); // Import fs (file system) module for file operations
const generateMarkdown = require('./utils/generateMarkdown'); // Import generateMarkdown module from the same directory

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?' // Prompt user for the project title
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:' // Prompt user for project description
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:' // Prompt user for installation instructions
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information:' // Prompt user for usage information
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines:' // Prompt user for contribution guidelines
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test instructions:' // Prompt user for test instructions
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:', // Prompt user to choose a license from a list
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
            { name: 'Boost Software License 1.0', value: 'BSL-1.0' },
            { name: 'None', value: '' }
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:' // Prompt user for GitHub username
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:' // Prompt user for email address
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    const timestamp = new Date().toISOString().replace(/:/g, '-'); // Generate a timestamp
    const newFileName = fileName.replace('.md', `-${timestamp}.md`); // Append the timestamp to the filename

    fs.writeFile(newFileName, data, (err) =>
        err ? console.error(err) : console.log(`${newFileName} file generated successfully!`) // Log success message or error
    );
}

// Function to initialize application
function init() {
    inquirer.prompt(questions) // Prompt the user with the questions array
        .then(function(answers) {
            console.log("Answers Object: ", answers);
            const markdownContent = generateMarkdown(answers); // Generate markdown content with user answers
            writeToFile('README.md', markdownContent); // Write the markdown content to README.md file
        })
        .catch(error => {
            console.log(error);
        });
}

// Initialize application
init();