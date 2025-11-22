// ✅ splice()
// Yeh array me:
// remove bhi karta hai
// add (insert) bhi karta hai
// replace bhi karta hai
// Ek hi method me 3 kaam!

//basic syantax
// array.splice(startIndex, deleteCount, item1, item2, ...);


var fruits = ["Apple", "Banana", "Mango", "Orange" , "peak" , "grapes" , "ambroat" , "cake" ];

fruits.splice (2 , 4 )
console.log(fruits);



var languages = ["HTML", "CSS", "Bootstrap" , "tailwand css" , "Node js" , "React"];
languages.splice(2, 4, "JavaScript" , "React js");

console.log(languages);

// delct count zero pa kcuh deklect  ni hoga'



var food = ["Biryani", "Karahi", "Burger"];

food.splice(2, 0, "Pizza");
// index 2 → 1 item delete, “Pizza” add

console.log(food);


var tasks = ["Wake up", "Study", "Gym" , "lunch"];

tasks.splice(1, 3, "JavaScript" , "Sleep");

console.log(tasks);


var playlist = ["Song1", "Song2", "Song4"];

playlist.splice(2, 0, "Song3");

console.log(playlist);

// 1) REMOVE items using splice()





