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
  console.log("Lets play, guess the secret number... You (the human), will guess what number you think I (the computer) might have designated as a secert number.");
  //computer enters secert number, which will be stored as a variable (in compsecretNumber)
  let compSecretNumber = Math.floor(Math.random() * 100 + 1)
  console.log("Secret number is: " + compSecretNumber)
  let humanGuess = await ask ("Please enter your guess:")
  let min = 1
  let max = 100

  while(humanGuess !== compSecretNumber) {
    
    //if the humans guess is less than computer secret number then the human will have to guess higher
    if (humanGuess < compSecretNumber) {
        min = humanGuess + 1
        humanGuess = await ask("Please enter your guess:")
        console.log(`${humanGuess}?`);
        await ask("sorry, you need to guess higher");
   
  
    //if the humans guess is greater than computer secret number then the human will have to guess lower
  } else if(humanGuess > compSecretNumber) {
    max = humanGuess - 1
    humanGuess = await ask("Please enter your guess:")
    console.log(`${humanGuess}?`);
    await ask("sorry, you need to guess lower");

  
    //human guessed the secret number and while loop ends with a happy ending
  } else {
    console.log("Yes! supercalifragilisticexpialidocious, you guessed the secret number!!!");
    process.exit();

  }
  }
  
}




