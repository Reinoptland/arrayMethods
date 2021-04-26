// input
const users = [
  { name: "Rein", age: 33 },
  { name: "Miriam", age: 28 },
  { name: "Elias", age: 2 },
];
// const userNameToFind = "Miriam";

const miriam = users.find((user) => {
  console.log("HOW OFTEN DO I GET CALLED?", user, user.name === "Miriam");
  if (user.name === "Miriam") {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", miriam);

// desired output:
// { name: "Miriam", age: 28 }
