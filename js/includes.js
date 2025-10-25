// Load header and footer into pages
(function() {
    'use strict';

    let headerLoaded = false;
    let footerLoaded = false;

    // Load header
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                // Set active nav link
                setActiveNavLink();
                headerLoaded = true;
                checkIfLoadingComplete();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                footerLoaded = true;
                checkIfLoadingComplete();
            }
        })
        .catch(error => console.error('Error loading footer:', error));

    // Check if both header and footer are loaded
    function checkIfLoadingComplete() {
        if (headerLoaded && footerLoaded) {
            // Dispatch custom event to signal that includes are ready
            window.dispatchEvent(new Event('includesLoaded'));
        }
    }

    // Set active nav link based on current page
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
})();
