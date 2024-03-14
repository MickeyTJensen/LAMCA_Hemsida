document.getElementById('toggleForm').addEventListener('click', function() {
    let loginForm = document.getElementById('loginForm');
    let signupForm = document.getElementById('signupForm');
    let toggleBtn = document.getElementById('toggleForm');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        toggleBtn.textContent = "Switch to Signup";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        toggleBtn.textContent = "Switch to Login";
    }
});
