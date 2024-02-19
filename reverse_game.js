const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  //computer asks you to play guess the secret number
  console.log("Lets play, guess the secret number... You (the human) will try to guess my secret number; my secret number is between 1 and 100 inclusive (please use whole numbers");

  //computer generates secert number, which will be stored as a variable (in compsecretNumber)
  let compSecretNumber = Math.floor(Math.random() * 100 + 1);

  //printing computers secret number to console
  console.log("Secret number: " + compSecretNumber);

  //computer is allowing human to guess secret number, which the value of humans guess will now be stored in a variable called humanGuess
  let humanGuess = await ask("Please enter your guess:");

  //creating a reponse variable whos value is y or n
  let response = await ask(`Is your secret number: ${humanGuess}? (y/n)`);

  //creating an if statement that will enter a while loop as long as response is equal to "n" and compSecretNumber is not equal to humanGuess
  if (response === "n" && compSecretNumber !== humanGuess) {

    //creating a variable that tracks the number of guesses the human makes
    let guess = 0;

    while (compSecretNumber !== humanGuess) {
      guess++;

      //if reponse is equal to "y" while loop will break and human will be congratulated on guessing the secret number
      if (response === "y") {
        break;

        //if response is equal to "n" then computer will be asked is the secret number higher or lower
      } else if (response === "n") {
        console.log("sorry, please guess again.");
        //new highLow variable created, which will store value of higher or lower
        let highLow = await ask("is the secret number higher or lower?");

        //if highLow is equal to "lower" then human will have to guess a lower number than prevously guessed
        if (highLow === "lower") {
          humanGuess = await ask("Please enter new guess:");
          response = await ask(`Is your secret number${humanGuess}? (y/n)`);

          //if highLow is equal to "higher" then human will have to guess a higher number than previously guessed
        } else if (highLow === "higher") {
          humanGuess = await ask("Please enter new guess:");
          response = await ask(`Is your secret number${humanGuess}? (y/n)`);
        }
      }

    }
    console.log(`Yes! supercalifragilisticexpialidocious, you guessed the secret number!!! It only took you: ${guess} guesses`);
  }

  process.exit();
}




