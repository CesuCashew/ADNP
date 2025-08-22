// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Handle dropdown behavior on mobile
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (link && dropdownContent) {
                link.addEventListener('click', function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        
                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                    }
                });
                
                // Handle clicks on dropdown items in mobile
                const dropdownItems = dropdownContent.querySelectorAll('a');
                dropdownItems.forEach(item => {
                    item.addEventListener('click', function() {
                        if (isMobile()) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                            dropdown.classList.remove('active');
                        }
                    });
                });
            }
        });
        
        // Close menu when clicking on non-dropdown links
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown .nav-link)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMobile()) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Handle resize events
        window.addEventListener('resize', function() {
            if (!isMobile()) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }
});