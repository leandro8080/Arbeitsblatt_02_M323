/*
const studentGrades = [
	{ name: "Joe", grade: 88 },
	{ name: "Jen", grade: 94 },
	{ name: "Steph", grade: 77 },
	{ name: "Allen", grade: 60 },
	{ name: "Gina", grade: 54 }
];

const getGroupedGrade = (student) => {
	if (student.grade >= 90) {
		return `Excellent Job ${student.name}, you got an a`;
	} else if (student.gradestudent >= 80) {
		return `Nice Job ${object.name}, you got a b`;
	} else if (student.grade >= 70) {
		return `Well done ${student.name}, you got a c`;
	} else if (student.grade >= 60) {
		return `What happened ${student.name}, you got a d`;
	} else {
		return `Not good ${student.name}, you got an f`;
	}
};

const groupedGrades = studentGrades.map(getGroupedGrade);

console.log(groupedGrades);
*/
/*
const rambda = require("./rambda.min.js");
const greet = rambda.curry((greeting, name) => {
	return `${greeting} ${name}`;
});


const goodMorning = greet("Good morning");

const names = ["Leandro", "Jacopo", "Cyrill", "Leonardo"];
console.log(names.map(goodMorning));
*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getLengthImpure() {
	console.log(array.length);
}

function getLengthPure(array) {
	return array.length;
}

getLengthImpure();

console.log(getLengthPure(array));
