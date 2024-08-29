const array = [
	{ id: 1, name: "Leandro" },
	{ id: 2, name: "Jacopo" },
	{ id: 3, name: "Cyrill" },
	{ id: 4, name: "Noah" }
];
const array2 = [...array, { id: 5, name: "Luis" }];

const changeNameOf1 = (object) => {
	if (object.id === 1) {
		return { ...object, name: "Leonardo" };
	} else {
		return object;
	}
};

const array3 = array2.map(changeNameOf1);

const removeSmallest = (object) => {
	console.log(object.id);
	return object.id !== array2.sort()[0].id;
};

const array4 = array2.filter(removeSmallest);

const reviews = [
	4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0
];

const getTotal = (sum, number) => {
	return sum + number;
};

const reviewsTotal = reviews.reduce(getTotal);
const reviewsAvarage = reviewsTotal / reviews.length;

const groupedReview = (groups, grade) => {
	const { good = 0, ok = 0, bad = 0 } = groups;
	if (grade >= 4) {
		return { ...groups, good: good + 1 };
	} else if (grade >= 2.5) {
		return { ...groups, ok: ok + 1 };
	} else {
		return { ...groups, bad: bad + 1 };
	}
};

const reviewsText = reviews.reduce(groupedReview, {});

console.log(array);
console.log(array2);

console.log(array3);

console.log(array4);

console.log(reviewsAvarage);

console.log(reviewsText);
