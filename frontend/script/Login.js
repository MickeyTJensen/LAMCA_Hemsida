document.addEventListener('DOMContentLoaded', function() {
    // Växla mellan inloggning och registrering
    document.getElementById('toggleToLogin').addEventListener('click', function() {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    document.getElementById('toggleToSignup').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    });

    // Hantera inloggning
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        await loginUser(email, password);
    });

    // Hantera registrering
    document.getElementById('signupForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const fullName = document.getElementById('signupFullName').value;
        
        if (isValidPassword(password)) {
            await registerUser(email, password, fullName);
        } else {
            alert('Lösenordet måste innehålla minst 5 tecken, inklusive en stor bokstav och en siffra.');
            document.getElementById('signupPassword').value = ''; // Rensar lösenordsfältet
        }
    });
});

async function loginUser(email, password) {
    /*try {
        const loginUrl = 'http://localhost:8080/api/login';
        const loginData = { email, password };

        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('userToken', data.token);
            window.location.href = '/frontend/personalpage.html'; 
        } else {
            alert(data.message || 'Inloggning misslyckades');
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Ett fel inträffade vid inloggning.');
    }*/
    // Mock implementation
    console.log(`Logging in with email: ${email} and password: ${password}`);
    // Simulate successful login
    if(email === "admin@admin.com" && password === "Admin123") {
        alert('Mock: Inloggning lyckades!');
        localStorage.setItem('userToken', 'mocked-token');
        window.location.href = '/frontend/personalpage.html';
    } else {
        alert('Mock: Inloggning misslyckades.');
    }
}

async function registerUser(email, password, fullName) {
    /*try {
        const registerUrl = 'http://localhost:8080/api/register';
        const registerData = { email, password, fullName };

        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registrering lyckades! Du kan nu logga in.');
            window.location.href = '/frontend/personalpage.html'; 
        } else {
            alert(data.message || 'Registrering misslyckades');
            document.getElementById('signupEmail').value = '';
            document.getElementById('signupPassword').value = '';
            document.getElementById('signupFullName').value = '';
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Ett fel inträffade vid registrering.');
    }*/
    // Mock implementation
    console.log(`Registering user with email: ${email}, password: ${password}, fullName: ${fullName}`);
    // Simulate successful registration
    alert('Mock: Registrering lyckades!');
    window.location.href = '/frontend/personalpage.html';
}

function isValidPassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/.test(password);
}



