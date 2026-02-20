document.querySelector('#grandParent').addEventListener('click', () => {
	console.log('grandParent clicked');
}); //bubbling

document.querySelector('#parent').addEventListener(
	'click',
	() => {
		console.log('Parent clicked');
	},
	true
); //capturing

document.querySelector('#child').addEventListener(
	'click',
	() => {
		console.log('Child clicked');
	},
	false
); //bubbling

//AsDefault we don't pass 3rd argument to the eventListner it is considered to be
//().addEventListener('click',()=>{}, false)

//e.stop.propagation is used stopping to propogate like in bubbling child will not propogate to parent and grand parent and vice versa in capturing the grand parent can not propogate to child

// document.querySelector('#child').addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('Child clicked');
//		e.stopPropogation();
// 	},
// 	false
// );
