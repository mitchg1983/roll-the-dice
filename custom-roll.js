const prompt = require('prompt-sync')();

const sides = Number(prompt('How many sides would you like your die to have?'));

const output = Number(Math.random());

console.log 
('Your dice roll is:', 
Math.ceil(output * sides));