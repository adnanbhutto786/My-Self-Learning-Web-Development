console.log("Hello world");  

// print 1 to 5
for ( let i = 1 ; i <= 10 ; i++){
    console.log(i);
      
}

// student name print

let studentName = ["Ahmed" , "Arslan" , "Amjad" , "Amna"];

for ( let i = 1 ; i < studentName.length ; i++)
{
    console.log(studentName[i]);
    
}

// let price = [ 23 , 25 , 25 , 25 , 25]
// let totalPrice = 0;

// for ( let i = 0 ; i < price.length ; i++){
//     totalPrice = totalPrice + price[i]
// }
// console.log("Total Cart Price:" , totalPrice);

let price = [23 , 25 , 25 , 25 , 25];
let totalPrice = 0 ;

for ( let i = 0 ; i < price.length ; i++){
    totalPrice = totalPrice + price[i]
}
console.log("Total Cart Price:" , totalPrice);





// Marks percentage 


let marks = [ 90 , 87 , 45 , 76 , 43 , 56];
let totalMarks = 0;


for ( let i = 0; i < marks.length; i++){
    totalMarks = totalMarks + marks[i]
}

let percentage = ( totalMarks / 600) * 100;
console.log("Total Marks" , totalMarks);

console.log("Percentage:" , percentage);


// even number use i =2 


for ( let i = 2 ; i<=10 ; i +=2){
    console.log(i);
    
}

// odd number use i = 1 ;

for ( let i =1 ; i <= 10 ; i +=2){
    console.log(i);
    
}


// loop Backward


for ( let i = 20 ; i >=1 ; i--){
    console.log(i);
    
}



/// table of any number 


for ( let i = 1 ; i <=10 ; i++)
{
    console.log(4*i);
    
}

for ( let i = 1 ; i <=10 ; i++)
{
    console.log(5*i);
    
}

// sum of 1 t0 100 number


let sumTotal = 0 ;

for ( let i = 0 ; i <= 100 ; i++){
    sumTotal = sumTotal + i
}

console.log("The sum of first 100 Number" , sumTotal);

//  count array number in array 


// let arrayCount = [2 , 4 , 5 ,7 ,8 , 9 ,12 ,16 , 18];
// let count = 0 ;
//  for ( let i = 0 ; i < arrayCount.length ; i++){
//     if ( arrayCount[i] % 2 === 0){
//         count++;
//     }
//  }
//  console.log("Array Count even Number" ,count);

let arrayCount = [ 2 , 4 , 5 ,7 ,8 , 9 ,12 ,16 , 18];
let count = 0 ;

for ( let i = 0 ; i < arrayCount.length ; i++){
    if ( arrayCount[i] % 2 === 0 ){
        count ++;
    }
}
console.log("array count", count);


// Find largest number in array

let nums = [ 12 , 45 , 3 , 22 , 67 , 1];
let largest = nums [0]
 

for ( let i = 0 ; i < nums.length; i++){
    if ( nums[i] > largest){
        largest = nums [i]
    }
}

console.log("Largest" , largest);










