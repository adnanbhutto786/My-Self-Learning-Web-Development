function showAlert(){
    alert("Hello, I'm Adnan Ali Bhutto.")
}

let colors = ["#f39c12", "#16a085", "#8e44ad", "#e74c3c", "#2c3e50"]
let index = 0;

function changeBgColor (){
    document.body.style.background = colors[index]
    index++;
    if (index === colors.length){
        index = 0;

    }
}