function getResult(){

let name = document.getElementById("name").value.trim();
let marks = parseInt(document.getElementById("marks").value);
let grade , Gpa;

if ( marks >= 90 && marks <= 100){
    grade ="A++"
    Gpa  = "4.00 GPA"

} else if (marks >= 85 && marks <= 89){
    grade ="A"
    Gpa ="3.75 GPA"

} else if ( marks >= 80 && marks <= 84){
    grade ="A-"
    Gpa ="3.50 GPA"

} else if ( marks >= 75 && marks <= 79){
    grade = "B+"
    Gpa = "3.25 GPA"

} else if (marks >= 70 && marks <= 74){
    grade ="B"
    Gpa ="3.0 GPA"

} else if ( marks >= 66 && marks <= 69 ){
    grade ="B-"
    Gpa ="2.75 GPA"

} else if (marks >= 63 && marks <= 65){
    grade ="C+"
    Gpa ="2.5 GPA"

} else if ( marks >= 60 && marks <= 62){
    grade ="C"
    Gpa ="2.0 GPA"

} else if ( marks >= 55 && marks <= 59){
    grade ="C-"
    Gpa ="1.54 GPA"
}  else {
    grade ="Fail"
    Gpa ="0 GPA"
}


// OUTPUT

document.getElementById("resultshoww").innerHTML=
`👤<b>Name: </b> ${name} <br>
 📑<b>Marks: </b>${marks} <br>
 🎗️<b>Grade: </b> ${grade} <br>
 ✅<b>Gpa: </b> ${Gpa}

`
}