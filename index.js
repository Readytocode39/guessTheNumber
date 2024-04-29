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
  console.log("Lets play, guess the secret number... You the human will pick a secret number and I the computer will guess it.")
  console.log("A max and min range between 1 and 100 inclusive is needed.")
  //setting range of compGuess
  let stringMax = await ask("Please enter a max:");
  let stringMin = await ask("Please enter a min:");
  let max = Number(stringMax);
  let min = Number(stringMin);



  //human enters secert number, which will be stored as a variable (in secretNumber)
  let secretNumber = await ask("What is the secret number?");

  //printing out secret number to console
  console.log('You entered: ' + secretNumber);

  while (secretNumber > max || secretNumber < min) {

    if (secretNumber > max) {
      secretNumber = await ask("please pick a lower secret number: ")
    } else if (secretNumber < min) {

      secretNumber = await ask("please pick a hihger secret number:")

    }
  }

  //computer is attempting to guess secret Number, guess is then printed to console
  let compGuess = Math.floor((max + min) / 2);
  console.log(typeof compGuess);
  console.log(typeof secretNumber)
  //creating a response variable whos value is y or n
  let response = await ask(`Is your secret number ${compGuess}? (y/n)`);

  //creating an if statement that will enter a while loop as long as response is equal to "n" and secretNumber is not equal to compGuess
  if (response === "n" && secretNumber != compGuess) {

    //creating a variable that tracks the number of guesses the computer makes
    let guess = 0;

    while (response !== "exit") {  //&& compGuess != secretNumber
      guess++;

      //if reponse is equal to "y" and secret number is equal to compguess, "while loop" will break and computer will be congratulated on guessing the secret number
      if (response === "y" && secretNumber == compGuess) {
        break;

        //if response is equal to "n" then computer will be asked is the secret number higher or lower
      } else if (response === "n" && secretNumber != compGuess) {

        //new highLow variable created, which will store humans value of higher or lower
        let highLow = await ask("is the secret number higher or lower?");

        //if highLow is equal to "lower" then computer will have to guess a lower number than prevously guessed
        if (highLow === "lower" && secretNumber < compGuess) {
          max = compGuess - 1;
          console.log("MAX:", max);
          //using binary with with random numbers to have the computer guess secret number in less than 7 tries 
          compGuess = Math.floor((max + min) / 2);
          response = await ask(`Is your secret number${compGuess}? (y/n)`);

          // if (response === "n" && secretNumber === compGuess || response === "y" && secretNumber !== compGuess) {
          //   console.log(`Naughty you, liars never prosper!`)
          // }

          //if highLow is equal to "higher" then computer will have to guess a higher number than previously guessed
        } else if (highLow === "higher" && secretNumber > compGuess) {
          min = compGuess + 1;
          console.log(compGuess);
          compGuess = Math.floor((max + min) / 2);
          response = await ask(`Is your secret number${compGuess}? (y/n)`);


        }
      }
      else if (response === "n" && secretNumber == compGuess) {
        console.log(`Naughty you, liars never prosper!`)
      }

    }
    console.log(`Yes! supercalifragilisticexpialidocious, you guessed the secret number!!! It only took you: ${guess} guesses`);

  }
  process.exit();
}
//  if (response === "n" && secretNumber === compGuess && compGuess || response === "y" && secretNumber !== compGuess) {
//   console.log(`Naughty you, liars never prosper!`)
// }





