// americanGrade: "A", "F", "BLA"
// return value: 9, 5, null

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
const europeanGrade1 = toEuropeanGrade("A+");

// console.log("YOU GOT THE FOLLOWING GRADE:", europeanGrade1, "in european");

// input: ["A", "F", "C", "D"]
// output: [9, 5, 7, 6]

const americanGrades = ["A", "F", "C", "D"];

for (let index = 0; index < americanGrades.length; index++) {
  // index: 0, 1, 2, 3,
  const americanGrade = americanGrades[index];
  console.log("1 AMERICAN GRADE AT A TIME:", americanGrade);
}
