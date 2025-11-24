// 1 to 20 number print
console.log("Hello World");

for ( let i = 1 ; i <= 20 ; i++){
   console.log(i);
   
}
// reverse order 20 to 1

for ( let i = 20 ; i>= 1 ; i--){
   console.log(i);
   
}
 
//even numer 1 to 50..


for ( let i = 2 ; i <= 50 ; i +=2){
   console.log(i);
   
}


// odd number 1 to 50;

for ( let i = 1 ; i <= 50 ; i +=2){
   console.log(i);
   
}


/// table of 7
for ( let i = 1 ; i <= 10 ; i++){
   console.log(7*i);
   
}

// array print all value ::

let array = ["apple" , "banana" ,"peak" , "Orange"]

for ( let i = 0 ; i < array.length ; i++){
   console.log(array[i]);
   
}

// array all no summ



let number = [ 2 , 5 , 9 ,4 , 3 , 7 , 5]
let sum = 0;

for ( let i = 0 ; i< number.length ; i++){
   sum += number[i];
}

console.log("The sum of array:" , sum);


// even number count in array
let evenSum = [ 2 , 5 , 8 , 11 , 14 , 17 , 6 , 4 , 44 , 56 ,43 , 98 , 54 , 34 , 45]
let count = 0 ;

for ( i = 0 ; i < evenSum.length ; i++){
   if ( evenSum [i] % 2 === 0) count ++ ;

}
console.log("Even Number Count" , count);


/// reverse lopp in array 

for ( let i = 10 ; i >= 1 ; i--){
   console.log(i);
   
}






for ( let i = 1 ; i <= 100 ; i++){
   sum += i
}

console.log("The sum of 1st 100 Number:" ,sum);

















let marks = [ 90 , 54 , 76 , 45 , 78 , 98]

let totalMarks = 0 

for ( let i = 0 ; i< marks.length ; i++){
   totalMarks +=marks[i]
}
let per = (totalMarks/600) * 100;
console.log("percentage:" , per);




