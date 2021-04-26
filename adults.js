const users = [
  { name: "Rein", age: 33 },
  { name: "Elias", age: 2 },
  { name: "Miriam", age: 28 },
];

const adults = users.filter((user) => {
  console.log("HOW OFTEN DO I GET CALLED?", user, user.age >= 18);
  // when true is returned -> we keep it
  // when is false is returned -> we filter it out
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", adults);
