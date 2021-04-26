// input
const users = [
  { name: "Rein", age: 33 },
  { name: "Miriam", age: 28 },
  { name: "Elias", age: 2 },
];
// const userNameToFind = "Miriam";

const miriam = users.find((user) => {
  console.log("HOW OFTEN DO I GET CALLED?", user, user.name === "Miriam");
  return user.name === "Miriam";
});

console.log("OUTPUT:", miriam);

// desired output:
// { name: "Miriam", age: 28 }
