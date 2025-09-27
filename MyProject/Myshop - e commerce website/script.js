// Toggle menu 
function toggleMenu(){
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// about button

const btn = document.getElementById('readMoreBtn');
btn.addEventListener('click', () =>{
    alert("Thanks for showing interest ! More details comming soon")
} )


// contact form
const form = document.getElementById('contactForm')
const error = document.getElementById('error')

form.addEventListener('submit', function(e){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getAnimations('message').value.trim();

    if (name === "" || email === "" || message === ""){
        errorMessage.textContent ="Please fill in all fields"
    }

    const emailPattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    errorMessage.textContent="Enter a valid email pleaseeeeeeeeeeeeeeeeeeeeeeeeee"
    return;
    
    errorMessage.style.color="green"
    errorMessage.textContent="Form Submit Succesfully"
})