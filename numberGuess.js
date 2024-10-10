function numberGuess() {
    const secretNumber = Math.floor(Math.random() * 10) +1;
    let guess = 0;

    while (guess !==secretNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (guess > secretNumber) {
            alert("Too high!");
        } else if (guess < secretNumber) {
            alert("Too low!")
        } else {
            alert("You guessed it! The number was" + secretNumber);
        }
    }
}    