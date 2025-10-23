const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const currentYear = new Date().getFullYear();

rl.question("What's your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  rl.question("Which year were you born? ", (year) => {
    const birthYear = Number(year);

    if (isNaN(birthYear)) {
      console.log("Please enter a valid year.");
      rl.close();
      return;
    }

    if (birthYear > currentYear) {
      console.log("That year is in the future.");
      rl.close();
      return;
    }

    const userAge = currentYear - birthYear;
    console.log(`Thanks for the information. You're about ${userAge} years old.`);

    if (birthYear < 1990) {
      console.log("You aint that old come on");
    }

    rl.close();
  });
});
