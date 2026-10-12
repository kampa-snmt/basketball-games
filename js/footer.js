// =========================================================
// FOOTER COMÚN - Se inyecta en todas las páginas
// =========================================================
// Edita SOLO este archivo para cambiar el footer en todo el sitio
// =========================================================

(function() {
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-container">

                <div class="footer-credits">
                    <div class="creator">Created by Kampa</div>
                    <div class="school">for Zhuzhou Foreign Language School</div>
                    <div class="rights">All rights reserved</div>
                </div>

                <div class="footer-social">
                    <div class="label">More info on my social media</div>
                    <div class="redes-iconos">
                        <a href="https://www.instagram.com/kampa_snmt" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.twitch.tv/kampa_snmt" target="_blank" title="Twitch"><i class="fab fa-twitch"></i></a>
                        <a href="https://x.com/Kampa_snmt" target="_blank" title="X (Twitter)"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/@kampa_snmt" target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.tiktok.com/@kampa_snmt" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a>
                        <a href="https://www.rednote.com/user/profile/67844fd2000000000803e1e1" target="_blank" title="RedNote"><i class="fas fa-book"></i></a>
                        <a href="https://taplink.cc/kampa_snmt" target="_blank" title="Taplink"><i class="fas fa-link"></i></a>
                        <a href="mailto:contacto.kampa@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

            </div>
        </footer>
    `;

    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = footerHTML;
    }
})();
