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

function generateReadMe(answers){
    return `
        # ${answers.title}

        ## table of contents
        - [Description] #Description
        - [Installation](#Installation)
        - [Usage](#Usage)
        - [License](#License)
        - [Contribution](#Contribution)

        ## Description
        ${answers.description}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
       -  ${answers.license}

        ## Contribution
        ${answers.contribution}

        ## Questions?
        ${answers.username}
    `
}
function createFile(){

}
prompt();


//CREATE A FUNCTION THAT LINKS THE USERNAME TO THE GITHUB IN THE README
//IN THE QUESTION SECTION I HAVE TO GIVE INFO ON HOW TO FURTHER REACH ME
//