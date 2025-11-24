console.log("Hello, World");

// print 1 to 20 number :

for ( i = 1 ; i <= 20 ; i++) {
   console.log(i);
   
}

// reverse 20 to 1 

for ( let i = 20 ; i >= 1 ; i-- ){
   console.log(i);
   
}


// even number 1 t0 50 

for ( let i = 2 ; i < 50 ; i +=2){
   console.log(i);
   
}

// odd number 1 to 50 

for ( let i = 1 ; i < 50 ; i +=2 ){
   console.log(i);
   
}
  
// two ka tableee
for ( i = 1 ; i <= 10 ; i++){
   console.log(2 * i);
   
}

// five ka table 

for ( let i = 1 ; i <= 10 ; i++ ){
   console.log(5 * i);
   
}


// sum of numbers 1 to 100 


let sum = 0 ;
for ( let i = 1 ;  i <= 100 ; i++){
   sum += i
}
console.log("Sum of 1 to 100 numbers:" , sum);

 // Count how many even numbers in array

// let arr = [ 2, 5, 8, 11, 14 , 17];
// let count =0

// for ( let i = 0 ;  i< arr.length ; i++ ) {
//    if (arr[i] % 2 === 0) count ++

// }

// console.log("Even numbers:" , count);

// let arr = [ 2 , 5 ,4 , 54 , 34 , 43 , 52 , 10 , 38 , 52 ]
//    let count = 0


//    for ( let i = 0 ; i < arr.length ; i ++) {
//       if ( arr [ i] % 2 === 0) count ++
//    }

//    console.log("Even number:"  ,count);



let arr = [ 4 , 3 , 2 , 7 ,5 , 8 , 6 , 8 , 9 , 24 , 30 , 23]
let count = 0 ;

for ( let i = 0  ; i < arr.length ; i++){
   if (arr[i] % 2 === 0) count ++
}

console.log(count);


for ( let i = 1 ; i <= 50 ; i +=2 ){
   console.log(i);
   
}
 


// find the largest no of array....
let nums = [ 34 , 54 , 645 , 784 , 43 , 543]
let largest = nums[0];

for ( let i = 1 ; i < nums.length ; i++){
   if ( nums[i] > largest) largest = nums[i]
}

console.log("Largest number of this array:" , largest);



// find the lowest number minimu num

let num = [ 4 , 6 , 64 , 8 , 34 , 45 , 3   ]
let lowest = num[0]

for ( let i = 0 ; i < num.length ; i++){
   if ( num[i] < lowest) lowest = num[i]
}

console.log("Lowest Number:" , lowest);



// cout total marks in array 


let marks = [ 54 , 34 , 34 , 94 , 65 , 344]
let totalCount = 0 ;

for ( let i = 0 ; i < marks.length ; i++){
   totalCount += marks [i]
}

console.log("The sum of this array" , totalCount);



// reverse are manullay in array 




let array  = [ 1 ,2 ,3  , 4 , 5 , 6]

for ( let i = array.length-1 ; i>= 0 ; i--){
   console.log(array[i]);
   
}

let numm = 16 ;
let isPrime = true

for ( let i = 2 ; i < numm ; i++){
   if ( numm % 2  === 0){
      isPrime = true
      break;
   }
}


console.log(isPrime ? "prime" : "not Prime");




/// factorial 

let n = 5 ;
let fact = 1

for  ( let i = 1 ; i <=n ; i++){
   fact = fact * i
}
console.log("Factorial" , fact);


for ( let i = 1 ; i <= 10 ; i++){
   console.log(i);
   
}

for ( let i = 2 ; i <=50 ; i +=2){
   console.log(i);
   
}


for ( let i = 1 ; i <=50 ; i +=2){
   console.log(i);

}

let ari = [ 45 , 34 , 54 ,98 , 343 , 543]
let largeNumber = 0

for ( let i = 1 ; i < ari.largeNumber ; i++){
   if ( arr[i] < largeNumber) largeNumber
}













      





