document.addEventListener('DOMContentLoaded', () => {
    // Main site hamburger
    const hamburger = document.querySelector('.hamburger:not(.dashboard-hamburger)');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Dashboard mobile drawer
    const mobileDashHamburger = document.querySelector('.mobile-dash-hamburger');
    const dashSidebar = document.querySelector('.dashboard-sidebar');
    
    if (mobileDashHamburger && dashSidebar) {
        // Toggle drawer
        mobileDashHamburger.addEventListener('click', (e) => {
            mobileDashHamburger.classList.toggle('active');
            dashSidebar.classList.toggle('active');
            e.stopPropagation();
        });
        
        // Close drawer when clicking a link
        document.querySelectorAll('.dashboard-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDashHamburger.classList.remove('active');
                dashSidebar.classList.remove('active');
            });
        });
        
        // Close drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (dashSidebar.classList.contains('active') && !dashSidebar.contains(e.target) && !mobileDashHamburger.contains(e.target)) {
                mobileDashHamburger.classList.remove('active');
                dashSidebar.classList.remove('active');
            }
        });
    }
});
