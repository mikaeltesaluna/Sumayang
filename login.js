function login() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('error-msg');

        if (username === 'admin' && password === 'admin1') {
            localStorage.setItem('isLoggedIn', 'true'); // ✅ Set login flag
            window.location.href = 'index.html';
        } else {
            errorMsg.textContent = 'Invalid username or password.';
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });

