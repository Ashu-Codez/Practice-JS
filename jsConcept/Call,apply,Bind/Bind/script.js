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

const fn = fullName.bind(name2, 'dehradun', 'Uttarakhand');
fn();
