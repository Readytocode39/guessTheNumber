async function start() {
    //ask computer to play guess my secret number
    console.log("Lets play, guess my secret number... You (the computer), will guess what number you think I might have designated as my secert number.")
    //computer has to guess my secret number
    console.log (await ask("Is your number a random number between 1 and 100 (inclusive)? (Yes/No)\n"));
    console.log("Yes");
    //entering my secert number,which will be stored as a variable (in secretNumber)
    let secretNumber = await ask("What is your secret number?\n");
    console.log('You entered: ' + secretNumber);
    //allowing computer to guess my secret number
    let compGuess = Math.floor(Math.random() * 100 + 1);
    console.log( "Guess a number!" + compGuess)
    
    //creating a while loop that keeps track of number of guesses, computer has up to 7 guesses 
    let guess = 0;
    while(guess <= 7 && compGuess !== secretNumber) {
      console.log(`${compGuess}`);
      guess ++;
    //computers guess needs to be higher
      if (compGuess < secretNumber) {
    //the computer guessed wrong and needs to guess a higher number
      compGuess = await ask(`${compGuess}?`)
      console.log("No")
    //the computer asks if secret number is higher than the guessed number
      compGuess = await ask (" is your secret number higher or lower?")
      console.log("Higher")
    
      //computers guess needs to be lower
    } else if(compGuess > secretNumber) {
      compGuess = await ask(`${compGuess}?`)
      console.log("No")
      compGuess = await ask (" is your secret number higher or lower?")
      console.log("Lower")
    
    //computer guessed the secret number and while loop ends with a congratualtions
    } else {
  
    }
    }
    console.log("Yes! supercalifragilisticexpialidocious, you guessed my secret number!!!")
  }
  
   
  process.exit();