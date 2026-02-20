// Storing data
localStorage.setItem('username', 'Ashu');
// Retrieving data
const user = localStorage.getItem('username');
console.log(user);

// if we are storing objects in local storage we need to convert them to json
const user = { name: 'Ashu', age: 20 };
localStorage.setItem('user', JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);

//stringfy=>object to string
//parse=>string to objectS

//local storage is persistent it will not clear even if we close the browser
//session storage is not persistent it will clear if we close the browser

// Storing data
sessionStorage.setItem('isLoggedIn', 'true');
// Retrieving data
const loginStatus = sessionStorage.getItem('isLoggedIn');
console.log(loginStatus); // Output: true

//remove item
