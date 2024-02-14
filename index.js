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
  let secretNumber = await ask ("What is the secret number?")
  //printing out secret number to console
  console.log('You entered: ' + secretNumber);
 
  //allowing computer to guess the secret number between 1 and 100
  let compGuess = Math.floor(Math.random() * 100 + 1);
  //printing out computers guessed numer
  //console.log( "Guess a number!" + compGuess);
  
  //creating a while loop that keeps track of the number of guesses that the computer makes, computer has up to 7 guesses 
  let guess = 0;
  while(guess < 7 && compGuess !== secretNumber) {
    let max = 100
    let min = 1
    guess ++;
  
    //if the computers guess is less than secret number then the computer will have to guess higher
    if (compGuess < secretNumber) {
    min = compGuess + 1
    console.log("MIN:", min)
    compGuess = Math.floor(Math.random() * max + min);  
    console.log(`${compGuess}? No`);
    await ask(" is the secret number higher or lower?");
    //the human will enter higher
  
    //if the computers guess is greater than secret number then the computer will have to guess lower
  } else if(compGuess > secretNumber) {
    max = compGuess - 1
    console.log("MAX:", max)
    compGuess = Math.floor(Math.random() * max + min);  
    console.log(`${compGuess}? No`);
    await ask(" is the secret number higher or lower?");
    // the human will enter lower
  
    //computer guessed the secret number and while loop ends with a happy ending
  } else {
    console.log("Yes! supercalifragilisticexpialidocious, you guessed the secret number!!!");
    process.exit();
  }
  }
}

