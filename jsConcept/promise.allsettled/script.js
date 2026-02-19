const p1 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve('p1 resolved'), 1000);
});

const p2 = new Promise(function (resolve, reject) {
	setTimeout(() => reject('p2 Failed'), 2000);
});

const p3 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve('p3 resolved'), 3000);
});

Promise.allSettled([p1, p2, p3])
	.then(function (value) {
		console.log(value);
	})
	.catch(function (err) {
		console.error(err);
	});
