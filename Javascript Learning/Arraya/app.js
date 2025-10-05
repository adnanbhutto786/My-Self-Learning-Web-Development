let fruite = ["apple" , "banana" , "mangoes"]

console.log(fruite[2]);
console.log(fruite.length);

fruite.push = "orange"
console.log(fruite.push);


let cities = [ "karachi" , "islambad" , "punjab" , "nawabsha"]
console.log(cities);
console.log("total cities" , cities.length);

let numbers = [ 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]
console.log("first number:", numbers[3]);
console.log("second number" , numbers[2]);
console.log("Length:", numbers.length);
console.log("add a number" , numbers, numbers.push = 110);
numbers [4] = 667;
console.log("update list", numbers);

//change a elementtt
let cars = [ "Honda" , "civic" , "suzuki" , "Bmw"];
cars[2] = "ferrari"
console.log(cars, cars.length);

 //add a elment
let books = [ "Math" , "scince" , "english"]
books.push = "urdu"
console.log(books);


/// remove element of end pop

let games = [ "Cricket" , "football" , "hockey" , "tanisss"]
console.log(games);
games.pop()
console.log( games, games.pop(0));

    
//add a element start /// unshuift

let colors = [ "red" , "blue" , "orange"]
colors.unshift = "black"
console.log(colors);

// remove element at start

let animals = [ "cat" , "dog" , "monkey" , "elefanatt"]
animals.shift();
console.log(animals);


/// find indexof of element

let countries = [ "pakistan" , "india" , "newzlanad" , "australia"]

console.log(countries.indexOf("australia"));


/// loop through array 

let studnets = [ "ali" , "sana" , "toba"]
for ( i=0 ; i <studnets.length; i++){
    console.log("student record:", studnets[i]);   
}


//Create → shopping cart

// Access → playlist songs

// Update → student attendance

// Push → naya order add

// Pop → last order ship

// Unshift → urgent task add

// Shift → first passenger serve

// IndexOf → product search


// 1. Crate array.... shoppng cart

let carts = [ "Eggs" , "Bread" , "Milk"]
console.log("🛒 Current cart: ", carts);


// 2. access array of elements

let playlist = [ "song 1" , "song 2" , "song 3" , " song 4" , "song 5"]
console.log("▶️ Now playing:", playlist[0]);
console.log("⏭️ Next song:" , playlist[1]);


// 3. update arrayy 

let studentss = [ "Ahmed" , "Arslan" , "asif ali" , "junied jamshid"]
studentss [2] = "asif ali (absent)"
console.log("Attandance:".studentss);


// 4. Add at end pushh

let newCart = [ "items#101" , "items#102" , "items#103"]
newCart.push = "items#104"
console.log("Order list", newCart);

// 5 remove form end pop  last order shiffted

let orderss = ["item#123" , "item1234" , "item12345"]
let shiped = orderss.pop()
console.log("Shiped:" , shiped);
console.log("Remaing orders:", orderss);

/// add at start  (unshift)

let tasks = ["Code review" , "depoloy website"]
tasks.unshift("solve all bugs for progrmming language")
console.log("Today tasks:", tasks);



/// remove from the start    //shift 

let queue = [ "passengers 1" , "passengers 2" , "passengers 3"]
let served = queue.shift();
console.log("served", served);
console.log("waiting:", queue);


// find inder search examplleee

let products = ["Laptop", "Mobile", "Tablet"];
let find = products.indexOf("Mobile");

if (find !== -1) {
  console.log("📱 Mobile found at position:", find);
} else {
  console.log("❌ Product not found");
}



for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

/// student names input

// let students = []
// for ( i=0 ; i<3 ; i++){
//     let name =prompt("Enter your name")
//     students.push(name)
// }
// console.log("students", students);


// let cart = []
// for ( i=0 ; i<4; i++){
//     let item =prompt("Enter your product item")
//     cart.push(item)
// }
// console.log("🛒 Cart:" , cart);

//exam marks storage

// let marksresult = []
// for ( i=0 ; i < 3; i++){
//     let m =parseInt(prompt("Enter your marks"))
//     marksresult.push(m)
// }
// console.log("Marks::" , marksresult);

// let movies = [];
// for (let i = 0; i < 3; i++) {
//     let mov = prompt("Enter your movie name:");
//     movies.push(mov);
// }
// console.log("Bollywood Movies:", movies);


let songs = [ "song 1" , "song 2" , "song 3" , "song 4" , "song 5"]
for(let i = 0 ; i < songs.length ; i++){
  console.log("Songs are playing ▶️✅");
  
}

let sing = []

let totalsing =parseInt(prompt("how many songs are playing"))
for ( i = 0 ; i < totalsing ; i++){
  let songName = prompt("enter your song name")
  sing.push(songName)
}

for( i=0  ; i < sing.length ; i++){
  console.log("playing songsssssssss" ,sing);
  
}