// input
const word = "javascript";
const guesses = ["b", "a", "e", "i", "q"];

// desired output output
// array met wrong guesses:
// ["b", "e", "q"]

// steps
// X code schrijven om te checken of 1 letter in het woord zit
// - naar een functie vertalen
// - loopen en de functie uitvoeren voor alle elementen

const letter = "b";
const containsB = word.includes(letter);
// console.log("DOES JAVASCRIPT CONTAIN B:", containsB);

function containsLetter(letter, word) {
  console.log("INPUTS:", letter, word);
}

containsLetter("a", "javascript");
