// const p = new Promise(function (resolve, reject) {
// 	setTimeout(() => resolve('p resolved'), 2000);
// });

// async function promiseHandler() {
// 	const val = await p;
// 	console.log(val);
// }

// promiseHandler();

// //await can only be used inside an async function
// //async function always returns a promise

// async function createPromise() {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => resolve('p resolved'), 2000);
// 	});
// }

// async function promiseHandler() {
// 	const val = await createPromise();
// 	console.log(val);
// }

// promiseHandler();

// //error handling in async await

// async function promiseHandlerWithCatch() {
// 	try {
// 		const val = await p;
// 		console.log(val);
// 	} catch (err) {
// 		console.error(err);
// 	}
// }

// promiseHandlerWithCatch();

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p1 resolved');
	}, 20000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p2 resolved');
	}, 40000);
});

async function handlePromise() {
	console.log('namastejs0');

	const val = await p1;
	console.log('namastejs1');
	console.log(val);

	const val2 = await p2;
	console.log('namastejs2');
	console.log(val2);
}

handlePromise();

//js doesnt block the call stack
//it just wait for the promise to resolve
//in between the promise is executing in the background
//untill the promise is in await  the function is in a suspended state
//when the promise is resolved the function is resumed
//this is how async await works

const res = fetch('https://jsonplaceholder.typicode.com/posts/1');
console.log(res);
