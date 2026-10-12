// =========================================================
// HEADER COMÚN - Se inyecta en todas las páginas
// =========================================================
// Edita SOLO este archivo para cambiar el header en todo el sitio
// =========================================================

(function() {
    const headerHTML = `
        <header class="site-header">
            <div class="header-container">
                <a href="index.html">
                    <img src="assets/logos/kampa.png" alt="Kampa" class="header-logo" onerror="this.style.display='none';">
                </a>

                <nav class="main-nav">
                    <a href="index.html" data-page="index">Home</a>
                    <a href="about.html" data-page="about">About me</a>
                    <a href="basketball-terms.html" data-page="basketball-terms">Basketball terms</a>
                    <a href="games.html" data-page="games">Games</a>
                    <a href="lessons.html" data-page="lessons">Lessons</a>
                </nav>

                <a href="index.html">
                    <img src="assets/logos/school.png" alt="Zhuzhou Foreign Language School" class="header-logo" onerror="this.style.display='none';">
                </a>
            </div>
        </header>
    `;

    const container = document.getElementById('header-container');
    if (container) {
        container.innerHTML = headerHTML;

        // Marcar el enlace activo según la página actual
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        const activeLink = container.querySelector(`[data-page="${currentPage}"]`);
        if (activeLink) activeLink.classList.add('active');
    }
})();
