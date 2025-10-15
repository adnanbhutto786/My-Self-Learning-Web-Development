document.addEventListener('DOMContentLoaded' , () => {
    const burger = document.querySelector('.burger');
    const navlist =document.querySelector('.nav-links');

    if ( !burger || !navlist ) return;

    burger.addEventListener('click' , () => {
        navlist.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
    })



})


// Contact form jssssssssss


const contactForm =document.getElementById('contactForm');

if (contactForm){
    contactForm.addEventListener('submit' , (e)=>{
        e.preventDefault();

        alert("Thank you for reaching out! we'll get back to you soon ✅")
        contactForm.reset()
    });
}

// Cart page js

const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.getElementById('totalPrice');    
let totalPrice = 0;

cartItems.forEach(item => {
    const price = parseFloat(item.getAttribute('data-price'));
    const quantityInput = item.querySelector('.quantity');
    const removeButton = item.querySelector('.remove-item');        
    totalPrice += price * parseInt(quantityInput.value);
    quantityInput.addEventListener('change', () => {
        const quantity = parseInt(quantityInput.value);
        if (quantity < 1 || isNaN(quantity)) {
            quantityInput.value = 1;
        }
        updateTotalPrice();
    });
    removeButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    }); 
});
function updateTotalPrice() {
    totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantityInput = item.querySelector('.quantity');
        totalPrice += price * parseInt(quantityInput.value);
    }
    );
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
updateTotalPrice();
