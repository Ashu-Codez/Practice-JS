const radius = [2, 4, 8, 10];

const area = function (radius) {
	return Math.PI * radius * radius;
};

const diameter = function (radius) {
	return radius * 2;
};

const circimference = function (radius) {
	return 2 * Math.PI * radius;
};

Array.prototype.calculate = function (logic) {
	const output = [];
	for (let i = 0; i < this.length; i++) {
		output.push(logic(this[i]));
	}
	return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(diameter));
console.log(radius.calculate(circimference));
