// Basic JavaScript for Criz Clothing website

// Add to cart functionality (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart! (This is a placeholder)');
        });
    });

    // Contact form submission (placeholder)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon. (This is a placeholder)');
            contactForm.reset();
        });
    }
});

// Smooth scrolling for navigation (if needed)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});