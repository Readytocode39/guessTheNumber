const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {

  //ask computer to play guess the secret number
  console.log("Lets play, guess the secret number... You (the computer), will guess what number you think I (the human) might have designated as a secert number.");

  //the computer is asking the human, is the secret number between 1 and 100 inclusive? and then waiting on a Yes or No from the human
  await ask("Is the secret number a random number between 1 and 100 (inclusive)?(Yes or No)\n");

  //human enters secert number, which will be stored as a variable (in secretNumber)
  let secretNumber = await ask("What is the secret number?");

  //printing out secret number to console
  console.log('You entered: ' + secretNumber);

  //setting range of compGuess
  let max = 100;
  let min = 1;

  //computer is attempting to guess secret Number, guess is then printed to console
  let compGuess = Math.floor(Math.random() * max + min);
  console.log(compGuess);

  //storing compGuess in response variable that will result in a y or n
  let response = await ask(`Is your number ${compGuess}? (y/n)`);

  //creating an if statement that will enter a while loop as long as response is equal to "n" and secretNumber is not equal to compGuess
  if (response === "n" && secretNumber !== compGuess) {

    //creating a variable that tracks the number of guesses the computer makes
    let guess = 1;

    while (compGuess !== secretNumber) {
      guess++;

      //if reponse is equal to "y" while loop will break and computer will be congratulated on guessing the secret number
      if (response === "y") {
        break;

        //if response is equal to "n" then computer will be ask is the secret number higher or lower
      } else if (response === "n") {

        //new highLow variable created, which will store humans value of higher or lower
        let highLow = await ask("is the secret number higher or lower?");

        //if highLow is equal to "lower" then computer will have to guess a lower number than prevously guessed
        if (highLow === "lower") {
          max = compGuess - 1;
          console.log("MAX:", max);
          //using binary with with random numbers to have the computer guess secret number in less than 7 tries 
          compGuess = Math.floor((max + min) / 2);
          response = await ask(`Is you number${compGuess}? (y/n)`);
        
          //if highLow is equal to "higher" then computer will have to guess a higher number than previously guessed
        } else if (highLow === "higher") {
          min = compGuess + 1;
          console.log("MAX:", max);
          compGuess = Math.floor((max + min) / 2);
          response = await ask(`Is you number${compGuess}? (y/n)`);
        }
      }

    }
  }
  console.log(`Yes! supercalifragilisticexpialidocious, you guessed the secret number!!! It only took me: ${guess}'s`);

  process.exit();
}






