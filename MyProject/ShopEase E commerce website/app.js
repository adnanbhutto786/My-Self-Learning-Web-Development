//   Sliderrrrrrrrrrrrrrrrrrr codeeeeeeeeeeeeeee 
let slides = document.querySelectorAll(".hero-slider img");
let index = 0;

function changeSlide (){
    
    slides[index].classList.remove("active")
    index = (index + 1) % slides.length;
    slides[index].classList.add("active")
}

setInterval(changeSlide , 3000)


// Cart 

let cart = []    //empty array  her item object hohaa
let total = 0     // jo price add hogi wo total me save hoti aur jo - hogi wo be update karaa gi



function updateCart() {

    let cartList = document.getElementById("cartItems");
    cartList.innerHTML = ""    // her update say pahlaa poranaa content clear kr raha taka repat na ho'

     cart.forEach((item , index) =>{
        let li =document.createElement("li");
        li.innerHTML = ` ${item.name} - Rs. ${item.price}
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>`;
        cartList.appendChild(li)
     })
    //  document.getElementById("cartTotal").textContent ="Total Rs." + total;
    let cartTotal = document.getElementById("cartTotal")
    cartTotal.textContent = "Total Rs. " +total

    cartTotal.cartList.add("animate")
    setTimeout(() => {
    cartTotal.classList.remove("animate")}
,300);
    }




function addToCart (productName , price){
    cart.push({name: productName , price:price})
    total += price;
    updateCart();
    // alert(productName + " added to your cart! 💳")
    showPopup(`${productName} added to your cart `)

}

function removeItem (index){
    total -= cart[index].price
    showPopup(`${cart[index].name} ❌ remove Product Name`)
    cart.splice( index ,1)
    updateCart ()

    
}


function clearCart() {
    cart = [] 
    total = 0

    updateCart()
    // alert("🧹 Cart Clear");
showPopup ("Cart was succesfully removed ✅✅")

}




// popup js

function showPopup (message){
    let popup = document.getElementById("popup")
    popup.textContent = message
    popup.classList.add("show")


    setTimeout(() => {
        popup.classList.remove("show");
    } , 2000)   // 2 sec me hide hojayaa gaaa
}


// search  bar Productt


// 🔍 Search Filter


//  Form jssssssssssss


document.getElementById("contactForm").addEventListener("submit" , function (e){
    e.preventDefault()

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");


    if ( name === "" || email === "" || message == ""){
        formMessage.style.color = "red";
        formMessage.textContent = " ⚠️ Please Fill all the fields !"

    } else if (!email.includes("@")){
        formMessage.style.color = "orange" ;
        formMessage.textContent = "⚠️ Invalid email address !" ;
    } else {
        formMessage.style.color ="green"
        formMessage.textContent ="✅ Message sent successfully"

    document.getElementById("contactForm").reset();

    }





})



let menuToggle = document.getElementById("menutoggle");
let navLinks = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});







