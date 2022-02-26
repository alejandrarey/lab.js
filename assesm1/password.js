const readline = require('readline');
const { ReadableStreamBYOBRequest } = require('stream/web');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the Pasword Validator. Insert your Password here: ", (answer) => {
    if(answer.length >= 10) {
        console.log('Your password is ok');
    } else {
        console.log('Your pasword needs to be greater than 10 characters');
    };
});

