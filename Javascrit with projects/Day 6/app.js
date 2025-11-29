console.log("Hello World");


// 1 to 20 no print
for ( let i = 1 ; i <= 20; i++){
   console.log(i);
   
   
}

// revserse ak say 20

for ( let i = 20 ; i >=1 ; i--){
   console.log(i);
   
}
//even number

for ( let i = 2 ; i < 50 ; i +=2){
   console.log(i);
   
}

// odd number


for ( let i = 1 ; i < 50 ; i += 2){
   console.log(i);
   
}



// 9 table print with loop

for ( let i =1 ; i < 10 ; i++){
   console.log(9 * i);
   
}


let fruiteArray = [ "apple" , "mangoes" , "orange" , "peak"];

for ( let i =0 ; i < fruiteArray.length ; i++){
   console.log(fruiteArray[i]);
   
}


let games = ["cricket" , "football" , "tennis" , "hockey"];

for ( let i = 0 ; i < games.length; i++){
   console.log(games[i]);
   
}


let sumArray = [ 34 , 56 , 54 , 34 , 56]
let sum = 0 ;

for ( let i = 0 ;  i < sumArray.length; i++){

   sum = sum + sumArray [i]

}

console.log("sum of array" , sum);








let sArray = [10 , 20 , 30 , 40 , 50 , 60 ]

let summ = 0


for ( let i = 0 ; i < sArray.length; i++){
   summ = summ + sArray [i]
}

console.log("The sum of array" , summ);




// array even number count..


// let evenNumber = [ 2 , 4 ,3 , 6 , 9 , 11 , 3 , 86 , 54]
// let count = 0;
// for ( let i = 0 ; i < evenNumber.length ; i++){
//    if (evenNumber[i] % 2 === 0) count++

// }

// console.log("Even Number count in array" , count);

// 2nd method 


let evenNumber = [ 2, 4 , 3 , 6 , 9 , 11 ,3 , 86 , 54]
let count = 0


for ( let i = 0 ; i < evenNumber.length ; i++){
   if ( evenNumber[i] % 2 === 0){
      count++;
   }
}
console.log("The total even Number in array:" , count);




for ( let i = 10 ; i >=1 ; i--){
   console.log(i);
   
}


/// 1 to 100 number summ



let sum_of_100_number = 0

for ( let i = 1 ; i <= 100 ; i++){
   sum_of_100_number = sum_of_100_number + i
}

console.log("The sum of 100 Number" , sum_of_100_number);




// mark array //

let marks = [ 90 , 43 , 76 , 34 , 98 , 34]
let total_marks = 0

for (let i = 0 ; i < marks.length ; i++) {
   total_marks = total_marks + marks[i]
}
let percentage = ( total_marks / 600) * 100
console.log("Total Marks" , total_marks);
console.log("percenatge" , percentage);





