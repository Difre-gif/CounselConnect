document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const passwordStrengthText = document.getElementById('password-strength');

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 'Weak';

        if (password.length >= 8) {
            strength = 'Medium';
            if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
                strength = 'Strong';
            }
        }

        passwordStrengthText.innerText = `Password strength: ${strength}`;
    });

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add form submission logic here (e.g., AJAX call)
        alert('Form submitted successfully!');
        signupForm.reset();
    });
});
