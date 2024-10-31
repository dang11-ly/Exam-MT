let theFavNumber = 10; 

let guess = prompt("Guess my favorite number:");
while (parseInt(guess) !== theFavNumber) {
  if (parseInt(guess) > theFavNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("Too low! Try again.");
  }
  guess = prompt("Guess again:");
}
console.log("You guessed it! My favorite number is", theFavNumber);
