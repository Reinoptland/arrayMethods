// input

const users = [
  { name: "Rein", age: 33 },
  { name: "Elias", age: 2 },
  { name: "Miriam", age: 28 },
];

// output:
// sorted by age ascending
// const users = [
//   { name: "Elias", age: 2 },
//   { name: "Miriam", age: 28 },
//   { name: "Rein", age: 33 },
// ];

const sortedByAge = users.sort((userA, userB) => {
  console.log("INPUT:", userA, userB);
});
