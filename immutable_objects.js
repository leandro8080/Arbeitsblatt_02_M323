const fsfsf = "['1', '2', '3']";
const person = {
	firstname: "Leonardo",
	lastname: "Schulden",
	age: 6
};

const person2 = { ...person, jsfsf: "fsfs" };
const person3 = { ...person2, jsfsf: "nifnanf" };

const { jsfsf, ...person4 } = person3;

console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);
