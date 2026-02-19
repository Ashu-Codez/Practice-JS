// function currying with bind method

// function multiply(x, y) {
// 	return x * y;
// }

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(5));

// const multiplyByThree = multiply.bind(this, 3);
// console.log(multiplyByThree(5));

// function currying with closure

function multiply(x) {
	return function (y) {
		return x * y;
	};
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5));
