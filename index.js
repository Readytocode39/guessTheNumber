const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  //ask computer to play guess my secret number
  console.log("Lets play, guess my secret number... You (the computer), will guess what number you think I might have designated as my secert number.");
  //entering my secert number,which will be stored as a variable (in secretNumber)
  let secretNumber = await ask("Is your secret number a random number between 1 and 100 (inclusive)?\n");
  //printing out secret number
  console.log('You entered: ' + secretNumber);
  //allowing computer to guess my secret number between 1 and 100
  let compGuess = Math.floor(Math.random() * 100 + 1);
  //printing out random number guessed by computer
  console.log( "Guess a number!" + compGuess);
  
  //creating a while loop that keeps track of number of guesses, computer has up to 7 guesses 
  let guess = 0;
  while(guess <= 7 && compGuess !== secretNumber) {
    ⌈log₂(100)⌉ = 7
    guess ++;
  
    //if the computers guess is less than secret number then the computer will have to guess higher
    if (compGuess < secretNumber) {
    console.log(`${compGuess}? No`);
    console.log(" is your secret number higher or lower? Higher");
  
    //if the computers guess is more than secret number then the computer will have to guess lower
  } else if(compGuess > secretNumber) {
    console.log(`${compGuess}? No`);
    console.log(" is your secret number higher or lower? Lower");
  
    //computer guessed the secret number and while loop ends with a happy ending
  } else {

  }
  }
  console.log("Yes! supercalifragilisticexpialidocious, you guessed my secret number!!!");
}

 
process.exit();

