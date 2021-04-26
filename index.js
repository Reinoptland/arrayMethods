const americanGrades = ["A", "F", "C", "D"];

// input: "A", "F"
// output: 9, 5

const input = "B";
let output;
function toEuropeanGrade(americanGrade) {
  switch (americanGrade) {
    case "A+":
      return 10;
    case "A":
      return 9;
    case "B":
      return 8;
    case "C":
      return 7;
    case "D":
      return 6;
    case "F":
      return 5;

    default:
      console.log("This is not an american grade, sorry");
      return null;
  }
}

const europeanGrade = toEuropeanGrade("B");

console.log("YOU GOT AN:", europeanGrade, "in european");
