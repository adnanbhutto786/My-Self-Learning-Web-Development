console.log("Hello World");


// let name = prompt("Enter your name")
// alert("My name is "+ name)

// let age = prompt("Enter yout age")
// let nextAge = parseInt(age)-1
// alert("YOU will next year age " + nextAge)



//square of to number''

// let  num = prompt("Enter your number")
// let square = num * num * num
// alert("Square of two number is "+ square);



// let num1 = prompt("Enter your number")
// num1=parseFloat(num1)
// let num2= prompt("Enter your number")
// num2=parseFloat(num2)
// // let sum = Number(num1) + Number(num2)

// let sum = num1 + num2
// console.log("Sum " + sum);

// let sub = num1 -  num2
// console.log("subtraction: " + sub);


// let product = num1 * num2
// console.log("Multiplication: " + product);

// let divison = num1 / num2;
// console.log("Divison " + divison);


// Coffee Shop Order Program

let customerName = prompt("Enter your name:");
let product = prompt("What would you like to order? (Coffee / Tea / Juice)");
let quantity = parseInt(prompt("Enter quantity:"));

let price;

// Product price set karna
if (product.toLowerCase() === "coffee") {
  price = 200;
} else if (product.toLowerCase() === "tea") {
  price = 100;
} else if (product.toLowerCase() === "juice") {
  price = 150;
} else {
  price = 0;
  console.log("Sorry, we don't have " + product);
}

if (price > 0) {
  let total = price * quantity;

  console.log("------ Order Summary ------");
  console.log("Customer: " + customerName);
  console.log("Product: " + product);
  console.log("Quantity: " + quantity);
  console.log("Price per item: " + price + " PKR");
  console.log("Total Bill: " + total + " PKR");
  console.log("---------------------------");
}






