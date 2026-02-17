// const promise = createOrder(cart);

// promise.then(function (orderId) {
// 	proceedToPayment(orderId);
// });
//promise is an object that represents the eventual completion or failure of an asynchronous operation

// fetch returns a promise

//const promise = fetch('https://jsonplaceholder.typicode.com/posts');

//console.log(promise);

//promise chaining

// createOrder(cart)
// 	.then(function (orderId) {
// 		return proceedToPayment(orderId);
// 	})
// 	.then(function (paymentId) {
// 		return showOrderSummary(paymentId);
// 	})
// 	.then(function (orderSummary) {
// 		return updateWallet(orderSummary);
// 	});

// createOrder(cart)
// 	.then(orderId => proceedToPayment(orderId))
// 	.then(paymentId => showOrderSummary(paymentId))
// 	.then(orderSummary => updateWallet(orderSummary));

//creating new promise

const cart = ['shoes', 'pants', 'kurta', 't-shirt'];

createOrder(cart)
	.then(function (orderId) {
		console.log(orderId);
		return proceedToPayment(orderId);
	})
	.catch(function (err) {
		console.log(err.message);
	})
	.then(function (paymentInfo) {
		console.log(paymentInfo);
		return showOrderSummary(paymentId);
	})
	.catch(function (err) {
		console.log(err.message);
	})
	.then(function (orderSummary) {
		console.log(orderSummary);
		return updateWallet(orderSummary);
	})
	.catch(function (err) {
		console.log(err.message);
	})
	.then(function (walletInfo) {
		console.log(walletInfo);
	});

function createOrder(cart) {
	const promise = new Promise(function (resolve, reject) {
		if (!validateCart(cart)) {
			const err = new Error('Cart is not valid');
			reject(err);
		}

		orderId = '12345';

		if (orderId) {
			setTimeout(function () {
				resolve(orderId);
			}, 5000);
		}
	});
	return promise;
}

function proceedToPayment(orderId) {
	return new Promise(function (resolve, reject) {
		console.log('proceeding to payment');
		paymentId = orderId;
		resolve(paymentId);
	});
}

function showOrderSummary(paymentId) {
	return new Promise(function (resolve, reject) {
		console.log('showing order summary');
		resolve('order summary');
	});
}

function updateWallet(orderSummary) {
	return new Promise(function (resolve, reject) {
		console.log('updating wallet');
		resolve('wallet updated');
	});
}

function validateCart(cart) {
	return false;
}
