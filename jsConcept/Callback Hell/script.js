const cart = ['shoes', 'pants', 'kurta', 't-shirt'];

api.createOrder(cart, function () {
	api.proceedToPayment(function () {
		api.showOrderSummary(function () {
			api.updateWallet();
		});
	});
});
//Pyramid of doom
//unreadable & Unmaintainable code

//Inversion of control
//we are giving the control of the program to the callback functions
//we don't know when the callback function will be executed
