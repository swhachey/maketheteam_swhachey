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
          console.log("engineer");
        promptEngineer();
      } if (data.add === "Intern") {
          console.log("intern");
          promptIntern();
      } else {return}
  });
}

const promptEngineer = ()=> {
return inquirer.prompt([
    {
      type: 'input',
      name: 'engname',
      message: 'What is your Engineers name?',
    },
    {
      type: 'input',
      name: 'engid',
      message: 'What is the engineers ID#',
    },
    {
      type: 'input',
      name: 'engemail',
      message: 'What is the engineers email address?',
    },
    {
      type: 'input',
      name: 'enggit',
      message: 'What is the engineers GitHub username?',
    },
  ])
  .then(()=> {
      promptAdd();
  })
}
const promptIntern = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'internname',
      message: 'What is your interns name?',
    },
    {
      type: 'input',
      name: 'internid',
      message: 'What is the interns ID#',
    },
    {
      type: 'input',
      name: 'internmail',
      message: 'What is the interns email address?',
    },
    {
      type: 'input',
      name: 'internschool',
      message: 'What is your interns school?',
    },
  ])
  .then(()=> {
      promptAdd();
  });
};

// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

promptMain();
