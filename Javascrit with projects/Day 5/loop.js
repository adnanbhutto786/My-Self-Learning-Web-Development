console.log("LOOP START");

// FOR LOOP............
// for (start; condition; increment/decrement) {
//      code repeat hoga
// }

//print 1 to 10 number:

for (let i = 1 ; i <= 10 ; i++ ){
   console.log(i);
   
}

// let students = ["ALI" , "HASAN" , "UMAIR" , "SHAHZAIB" , "IQBAL"]
// for ( i = 0 ; i < students.length ; i++){
//    console.log(students[i]);
   
// }

let students = ["Ali", "Adnan", "Sara", "Usman", "Zain"];

for (let i = 2; i < students.length; i++) {
    console.log(students[i]);
}

// let price = [600 , 600 , 300 , 255]
// let total = 0;

// for ( let i=0 ; i < price.length; i++){
//    total += price[i]
// }

// console.log("Total bills: " +total);


// let cart_item_price = [500 , 300 , 500 , 300 , 900 ];
// let cart_total_price = 0 ;

// for ( let i = 0 ; i < cart_item_price.length ; i++){
//    cart_total_price += cart_item_price [i]
// } 
// console.log("Cart Total price:" +cart_total_price );


// let marks = [ 90 , 50 , 40 , 80 , 70 , 99]
// let total_marks = 0;

// for ( let i = 0 ; i < marks.length; i++){
//    total_marks += marks[i]
// }


// let percentage = (total_marks/ 600) * 100 ;
// console.log("Percentage:" , percentage);



let price = [900 , 500 , 500 , 900 , 900]
let Total_price = 0

for ( let i = 0 ; i <price.length ; i++){
   Total_price += price[i]
}
console.log("Total price:" , Total_price);


let marks = [ 90 , 60 , 30 , 50 , 86];
let total_marks = 0 ;

for ( let i = 0 ; i < marks.length ; i++){
   total_marks += marks [i] 
}

let percentage = (total_marks / 500) * 100
console.log("percentage: " , percentage);

 
// even number
for ( let i = 2 ; i < 10 ; i +=2){
   console.log(i);
   
}

for ( let i = 1 ; i < 10 ; i += 2){
   console.log(i);
   
}

for ( let i = 10 ; i >= 1 ; i--){
   console.log(i);
   
}










