const inquirer = require("inquirer");
const fs = require("fs");

const promptMain = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'mgmtname',
      message: 'What is your Team Managers name?',
    },
    {
      type: 'input',
      name: 'mgmtid',
      message: 'What is the managers ID#',
    },
    {
      type: 'input',
      name: 'mgmtemail',
      message: 'What is the managers email address?',
    },
    {
      type: 'input',
      name: 'mgmtnum',
      message: 'What is the managers office phone #?',
    },
    {
      type: 'list',
      name: 'github',
      message: 'Add employee or finish team?',
      choices: ["Engineer","Intern","Finish Team"]
    },
  ])
  .then((data) => {
      console.log(`made it`)
  })
};

promptMain();