// ===== MAIN WEBSITE JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation ---
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            navToggle.classList.toggle('active');
        });
        // Close nav on link click
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // --- Sticky Header Shadow ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 10);
        }
    });

    // --- Back to Top ---
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (backToTop) {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }
    });
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Counter Animation ---
    function animateCounters() {
        document.querySelectorAll('.stat-number[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.round(current);
            }, 16);
        });
    }

    // Use IntersectionObserver for counter animation
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(heroSection);
    }

    // --- Scroll Animations ---
    const animElements = document.querySelectorAll('.section-header, .quick-card, .feature-card, .leader-card, .news-card, .doc-card, .project-card, .info-block, .jidelna-card');
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        animObserver.observe(el);
    });

    // --- Staff Table Toggles ---
    document.querySelectorAll('.staff-heading[data-toggle]').forEach(heading => {
        heading.addEventListener('click', function() {
            const targetId = this.dataset.toggle;
            const wrapper = document.getElementById(targetId);
            if (wrapper) {
                const isOpen = wrapper.classList.contains('open');
                // Close all
                document.querySelectorAll('.staff-table-wrapper').forEach(w => w.classList.remove('open'));
                document.querySelectorAll('.staff-heading').forEach(h => h.classList.remove('active'));
                // Toggle current
                if (!isOpen) {
                    wrapper.classList.add('open');
                    this.classList.add('active');
                }
            }
        });
    });

    // --- Load News Articles ---
    function renderNews() {
        const grid = document.getElementById('news-grid');
        if (!grid) return;
        const articles = getArticles();
        // Sort by date descending, show first 6
        const sorted = articles.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
        grid.innerHTML = sorted.map(article => {
            const dateFormatted = new Date(article.date).toLocaleDateString('cs-CZ', {
                day: 'numeric', month: 'long', year: 'numeric'
            });
            return `
                <div class="news-card" data-id="${article.id}">
                    <div class="news-card-image" style="background: linear-gradient(135deg, ${article.color || '#667eea'}, ${adjustColor(article.color || '#667eea', -30)});">
                        <i class="${article.icon || 'fas fa-newspaper'}"></i>
                    </div>
                    <div class="news-card-body">
                        <div class="news-card-date">${dateFormatted}</div>
                        <h3>${escapeHtml(article.title)}</h3>
                        <p>${escapeHtml(article.summary)}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function adjustColor(hex, amount) {
        hex = hex.replace('#', '');
        const num = parseInt(hex, 16);
        let r = Math.min(255, Math.max(0, (num >> 16) + amount));
        let g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
        let b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
        return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    renderNews();

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
});
