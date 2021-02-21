const inquirer = require("inquirer");
const fs = require("fs");
const teamArray = [];
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
    let manager = new Manager(
      data.mgmtname,
      data.mgmtid,
      data.mgmtemail,
      data.mgmtnum,
    );
    teamArray.push(manager);
  })
  .then(() => {
      promptAdd();
  })
};

const promptAdd = ()=> {
  console.log(teamArray)
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
        promptEngineer();
      } if (data.add === "Intern") {
          promptIntern();
      } else if (data.add === "Finish Team"){cardCreator()}
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
  .then((data)=> {
    let engineer = new Engineer(
      data.engname, 
      data.engid, 
      data.engemail, 
      data.enggit
    );
    teamArray.push(engineer);
  })
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
  .then((data)=> {
    const intern = new Intern(
      data.internname,
      data.internid, 
      data.internmail,
      data.internschool
    );
    teamArray.push(intern);
  })
  .then(()=> {
      promptAdd();
  });
};

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <div class="container-fluid">
    <nav class="navbar sticky-top navbar-light bg-primary">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1" style="color:white">Team Generator</span>
        </div>
    </nav>
<br>
<div class="row row-cols-1 row-cols-md-2 g-4">`;

const cardCreator = () => {
  for (var i=0; i < teamArray.length; i++){
    if (teamArray[i].getRole() === "Manager") {html = html.concat(managerCard())} else if (teamArray[i].getRole() === "Engineer") {html = html.concat(engineerCard(i))} else if (teamArray[i].getRole() === "Intern") {html = html.concat(internCard(i))}  else {console.error("Nope")}
  }
  return(htmlStart())
};



const managerCard = () => {
  return `<div class="col">
  <div class="card text-dark bg-danger mb-3" style="max-width: 18rem;">
    <h5 class="card-header">${teamArray[0].name}</h5>
    <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID#: ${teamArray[0].id}</li>
            <li class="list-group-item"><a href="mailto: ${teamArray[0].email}">Email: ${teamArray[0].email}</a></li>
            <li class="list-group-item">Office Number: ${teamArray[0].officeNum}</li>
        </ul>
    </div>
</div> </div> <br>`
};
const engineerCard = (i) => {return `<div class="col"><div class="card text-dark bg-success mb-3" style="max-width: 18rem;">
    <h5 class="card-header">${teamArray[i].name}</h5>
    <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID#: ${teamArray[i].id}</li>
            <li class="list-group-item"><a href="mailto: ${teamArray[i].email}">Email: ${teamArray[i].email}</a></li>
            <li class="list-group-item"><a href="http://github.com/${teamArray[i].github}">GitHub: ${teamArray[i].github}</a></li>
        </ul>
    </div>
</div></div>`};
const internCard = (i) => {return `<div class="col"><div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
    <h5 class="card-header">${teamArray[i].name}</h5>
    <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID#: ${teamArray[i].id}</li>
            <li class="list-group-item"><a href="mailto: ${teamArray[i].email}">Email: ${teamArray[i].email}</a></li>
          <li class="list-group-item">School: ${teamArray[i].school}</li>
        </ul>
    </div>
</div></div>`};


const htmlStart = () => {
fs.appendFile('index.html', `${html} </div></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
    crossorigin="anonymous"></script>
</body></html>`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
};

promptMain();

