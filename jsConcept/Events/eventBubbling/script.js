document.querySelector('#grandParent').addEventListener(
	'click',
	() => {
		console.log('grandParent clicked');
	},
	true
);

document.querySelector('#parent').addEventListener(
	'click',
	() => {
		console.log('Parent clicked');
	},
	true
);

document.querySelector('#child').addEventListener(
	'click',
	() => {
		console.log('Child clicked');
	},
	true
);

//AsDefault we don't pass 3rd argument to the eventListner it is considered to be
//().addEventListener('click',()=>{}, false)
