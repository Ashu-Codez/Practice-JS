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

createOrder(cart)
	.then(orderId => proceedToPayment(orderId))
	.then(paymentId => showOrderSummary(paymentId))
	.then(orderSummary => updateWallet(orderSummary));
