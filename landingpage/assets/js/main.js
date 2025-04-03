/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

// Get modal elements
const modal = document.getElementById('login-modal');
const loginIcon = document.getElementById('login-icon');
const closeBtn = document.querySelector('.close');

// Show modal when login icon is clicked
loginIcon.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'flex';
});

// Close modal when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal when clicking the "X" button
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple login check (Replace this with actual authentication later)
        if (username === "admin" && password === "password") {  
            window.location.href = "../maindash.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password!"); // Show error message
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const verificationForm = document.getElementById("verification-form");
    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const sendCodeButton = document.getElementById("send-code");
    const verifyCodeButton = document.getElementById("verify-code");

    // When "Forgot Password?" is clicked
    forgotPasswordLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
    });

    // When "Send Code" is clicked
    sendCodeButton.addEventListener("click", function () {
        const email = document.getElementById("reset-email").value;
        if (email) {
            alert("Verification code sent to " + email); // Simulating email send
            forgotPasswordForm.style.display = "none";
            verificationForm.style.display = "block";
        } else {
            alert("Please enter a valid email.");
        }
    });

    // When "Verify" is clicked
    verifyCodeButton.addEventListener("click", function () {
        const code = document.getElementById("verification-code").value;
        if (code === "123456") { // Sample correct code
            alert("Email verified! You can now login.");
            
            // Reset forms and go back to login modal
            verificationForm.style.display = "none";
            loginForm.style.display = "block";

            // Clear input fields
            document.getElementById("reset-email").value = "";
            document.getElementById("verification-code").value = "";
        } else {
            alert("Invalid verification code!");
        }
    });
});

