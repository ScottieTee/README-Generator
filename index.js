const fs = require("fs")
const inquirer = require("inquirer")

function prompt(){
     inquirer.prompt([
        {
            type: "input", 
            name: "title", 
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description", 
            message: "Describe your project..."
        },
        {
            type: "input",
            name: "installation", 
            message: "Describe your installation process.."
        },
        {
            type: "input",
            name: "usage", 
            message: "What are you using this project for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your license",
            choices: ["MIT", "GPL", "Apache"]
        },
        {
            type: "input",
            name: "contribution",
            message: "Who are the contributors invovled in this project?"
        },
        {
            type: "input", 
            name: "username", 
            message: "What is your GitHub username?"
        },
        {
            type: "input", 
            name: "email", 
            message: "What is your email?"
        }
    ])
    .then(data=>{
        const result = generateReadMe(data);
        fs.writeFileSync("./README.md", result)
    })
}

function renderLicenseBadge(license){
    const badges = {
     MIT: '![License: MIT](https://img.sheild.io/badge/License-MIT-red.svg)',
     GPL: '![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)',
     APACHE: '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
        }
        return badges[license]
} 
function generateReadMe(answers){
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
To use the ${answers.title} you will follow these instructions; ${answers.usage}

## License
${answers.license}

## Contribution
${answers.contribution}

## Questions?
If you have questions regarding this README, please reach out to me via GitHub or by email.
"https://github.com/${answers.username}"
Email: ${answers.email}
`
}
function createFile(){

}
prompt();


//CREATE A FUNCTION THAT LINKS THE USERNAME TO THE GITHUB IN THE README
//IN THE QUESTION SECTION I HAVE TO GIVE INFO ON HOW TO FURTHER REACH ME
//