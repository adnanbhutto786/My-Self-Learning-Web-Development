// nested if elseee confitionnnn

console.log("Hello World");

let cartItems =parseInt(prompt("How many items are in card"))

let paymentMethod = prompt("Enter a payment method (card/cash)")

if (cartItems > 0){
    if(paymentMethod.toLowerCase() === "card"){
        console.log("✅ Order placed successfull with card payment");
        
    } else {
        console.log("✅ Order placed successfull with cash on delivery");
        
    }
} else {
    console.log("Your cart  is empty, plseas selected items");
    
}
