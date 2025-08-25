/**
 * Main script for the "mew African Movement" project.
 * Add your JavaScript code below.
 */

// Example: Log a welcome message to the console
console.log('Welcome to the New African Movement website!');
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const entries = {};
        for (const [key, value] of formData.entries()) {
            entries[key] = value;
        }
        console.log('Form submitted:', entries);
        // You can add further processing here, such as sending data to a server
    });
}
// Password validation (basic example)
const passwordInput = document.getElementById('password');
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length < 6) {
            passwordInput.setCustomValidity('Password must be at least 6 characters.');
        } else {
            passwordInput.setCustomValidity('');
        }
    });
}
// Email validation (basic example)
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('input', function() {
        if (!emailInput.validity.valid) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });
}
// Username validation (basic example)
const usernameInput = document.querySelector('input[name="username"]');
if (usernameInput) {
    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim().length < 3) {
            usernameInput.setCustomValidity('Username must be at least 3 characters.');
        } else {
            usernameInput.setCustomValidity('');
        }
    });
}
// Phone number validation (basic example)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        if (!phoneInput.validity.valid) {
            phoneInput.setCustomValidity('Please enter a valid phone number.');
        } else {
            phoneInput.setCustomValidity('');
        }
    });
}

// Autofocus on the username field when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Autofocus on the username field when the page loads
    const username = document.querySelector('input[name="username"]');
    if (username) {
        username.focus();
    }
});
// Toggle password visibility
const passwordToggle = document.getElementById('password-toggle');
if (passwordToggle) {
    passwordToggle.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        }
    });
}
// Toggle confirm password visibility
const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
if (confirmPasswordToggle) {
    confirmPasswordToggle.addEventListener('click', function() {
        const confirmPasswordInput = document.getElementById('confirm-password');
        if (confirmPasswordInput) {
            confirmPasswordInput.type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
        }
    });
}
// Confirm password validation
const confirmPasswordInput = document.getElementById('confirm-password');
if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', function() {
        const passwordInput = document.getElementById('password');
        if (passwordInput && confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.setCustomValidity('Passwords do not match.');
        } else {
            confirmPasswordInput.setCustomValidity('');
        }
    });
}