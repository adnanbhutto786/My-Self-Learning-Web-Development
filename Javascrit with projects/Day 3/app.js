// var myname = prompt("what's your name:")
// console.log(`My name is ${myname}`);


// var a =prompt("Enter your number a")
// a=parseInt(a)
// var b =prompt("Enter your number b")
// b=parseInt(b)
// var c =prompt("Enter your number c")
// c=parseInt(c)
// var d =prompt("Enter your number d")
// d=parseInt(d)

// var total_marks = 400;
// var obtain_marks = a + b + c + d
// var percentage = (obtain_marks/total_marks) * 100;
// console.log("obtain_marks" ,obtain_marks);
// console.log("percentage of student: " , percentage);


// var a = prompt("Enter your number a");
// a = parseInt(a);

// var b = prompt("Enter your number b");
// b = parseInt(b); // ✅ You were mistakenly assigning this to 'a'

// var c = prompt("Enter your number c");
// c = parseInt(c); // ✅ Again, mistakenly assigned to 'a'

// var d = prompt("Enter your number d");
// d = parseInt(d);

// var total_marks = 400;
// var obtain_marks = a + b + c + d;
// var percentage = (obtain_marks / total_marks) * 100;

// console.log("Obtain Marks:", obtain_marks);
// console.log("Percentage of Student:", percentage);


// var age = prompt("Enter your age");

// if (age <= 18) {
//   console.log("You are eligible for CNIC.")
// } else {
//   console.log("You are not eligible yet.");
// }

console.log(5 == "5");             ///campare only value ignore data type


// var userAge = prompt("Enter your age:")
// if (userAge == 18){
//   console.log("Go for picnic");
  
// }
//  else {
//   console.log("Not go for picnic");
  
//  }


//  var gender = prompt("Enter gender (M/F):");
// if (gender == "M") {
//   console.log("Male selected");
// }
// else {
//   console.log("Female selected");
  
// }



// var picnic = prompt("show your ticket code (Ae/be):");

// if (picnic == "Ae"){
//   console.log("You go for picnic ");
  
// } else {
//   console.log("you are not going to picnic");
  
// }


// var num = 18;

// if (num != 15) {
//   console.log("The number is not 15.");   /// not equal only value equal hoo
// }

// “User login hua ya nahi?”

// “Payment successful hui ya fail?”

// “Product stock me hai ya out of stock?”

// var temp = prompt("Enter your temperature")

// if ( temp > 30){
//   console.log("It is hot day");
  
// }
// else {
//   console.log("It is cold day");         
  
//                      weather appp mee use case}

// var yourName = prompt("What's your name?");
// var a = parseInt(prompt("Enter the marks of Math"));
// var b = parseInt(prompt("Enter the marks of English"));
// var c = parseInt(prompt("Enter the marks of Computer"));
// var d = parseInt(prompt("Enter the marks of Physics"));

// var total_marks = 400;
// var obtain_marks = a + b + c + d;
// var percentage = (obtain_marks / total_marks) * 100;

// console.log(`Name: ${yourName}`);
// console.log(`Obtained Marks: ${obtain_marks}`);
// console.log(`Percentage: ${percentage.toFixed(2)}%`);

// if (percentage >= 90 && percentage <= 100) {
//   console.log("Grade: A+ | GPA: 4.00");
// } else if (percentage >= 85 && percentage <= 89) {
//   console.log("Grade: A  | GPA: 3.75");
// } else if (percentage >= 80 && percentage <= 84) {
//   console.log("Grade: A- | GPA: 3.50");
// } else if (percentage >= 75 && percentage <= 79) {
//   console.log("Grade: B+ | GPA: 3.25");
// } else if (percentage >= 70 && percentage <= 74) {
//   console.log("Grade: B  | GPA: 3.00");
// } else if (percentage >= 66 && percentage <= 69) {
//   console.log("Grade: B- | GPA: 2.75");
// } else if (percentage >= 63 && percentage <= 65) {
//   console.log("Grade: C+ | GPA: 2.50");
// } else if (percentage >= 60 && percentage <= 62) {
//   console.log("Grade: C  | GPA: 2.00");
// } else if (percentage >= 55 && percentage <= 59) {
//   console.log("Grade: C- | GPA: 1.50");
// } else {
//   console.log("Grade: F  | GPA: 0.00");
// }


// var isMember = prompt("Are you member this community ( yes / no )");
// var totalBill = prompt("Enter your amount");
// totalBill=parseFloat(totalBill);

// if (isMember === "yes") {
//   if (totalBill  > 1000) {
//     console.log("You get a 20% discount!");
//   } else {
//     console.log("You get a 10% discount!");
//   }
// } else {
//   console.log("Join membership to get discounts!");

///  aghar member howa aur bill 1000 say zayida hoga 20% discount otherwise less than 1000 say kam pa 10%
// use case e ecommerce website
// }



// var password = prompt("Enter your password (admin123)")

// if ( password === "admin123"){
//   console.log("login Successfull");
  
// }
//  else {
//   console.log("login Field");
  
//  }    mostly use case login form


// var age = prompt ( "Enter your age?")
// age = parseInt(age);

// var hasID = prompt("You have nic (yes / no)")

// if ( age > 18 && hasID === "yes"){
//   console.log("You go for vote");
  
// }
//  else {
//   console.log("Not Eligible");
  
//  }

var userAge = 20;
var hasLicense = true;
var isDrunk = false;

if (userAge >= 18 && hasLicense === true && isDrunk === false) {
  console.log("You can drive safely!");
} else if (isDrunk === true) {
  console.log("You are not allowed to drive!");
} else {
  console.log("You are too young to drive!");
}
 
 













