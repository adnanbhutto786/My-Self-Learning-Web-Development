function searchProduct(){
    let searchValue = document.getElementById("searchInput").value;
    if (searchValue === ""){
        alert("please enter the something value search")
    }
    else{
        alert("Searching for ...." + searchValue)
    }
}

// hero section js
function shopNow() {
    alert("Redirecting you to our Products section...")
}

// product section

function addToCart (productName, price){
    console.log(productName + " added to cart. Price: " + price + "PKR");
    alert(productName + " added to your cart")
    
}

//cart js 

// let cart = [];
// let total = 0;

// // Update Cart Function
// function updateCart() {
//   let cartList = document.getElementById("cartItems");
//   cartList.innerHTML = ""; // clear previous items

//   cart.forEach((item) => {
//     let li = document.createElement("li");
//     li.textContent = `${item.name} - ${item.price} PKR`;
//     cartList.appendChild(li);
//   });

//   document.getElementById("cartTotal").textContent = "Total: " + total + " PKR";
// }

// // Add to Cart Function

// function addToCart(productName, price) {
//   cart.push({ name: productName, price: price });
//   total += price;
//   updateCart();
//   alert(productName + " added to your cart!");
// }


// let cart = [];
// let total = 0;

// function updateCart() {
//     let cartList = document.getElementById("cartItems")
//     cartList.innerHTML = "";


//     cart.forEach((item) =>{
//         let li =document.createElement('li');
//         li.textContent = ` ${item.name} - ${item.price}`
//         cartList.appendChild(li)
//     })
//     document.getElementById("cartTotal").textContent = "Total: " + total + " PKR"
// }
// function addToCart(productName , price){
//     cart.push({
//         name: productName, price: price
//     })
//     total += price;
//     updateCart ();
//     alert(productName + "added to your cart")
    
// }


// let cart = [];
// let total = 0;

// function updateCart (){
//     let cartList = document.getElementById("cartItems");
//     cartList.innerHTML = ""

//     cart.forEach((item) => {
//         let li = document.createElement('li');
//         li.textContent =` ${item.name} - ${item.price} PKR`
//         cartList.appendChild(li)
//     })
//     document.getElementById('cartTotal').textContent ="Total: " + total + " PKR"
// }

// function addToCart (productName, price){
//     cart.push({
//         name: productName, price: price
//     })
//     total += price;
//     updateCart ();
//     alert(productName + " added to cart")
// }

let cart = [];
let total = 0;

// Update Cart Function
function updateCart() {
  let cartList = document.getElementById("cartItems");
  cartList.innerHTML = ""; // clear previous items

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    // product name + price
    li.textContent = `${item.name} - ${item.price} PKR `;

    // ❌ Remove Button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.color = "red";
    removeBtn.style.border = "none";
    removeBtn.style.background = "transparent";
    removeBtn.style.cursor = "pointer";

    // Remove functionality
    removeBtn.onclick = function () {
      total -= item.price;         // total se product ki price minus karo
      cart.splice(index, 1);       // array se product remove karo
      updateCart();                // cart ko dobara update karo
    };

    li.appendChild(removeBtn); // li ke andar button add karo
    cartList.appendChild(li);  // ul ke andar li add karo
  });

  // Update total
  document.getElementById("cartTotal").textContent = "Total: " + total + " PKR";
}

// Add to Cart Function
function addToCart(productName, price) {
  cart.push({ name: productName, price: price }); // product cart me add
  total += price;                                // total update
  updateCart();                                  // cart refresh
  alert(productName + " added to your cart!");
}

// Contac

document.getElementById("contact-form").addEventListener("submit" , function(e) {
    e.preventDefault(e)

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message")
    let formMessage = document.getElementById("formMessage")

    if ( name === "" || email === "" || message === ""){
        formMessage.style.color= "red";
        formMessage.textContent = "⚠️ all fields are required!"

    } else if (!email.includes("@")){
        formMessage.style.color = "red"
        formMessage.textContent = " ⚠️ please enter a valid email!"
    }
    else {
        formMessage.style.color = "green"
        formMessage.textContent = " ✅ Message sent succesfully"

        document.getElementById("contact-from").reset();
    }



})














// document.getElementById("contactForm").addEventListener("submit", function(e) {
//   e.preventDefault(); // form ko page refresh se roka

//   let name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let message = document.getElementById("message").value.trim();
//   let formMessage = document.getElementById("formMessage");

//   // Validation
//   if (name === "" || email === "" || message === "") {
//     formMessage.style.color = "red";
//     formMessage.textContent = "⚠️ All fields are required!";
//   } else if (!email.includes("@")) {
//     formMessage.style.color = "red";
//     formMessage.textContent = "⚠️ Please enter a valid email!";
//   } else {
//     formMessage.style.color = "green";
//     formMessage.textContent = "✅ Message sent successfully!";
    
//     // Form clear karne ke liye
//     document.getElementById("contactForm").reset();
//   }
// });

