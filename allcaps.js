// input
const greetings = ["hello", "hi", "how are you"];

// output: ["HELLO", "HI", "HOW ARE YOU"]
// transformatie: toUpperCase()

const allCaps = greetings.map((greeting) => {
  console.log("1 greeting", greeting.toUpperCase());
  console.log("HOW OFTEN DO I GET CALLED?");

  return greeting.toUpperCase();
});

console.log("WHAT DOES THE OUTPUT ARRAY CONTAIN?", allCaps);

// predictions:
// ["HELLO", "HI", "HOW ARE YOU"]
// ["hello", "hi", "how are you"]
//
