function toggleMenu (){
    const navlinks =document.getElementById('navlinks')
    navlinks.classList.toggle('show')
}

document.querySelector("#hero button").addEventListener("click" , function(){
    document.querySelector("#menu").scrollIntoView({behavior: "smooth"})
})

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const statusDiv = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Blank field check
    if (!name || !email || !message) {
      statusDiv.innerText = "❌ Please fill in all fields.";
      statusDiv.style.color = "red";
      statusDiv.style.fontWeight = "bold";
      return;
    }

    // Email pattern check
    if (!email.includes("@")) {
      statusDiv.innerText = "❌ Invalid email address.";
      statusDiv.style.color = "red";
      statusDiv.style.fontWeight = "bold";
      return;
    }

    // Success message
    statusDiv.innerText = "✅ Message sent";
    statusDiv.style.color = "green";

    // Save to LocalStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Clear form
    form.reset();

    // ✅ Redirect to thankyou.html
    setTimeout(function () {
      window.location.href = "thankyou.html";
    }, 1000); // 1 second delay for message to show
  });
});
