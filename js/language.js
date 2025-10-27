// Language switcher functionality for Dafiwi website
// Supports English (US) and Spanish

(function() {
    'use strict';

    // Get language preference from localStorage or default to Spanish
    let currentLang = localStorage.getItem('dafiwi-lang') || 'es';

    // Use event delegation for language buttons (works even when loaded dynamically)
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        
        if (target.id === 'lang-en') {
            e.preventDefault();
            switchLanguage('en');
        } else if (target.id === 'lang-es') {
            e.preventDefault();
            switchLanguage('es');
        }
    });

    // Initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            initLanguage();
        }, 500);
    });

    // Also listen for the includes loaded event
    window.addEventListener('includesLoaded', function() {
        initLanguage();
    });

    function initLanguage() {
        // Set the HTML lang attribute
        document.documentElement.lang = currentLang;
        
        // Update all elements with language data attributes
        updatePageLanguage(currentLang);
        
        // Update active button state
        updateButtonStates(currentLang);
    }

    function switchLanguage(lang) {
        if (lang === currentLang) return;

        currentLang = lang;
        localStorage.setItem('dafiwi-lang', lang);
        document.documentElement.lang = lang;
        
        updatePageLanguage(lang);
        updateButtonStates(lang);
    }

    function updatePageLanguage(lang) {
        // Get all elements with language data attributes
        const elements = document.querySelectorAll('[data-lang-en], [data-lang-es]');
        
        elements.forEach(function(element) {
            const enText = element.getAttribute('data-lang-en');
            const esText = element.getAttribute('data-lang-es');
            
            if (lang === 'en' && enText) {
                element.textContent = enText;
            } else if (lang === 'es' && esText) {
                element.textContent = esText;
            }
        });
        
        // Update language label (show opposite language)
        const langLabel = document.querySelector('.lang-label');
        if (langLabel) {
            langLabel.textContent = lang === 'en' ? 'Idioma' : 'Language';
        }
    }

    function updateButtonStates(lang) {
        const enBtn = document.getElementById('lang-en');
        const esBtn = document.getElementById('lang-es');

        if (enBtn && esBtn) {
            if (lang === 'en') {
                enBtn.classList.add('active');
                esBtn.classList.remove('active');
            } else {
                esBtn.classList.add('active');
                enBtn.classList.remove('active');
            }
        }
    }
})();
