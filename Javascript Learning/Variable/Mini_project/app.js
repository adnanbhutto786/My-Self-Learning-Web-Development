function showInfo (){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    document.getElementById("infoResult").innerText=
    "Hello " + name + "You are " + age + "year old";
}


function calculate (){
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result =
    "Add: " + (a+b) + "\n" +
    "Sub: " + (a-b) + "\n" +
    "product: " + (a*b);
    document.getElementById('calresult').innerText=result
}