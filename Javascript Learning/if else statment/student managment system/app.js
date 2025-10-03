function getResult(){
    let name = prompt("Enter your name")
    let marks_1 = parseInt(prompt("Enter marks of subject 1 (out of 100)"));
    let marks_2 = parseInt(prompt("Enter marks of subject 2 (out of 100)"));
    let marks_3 = parseInt(prompt("Enter marks of subject 3 (out of 100)"));

    let total = marks_1 + marks_2 + marks_3
    let percentage = (total/300) *100;
    
    
    let grade;
    if ( percentage >= 90){
        grade = "A ++ 4GPA"
    } else if ( percentage >= 80){
        grade = "A Grade 3.5 GPA"
    } else if ( percentage>= 70){
        grade = "A- Grade"
    } else if ( percentage >= 60){
        grade = "B grade"

    } else if ( percentage >= 50){
        grade = "C grade "
    } else {
        grade = "You are fail"
    }

    alert("Student name: " + name +
        "\nTotal marks: " + total +
        "\nPercentage: " + percentage +
        "\nGrade: " + grade
    )

    document.getElementById("output").innerHTML=
  ` <b>Student: </b> ${name} <br>
    <b>Total marks: </b> ${total} <br>
    <b>Percentage:</b> ${percentage} <br>
    <b>Grade:</b> ${grade}
    `



}


