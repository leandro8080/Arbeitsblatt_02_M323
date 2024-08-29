const rambda = require("./rambda.min.js");
const sentence =
	"PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

function getDigitsOfString(string) {
	const digitArray = string.match(/\d/g);
	return digitArray;
}

function getLengthOfArray(array) {
	return array.length;
}

const countDigitsOfString = rambda.compose(getLengthOfArray, getDigitsOfString);
const digits = countDigitsOfString(sentence);
console.log(digits);
