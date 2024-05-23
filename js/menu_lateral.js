document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.replace('/pages', '');

    const menuItems = document.querySelectorAll('.menu__lateral-item a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        
        const linkPath = new URL(href, window.location.origin).pathname;

        if (linkPath === currentPath) {
            item.style.color = 'var(--cor-do-hover)';
            item.style.fontWeight = '800';
        }
    });
});