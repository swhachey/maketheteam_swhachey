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
  ])
  .then((data)=> {
console.log(data.mgmtname)
  })
  .then(() => {
      promptAdd();
  })
};

const promptAdd = ()=> {
    return inquirer.prompt([
{
    type: 'list',
      name: 'add',
      message: 'Add employee or finish team?',
      choices: ["Engineer","Intern","Finish Team"]
}
    ])
    .then((data)=> {
      if (data.add === "Engineer") {
          console.log("engineer")
      } if (data.add === "Intern") {
          console.log("intern")
      } else {return}
  });
}

promptMain();
