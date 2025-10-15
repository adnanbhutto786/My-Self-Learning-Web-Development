document.addEventListener('DOMContentLoaded' , () =>{
    const formLogin = document.getElementById('formLogin');
    const logInEmail =document.getElementById('logInEmail');
    const loginPassword = document.getElementById('loginPassword');
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')


    formLogin.addEventListener('submit' , (e) => {
        e.preventDefault()

        let valid = true;
        emailError.textContent = '';
        passwordError.textContent = '';

        if (logInEmail.value.trim() === ''){
            emailError.textContent = "Email is required"
        valid = false

        } else if (!logInEmail.value.includes('@')){
            emailError.textContent = "⚠️Invalid Email"
         valid = false   

        }

        if (loginPassword.value.trim() === ''){
            passwordError.textContent = "Password is required!";
            valid = false;

        }else if (loginPassword.value.length < 6){
            passwordError.textContent = "Password Must be at least 6 character"
            valid = false;
        }


        if (valid){
            alert("✅Login Succesfully")
            formLogin.reset();
            window.location.href = "index.html"
            
        }
    })
}) ;


// Sign up 


// const signupForm = document.getElementById('signupForm');
 
// if (signupForm){
//     signupForm.addEventListener('submit' , function (e){
//         e.preventDefault();

//         const username = document.getElementById('username').value.trim()
//         const signupEmail = document.getElementById('signupEmail').value.trim()
//         const signupPassword = document.getElementById('signupPassword').value.trim()



//         let valid = true;

//         if ( username === ""){
//             document.getElementById('userNameError').textContent="Please enter your name"
//             valid = false
//         } else {
//             document.getElementById('userNameError').textContent = ""
//         }

//         if (signupEmail === "" || !signupEmail.includes('@')){
//             document.getElementById('errorEmail').textContent = "Enter a valid email"
//             valid = false
//         } else{
//             document.getElementById('errorEmail').textContent = ""
//                 }

//         if (signupPassword.length < 6){
//             document.getElementById('passwordError').textContent = "Password Must be at least 6 character"
//             valid= false

//         } else {

//             document.getElementById('passwordError').textContent = ""
//         }     

//          if ( valid){
//             alert("Account Created Succesfully.✅")
//             window.location.href = "index.html"
//          }

//     })
// }

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('password').value.trim();

      // Get error elements
      const nameError = document.getElementById('userNameError');
      const emailError = document.getElementById('errorEmail');
      const passwordError = document.getElementById('passwordError');

      // Reset errors
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';

      let valid = true;

      // Validate username
      if (username === '') {
        nameError.textContent = '⚠️ Please enter your name';
        valid = false;
      }

      // Validate email
      if (email === '') {
        emailError.textContent = '⚠️ Email is required';
        valid = false;
      } else if (!email.includes('@')) {
        emailError.textContent = '⚠️ Invalid email format';
        valid = false;
      }

      // Validate password
      if (password === '') {
        passwordError.textContent = '⚠️ Password is required';
        valid = false;
      } else if (password.length < 6) {
        passwordError.textContent = '⚠️ Password must be at least 6 characters';
        valid = false;
      }

      // Final check
      if (valid) {
        alert('✅ Account Created Successfully!');
        signupForm.reset();
        window.location.href = 'index.html';
      }
    });
  }
});
