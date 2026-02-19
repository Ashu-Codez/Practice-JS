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

fullName.apply(name, ['dehradun', 'Uttarakhand']);

// the only difference between call and apply is the way we pass arguments
// in call we pass arguments one by one
// in apply we pass arguments as an array
