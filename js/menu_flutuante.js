document.addEventListener("DOMContentLoaded", function () {
    let currentPath = window.location.pathname;

    if (currentPath.includes('/pages/')) {
        currentPath = currentPath.replace('/pages/', '');
    } else if (currentPath === '/index.html' || currentPath === '/') {
        currentPath = 'index.html';
    }

    const menuItems = document.querySelectorAll('.foto__menu-flutuante-item a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href').split('/').pop();

        if (href === currentPath) {
            const img = item.querySelector('img');
            const imgURL = img.getAttribute('src');

            fetch(imgURL)
                .then(response => response.text())
                .then(svgText => {
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
                    const svgElement = svgDoc.querySelector('svg');

                    svgElement.setAttribute('fill', '#3B82F6');

                    img.replaceWith(svgElement);
                })
                .catch(error => console.error('Erro ao carregar o SVG:', error));
        }
    });
});