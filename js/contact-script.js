// contact-script.js

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    // Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate form data
            if (validateForm(formData)) {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.innerHTML = 'Sending...';
                submitButton.disabled = true;

                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    submitButton.innerHTML = 'Send Message';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    // Newsletter Form Submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Show loading state
                const submitButton = newsletterForm.querySelector('button');
                submitButton.innerHTML = 'Subscribing...';
                submitButton.disabled = true;

                // Simulate newsletter subscription (replace with actual API call)
                setTimeout(() => {
                    showMessage('Thanks for subscribing to our newsletter!', 'success');
                    newsletterForm.reset();
                    submitButton.innerHTML = 'Subscribe';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    // Form Validation
    function validateForm(data) {
        if (!data.name.trim()) {
            showMessage('Please enter your name', 'error');
            return false;
        }

        if (!validateEmail(data.email)) {
            showMessage('Please enter a valid email address', 'error');
            return false;
        }

        if (!data.subject) {
            showMessage('Please select a subject', 'error');
            return false;
        }

        if (!data.message.trim()) {
            showMessage('Please enter your message', 'error');
            return false;
        }

        return true;
    }

    // Email Validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Message Display
    function showMessage(message, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        // Add to page
        document.body.appendChild(messageDiv);

        // Remove after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // Add these styles to your CSS
    const styles = `
        .message {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        }

        .success {
            background-color: #4CAF50;
        }

        .error {
            background-color: #f44336;
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;

    // Add styles to page
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
});
