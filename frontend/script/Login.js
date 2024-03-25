document.addEventListener('DOMContentLoaded', function() {
    // Växla till inloggningsformulär
    document.getElementById('toggleToLogin').addEventListener('click', function() {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Växla till registreringsformulär
    document.getElementById('toggleToSignup').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    });

    // Hantera registrering med validering
    document.querySelector('#signupForm button').addEventListener('click', function() {
        
        const email = document.querySelector('#signupForm input[type=email]').value;
        const password = document.querySelector('#signupForm input[type=password]').value;
        if(email && password) {
            // Lägg till ytterligare validering här om så önskas
            window.location.href = 'personalpage.html'; // Omdirigera till personalpage
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Hantera inloggning (här kan du också lägga till validering om du vill)
    document.querySelector('#loginForm button').addEventListener('click', function() {
        
        // Här kan du lägga till validering eller andra kontroller
        window.location.href = 'personalpage.html'; // Omdirigera till personalpage
    });
});
