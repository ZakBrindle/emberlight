document.addEventListener('DOMContentLoaded', function() {

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); // Get all mobile nav links

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
             // Optional: Animate hamburger icon
             hamburger.classList.toggle('active'); // Add an 'active' class for potential CSS animations
        });
    }

    // Close mobile nav when a link is clicked
    if(mobileNavLinks.length > 0 && mobileNav) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                 mobileNav.style.display = 'none'; // Hide the nav
                 hamburger.classList.remove('active'); // Reset hamburger icon if needed
            });
        });
    }

    // Optional: Add active class to nav links based on scroll position
    // (More complex, involves tracking scroll position and section offsets)

    // Optional: Simple fade-in animation for sections on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0'; // Initially hide sections
        section.style.transform = 'translateY(20px)'; // Move down slightly
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });


}); // End DOMContentLoaded