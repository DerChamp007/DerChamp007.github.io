document.addEventListener('DOMContentLoaded', () => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Verhindert, dass der Browser standardmäßig zum Anker springt

            const targetId = link.getAttribute('href').substring(1); // Entferne das # Zeichen
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

