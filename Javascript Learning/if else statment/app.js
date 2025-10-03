// let num1 = prompt("Enter your first number:")
// num1=parseFloat(num1);
// let num2 = prompt("Enter your first number:")
// num2=parseFloat(num2);
// let sum = num1 +  num2
// console.log("sum" , sum);

// if else statment

// let age = 18
// if (age >= 18){
//     console.log("You are elfible for vote.");   /// mean age yah tw 18 ka equal ho yah tw 18 say above       
// }

// age = 45                       // 45 30 say  bara hoga tw true first condition chalaa gii
// if (age >= 30){
//     console.log("You are elgible");
    
// } else {
//     console.log("sorry you are young.");
    
// }

  //grading system
let marks =  91
if (marks >= 90){
    console.log("A++ Grade 4 gpa");
    
}else if ( marks >= 80){
    console.log("A grade 3.5 gpa");
    
} else if (marks >= 70){
    console.log("B grade 3 Gpa");
    
} else {
    console.log("fail");
    
}

// weather checked

let temperature = 14
if ( temperature >= 40){
    console.log("Today weather is very hot");
    
} else if ( temperature >= 30){
    console.log("The weather is warm");
    
} else if ( temperature >= 25){
    console.log("It is pleasent day");
    
} else if ( temperature >=15){
    console.log("It is beauiful day");
    
}else {
    console.log("It is Cold Outside.");
    
}


//  login system

let username = "Addnan"
let password = "1234"

if (username === "Adnan" && password === "1234"){
    console.log("Succesfull✅");
    
} else if (username === "Addnan"){
    console.log("Wrong password ❌");
    
} else{
    console.log("user not found");
    
}

let age = 1
if (age >= 35){
    console.log("You are Man");
    
} else if ( age >= 25){
    console.log("you are child");
     
} else if ( age >= 18){
    console.log("You are smart boy.");
    
} else if ( age >= 12){
    console.log("You are little boy");
    
} else if ( age >=8){
    console.log("You are elgible for primary school");
    
} else {
    console.log("You are Baby.............................................😂");

    
}

// traffic light 

let light = "ornage"
if ( light === "red"){
    console.log("Stop your bus 🚦");
    
} else if ( light === "yellow"){
    console.log("Ready for you");
    
} else if ( light === "green"){
    console.log("Go for you ");
    
} else {
    console.log("Invalid Signal !");
    
}


///discount

let total = 1999
if ( total >= 5000){
    console.log("You got 30% discount.");
    
} else if ( total >= 4000){
    console.log("You got 20% discount");
    
} else if ( total >= 3000){
    console.log("You got 10% discount");
    
} else if ( total >= 2000){
    console.log("You got 4% discount");
    
} else {
    console.log("Sorry your budget is low and discount not offer..");
    
}


let Age = 34
if ( Age <= 12){
    console.log("Ticket price: 250 PKR");
    
} else if ( Age <= 18){
    console.log("Ticket price: 300 PKR");
    
} else if ( Age <= 25){
    console.log("Ticket price 600 PKR");
    
} else if ( Age <= 40) {
    console.log("Ticket price: 1200 PKR");
    
}else if ( Age <= 60){
    console.log("Ticket price: 2000 PKR");
    
} else {
    console.log("Ticket price: 100 PKR");
    
}

// ONLINE PAYMENT METHOD

let method = "another";
if ( method === "easypaisa"){
    console.log("Payment via Easypaisa");
    
} else if (method === "jazzcash"){
    console.log("Payment via Jazzcash");
    
} else if ( method === "paypal"){
    console.log("Payment via paypal");
    
} else if (method === "card"){
    console.log("Payment via Credit/Debit Card");
    
} else {                            /// dono same ho value aur type dono same ho aghr ak 5 "5" false hoga es me
    console.log("Invalid Payment method");
    
}


// balance check

let balance = 9999;

if (balance >= 10000) {
  console.log("Your balance is Excellent 💰");
} else if (balance >= 5000) {
  console.log("Your balance is Good 🙂");
} else if (balance >= 1000) {
  console.log("Your balance is Low ⚠️");
} else {
  console.log("Insufficient Balance ❌");
}

// camprsion opeatorrrrrrrrrrrrr



let storedPassword = "abc123"
let input = "abc123"
if ( input === storedPassword){
    console.log("Login Successfully ✅");
    
} else if (input.toLowerCase()=== storedPassword.toLowerCase()){
  console.log("Case only differnce please chekced password");
    

}else {
    console.log("Wrong Password ❌");
    
}

// == mean dono value equal honi chaiya

let pri = 5
let pri2 = "5"
if (pri == pri2){
    console.log("true");
    
}else{                                  // dono value same honi chaiyaaaaaa aur value same ho type check mi karta

    console.log("faLse");
    
}

