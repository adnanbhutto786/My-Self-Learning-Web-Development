// console.log("Hello");


//  splice( ) — Add / Remove / Replace Elements


let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1 , 2)
console.log(fruits);


let colors = ["Red", "Green", "Blue"];
colors.splice ( 3 , 0 , "yellow")
console.log(colors);   // es case me 1 apni jaa hoga es sy pahla new add hoga beach wala count 0 hona chaiya agaya add hoga



let personalNames = ["ahmed" , "zain" , "muzmmail"]
personalNames.splice ( 1 , 1 , "boom boom afradi")
console.log(personalNames);   // same value pa ak cheez remove hoker replace hojaya gi



///  slice( ) — Copy a Portion of Array
/// array.slice(startIndex, endIndex)


let fruitss = ["Apple", "Banana", "Mango", "Orange"];   //jahan say start hoga uska and tak pah;la sdayu

let selected = fruitss.slice(1 , 1)

console.log(selected);   /// matlab 1 aur 2 me beach me jo  values aayaengi



let customerId = [ 11 , 22 , 44 , 66 , 73 , 77 ,45 , 40]

let selctedNumber = customerId.slice (1 ,  5)
console.log(selctedNumber);




///Copy Full Array 

let colorsCollection = ["red" , "pink" , "orange" , "purple" , "dark brown"]
let newColors = colorsCollection.slice();
console.log(newColors);


// 3. indexOf( ) — Find Index of a Value



let cartItems = [ "soap" , "coffee" , "toys" , "cold drink"]
console.log(cartItems.indexOf("egg"));   ///index aghar na mila tw -1 return hoga


//includes define true and false  value return if value can be exits

console.log(cartItems.includes("egg"));
console.log(cartItems.includes("cold drink"));



let cartBox = ["watch" , "piece", "grapes" , "round" ]

cartBox.splice(2 , 0 , "perfume")

if  ( cartBox.includes("grapes")){
   console.log("garpes in your cart");
   
}
else {
   console.log("check list");
   
}

cartBox.pop()

console.log(cartBox);







let basicSubject = ["computer science" , "decreate math" , "urdu" , "English" ]


basicSubject.splice(2 , 0 , "DLD Lab")

if (basicSubject.includes("urdu")) {
   console.log("Yes urdu can be exist in array");
   
} else {
   console.log("invalid list varibale");
   
}

basicSubject.pop()
console.log(basicSubject);

console.log(basicSubject.indexOf("computer science"));



let shoppingList = ["Milk" , "Bread" , "Eggs"]
shoppingList.push("Better")
shoppingList.unshift("Tea")

shoppingList.splice ( 2 , 1 , "Cheese")
console.log(shoppingList);


console.log("Is Eggs in list" , shoppingList.includes("Eggs"));
console.log("index of milk" , shoppingList.indexOf("Milk"));


 






















