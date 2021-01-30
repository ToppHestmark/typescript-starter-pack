// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // An example of a Tuple mark
// } = {
//   name: "Topp",
//   age: 31,
//   hobbies: ["Book", "Yoga"],
//   role: [2, "professor"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Topp",
  age: 31,
  hobbies: ["Book", "Yoga"],
  role: Role.ADMIN,
};

// person.role.push("admin");
person.role[1] = "Student"; // Somehow this replaced 'professor'

let favoriteActivities: string[];

console.log(person.name);
console.log(person.role);

for (let hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
