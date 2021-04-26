const americanGrades = ["A", "F", "C", "D"];

// input: "A", "F"
// output: 9, 5

const input = "C";
let output;

switch (input) {
  case "A+":
    output = 10;
    break;
  case "A":
    output = 9;
    break;
  case "B":
    output = 8;
    break;
  case "C":
    output = 7;
    break;
  case "D":
    output = 6;
    break;
  case "F":
    output = 5;
    break;

  default:
    console.log("This is not an american grade, sorry");
    break;
}

console.log("YOU GOT AN:", output, "in european");
