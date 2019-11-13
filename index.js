#!/usr/bin/node

const app = require('commander');
const inquirer = require('inquirer');

const receiver = () => {
    inquirer.prompt([
        {
            type: 'input', name: 'fname', message: 'Please enter your FirstName : '
        },
        {
            type: 'input', name: 'lname', message: 'Please enter your LastName : '
        },
        {
            type: 'input', name: 'mail', message: 'Please enter your EmailId : '
        },
        {
            type: 'input', name: 'contact', message: 'Please enter your Cotact Number : '
        },
    ]).then(answer => {
        console.log(`Hey, please find your details as below \n Name : ${answer.fname} ${answer.lname} \n EmailID : ${answer.mail} \n Contact Number : ${answer.contact}`);
    });
};

app.version('1.0.0').action(receiver);

app.parse(process.argv);