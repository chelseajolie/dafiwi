// Mobile menu toggle functionality
(function() {
    'use strict';

    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideMenu = navMenu.contains(event.target);
                const isClickOnHamburger = hamburger.contains(event.target);

                if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initMobileMenu, 500);
    });

    // Re-initialize when header is loaded
    window.addEventListener('includesLoaded', function() {
        initMobileMenu();
    });
})();
