const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
});

let userAge;

rl.question("What's your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  rl.question("Which year were you born? ", (year) => {
    const birthYear = Number(year); // make sure it's a number

    if (birthYear > 2025) {
      console.log("Dumbass, did you think I wouldn’t know... smh!!");
    } else {
      userAge = 2025 - birthYear;
     // console.log(`Thanks for the information. You're about ${userAge} years old.`);
    }

    rl.close();
  });
});
