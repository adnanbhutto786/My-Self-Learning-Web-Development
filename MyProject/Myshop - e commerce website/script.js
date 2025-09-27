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