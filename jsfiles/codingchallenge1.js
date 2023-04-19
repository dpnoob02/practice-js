//Assignment 1
let markHeight, markWeight;
let johnHeight, johnWeight;
let markBMI, johnBMI;

markHeight = 1.69
markWeight = 78

markHeight = 1.92
markWeight = 95

function calBMI(height, weight) {
	return weight / (height ** 2);
}

markBMI = calBMI(1.69, 78)
johnBMI = calBMI(1.92, 95)

var b;
if (markBMI > johnBMI) {
	b = true;
}
console.log(markBMI)
console.log(johnBMI)

console.log(b)
