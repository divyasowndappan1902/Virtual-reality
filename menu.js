document.addEventListener('DOMContentLoaded', () => {
    // Main site hamburger
    const hamburger = document.querySelector('.hamburger:not(.dashboard-hamburger)');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Dashboard hamburger
    const dashHamburger = document.querySelector('.dashboard-hamburger');
    const dashNav = document.querySelector('.dashboard-nav');
    
    if (dashHamburger && dashNav) {
        dashHamburger.addEventListener('click', () => {
            dashHamburger.classList.toggle('active');
            dashNav.classList.toggle('active');
        });
        
        document.querySelectorAll('.dashboard-nav a').forEach(link => {
            link.addEventListener('click', () => {
                dashHamburger.classList.remove('active');
                dashNav.classList.remove('active');
            });
        });
    }
});
