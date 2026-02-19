// const name = {
// 	firstName: 'john',
// 	lastName: 'wick',
// 	fullName: function () {
// 		console.log(this.firstName + ' ' + this.lastName);
// 	},
// };

// name.fullName();

// const name2 = {
// 	firstName: 'ballerina',
// 	lastName: 'wick',
// };

const name = {
	firstName: 'john',
	lastName: 'wick',
};

const fullName = function (homeTown, state) {
	console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown + ', ' + state);
};

const name2 = {
	firstName: 'ballerina',
	lastName: 'wick',
};

fullName.call(name, 'dehradun', 'Uttarakhand');

// what if there are arguments
//first argument is the this value and rest are arguments
