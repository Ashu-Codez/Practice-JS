document.querySelector('#category').addEventListener('click', e => {
	console.log(e.target);
	if (e.target.tagName == 'LI') {
		window.location.href = '/' + e.target.id;
	}
});

document.querySelector('#form').addEventListener('click', evt => {
	console.log(evt);
	if (evt.target.dataset.uppercase != 'undefined') {
		evt.target.value = evt.target.value.toUpperCase();
	}
});
