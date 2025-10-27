// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, waiting for header...');
    
    // Use event delegation on document to catch hamburger clicks
    document.addEventListener('click', function(e) {
        const hamburger = e.target.closest('#hamburger');
        
        if (hamburger) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked via delegation!');
            const navMenu = document.getElementById('nav-menu');
            
            if (navMenu) {
                const isActive = navMenu.classList.contains('active');
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Force visibility with inline styles as backup
                if (!isActive) {
                    navMenu.style.left = '0';
                } else {
                    navMenu.style.left = '-100%';
                }
                
                console.log('Menu toggled, active:', !isActive);
            }
        }
    });
    
    // Close menu when clicking on a nav link
    document.addEventListener('click', function(e) {
        const navLink = e.target.closest('.nav-link');
        
        if (navLink) {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.left = '-100%';
            }
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        
        if (navMenu && hamburger && navMenu.classList.contains('active')) {
            const isClickInsideMenu = navMenu.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.left = '-100%';
            }
        }
    });
});

// Also listen for the includes loaded event
window.addEventListener('includesLoaded', function() {
    console.log('Includes loaded event fired');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    console.log('Hamburger found:', !!hamburger);
    console.log('Nav menu found:', !!navMenu);
});
