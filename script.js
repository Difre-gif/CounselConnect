// Mobile Navigation Toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulated AJAX request (use actual AJAX in production)
    setTimeout(() => {
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
        responseMessage.style.color = '#4CAF50';
        document.getElementById('contact-form').reset();
    }, 1000);
});

// Add smooth scroll to navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
