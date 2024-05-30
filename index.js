const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

function generateREADME(answers) {
    return `
# ${answers.title}

![License](https://img.shields.io/badge/license-${answers.license}-green.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).
You can also find me on GitHub: [${answers.github}](https://github.com/${answers.github}).
`;
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            fs.writeFile('README_1.md', readmeContent, (err) =>
                err ? console.error(err) : console.log('Successfully created README.md!')
            );
        });
}

init();
