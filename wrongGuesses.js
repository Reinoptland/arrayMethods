// input
const word = "javascript";
const guesses = ["b", "a", "e", "i", "q"];

// desired output output
// array met wrong guesses:
// ["b", "e", "q"]

// steps
// X code schrijven om te checken of 1 letter in het woord zit
// x naar een functie vertalen
// - loopen en de functie uitvoeren voor alle elementen

const letter = "b";
// console.log("DOES JAVASCRIPT CONTAIN B:", containsB);

function containsLetter(letter) {
  console.log("INPUTS:", letter, word);
  const isLetterInWord = word.includes(letter);
  console.log(isLetterInWord);
  return isLetterInWord;
}

const containsA = containsLetter("a", "javascript");
console.log(containsA);

let wrongGuesses = [];

for (let index = 0; index < guesses.length; index++) {
  const guess = guesses[index];
  const isGuessInWord = containsLetter(guess, word);
  console.log(
    "1 GUESS AT A TIME:",
    guess,
    "IS THIS GUESS CORRECT:",
    isGuessInWord
  );
  if (isGuessInWord === false) {
    wrongGuesses.push(guess);
  }
}

console.log(wrongGuesses);

const correctGuessesEZMODE = guesses.filter(containsLetter);

console.log("OUTPUT FILTER:", correctGuessesEZMODE);
