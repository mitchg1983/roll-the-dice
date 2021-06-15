const prompt = require('prompt-sync')();

const sides = Number(prompt('How many sides would you like your die to have?'));
const rig = Number(prompt('What number would you like to rig?'));

const output = Number(Math.random());

const rigout = Number(Math.ceil(output * (sides + 1)));

if (rigout > sides) {
    console.log ('Your dice roll is', rig)
}

else {
    console.log ('Your dice roll is', rigout)
}

if (rig > sides) {
    console.log ('Error, your chosen number is greater than the number of sides on the die.')
}