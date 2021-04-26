// input

const users = [
  { name: "AAARein", age: 33 },
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
  console.log("INPUT:", userA.age, userB.age, userA.age - userB.age);

  return userA.age - userB.age;
  // return value:
  // positief getal -> userA omlaag
  // negatief getal -> userA omhoog
  // 0 -> userA blijft op dezelfde plaats
});

console.log("OUTPUT:", sortedByAge);

const sortedByName = users.sort(function (userA, userB) {
  return userA.name.localeCompare(userB.name);
});

console.log(sortedByName);
