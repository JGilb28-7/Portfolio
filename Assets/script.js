//use to build the future contact form and hold the data using node.js



/*const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter your phone",
      name: "Phone",
    },
    {
      type: "list",
      message: "What is your preferred method of communication",
      choices: ["phone", "email"],
      name: "communication",
    },
  ])
  .then((response) => {
    fs.writeFile(
      response.username + ".txt",
      JSON.stringify(response),
      {},
      (e) => console.log(e)
    );
  });*/