const users = [
  { name: "Rein", age: 33 },
  { name: "Elias", age: 2 },
  { name: "Miriam", age: 28 },
];

const adults = users.filter((user) => {
  console.log("HOW OFTEN DO I GET CALLED?", user, user.age >= 18);
});
