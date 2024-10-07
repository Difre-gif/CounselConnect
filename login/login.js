document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Add form submission logic here (e.g., AJAX call)
        if (validateLogin(email, password)) {
            alert('Login successful!');
            // Redirect to the homepage (e.g., home.html)
            window.location.href = '/HOME/home.html';  // Replace 'home.html' with the actual path of your homepage
        } else {
            alert('Invalid email or password.');
        }
    });

    function validateLogin(email, password) {
        // Example validation logic
        return email.includes('@') && password.length >= 6;
    }
});
