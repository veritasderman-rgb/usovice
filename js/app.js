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
        // On mobile: toggle dropdown on parent click instead of navigating
        nav.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = this.closest('.has-dropdown');
                    parent.classList.toggle('mobile-open');
                }
            });
        });
        // Close nav on leaf link click
        nav.querySelectorAll('.dropdown-link, a.nav-link:not(.has-dropdown .nav-link)').forEach(link => {
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
            const imageStyle = article.image
                ? `background-image: url('${article.image}'); background-size: cover; background-position: center;`
                : `background: linear-gradient(135deg, ${article.color || '#667eea'}, ${adjustColor(article.color || '#667eea', -30)});`;
            const iconOverlay = article.image ? '' : `<i class="${article.icon || 'fas fa-newspaper'}"></i>`;
            return `
                <div class="news-card" data-id="${article.id}">
                    <div class="news-card-image" style="${imageStyle}">
                        ${iconOverlay}
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

    // --- Article Detail Modal ---
    function openArticleModal(articleId) {
        const articles = getArticles();
        const article = articles.find(a => a.id == articleId);
        if (!article) return;

        const modal = document.getElementById('articleModal');
        const icon = document.getElementById('articleModalIcon');
        const category = document.getElementById('articleModalCategory');
        const date = document.getElementById('articleModalDate');
        const title = document.getElementById('articleModalTitle');
        const body = document.getElementById('articleModalBody');
        const footer = document.getElementById('articleModalFooter');

        // Set icon background
        const bg = `linear-gradient(135deg, ${article.color || '#667eea'}, ${adjustColor(article.color || '#667eea', -30)})`;
        icon.style.background = bg;
        icon.innerHTML = `<i class="${article.icon || 'fas fa-newspaper'}"></i>`;

        // Category
        category.textContent = article.category || 'aktualita';

        // Date
        date.textContent = new Date(article.date).toLocaleDateString('cs-CZ', {
            day: 'numeric', month: 'long', year: 'numeric'
        });

        // Title
        title.textContent = article.title;

        // Body — convert newlines to paragraphs
        const contentText = article.content || article.summary;
        const paragraphs = contentText.split('\n\n').filter(p => p.trim());
        body.innerHTML = paragraphs.map(p => {
            // Handle bullet points
            if (p.trim().startsWith('•') || p.trim().startsWith('- ')) {
                const items = p.split('\n').filter(l => l.trim());
                return '<ul>' + items.map(item =>
                    '<li>' + escapeHtml(item.replace(/^[•\-]\s*/, '')) + '</li>'
                ).join('') + '</ul>';
            }
            // Handle numbered lists
            const lines = p.split('\n').filter(l => l.trim());
            if (lines.length > 1) {
                return lines.map(l => '<p>' + escapeHtml(l) + '</p>').join('');
            }
            return '<p>' + escapeHtml(p.trim()) + '</p>';
        }).join('');

        // Footer tags
        let footerHtml = '';
        if (article.author) {
            footerHtml += `<span class="author-tag"><i class="fas fa-user"></i> ${escapeHtml(article.author)}</span>`;
        }
        if (article.hasAttachment) {
            footerHtml += `<span class="attachment-tag"><i class="fas fa-paperclip"></i> ${escapeHtml(article.attachmentName || 'Příloha')} (${escapeHtml(article.attachmentFormat || 'PDF')})</span>`;
        }
        if (article.hasGallery) {
            footerHtml += `<span class="gallery-tag"><i class="fas fa-images"></i> Fotogalerie</span>`;
        }
        footer.innerHTML = footerHtml;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeArticleModal() {
        const modal = document.getElementById('articleModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close modal on X button
    const modalCloseBtn = document.getElementById('articleModalClose');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeArticleModal);
    }

    // Close modal on overlay click
    const modalOverlay = document.getElementById('articleModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeArticleModal();
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeArticleModal();
    });

    // Make news cards clickable
    document.getElementById('news-grid').addEventListener('click', function(e) {
        const card = e.target.closest('.news-card');
        if (card) {
            const articleId = card.dataset.id;
            if (articleId) openArticleModal(articleId);
        }
    });

    // --- Load CMS Section Content ---
    function loadSectionContent() {
        // Hero
        const hero = getSectionContent('hero');
        if (hero) {
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroTitle) heroTitle.innerHTML = hero.title;
            if (heroSubtitle) heroSubtitle.innerHTML = hero.subtitle;
            // Stats
            const statEls = document.querySelectorAll('.hero-stats .stat');
            hero.stats.forEach((s, i) => {
                if (statEls[i]) {
                    const numEl = statEls[i].querySelector('.stat-number');
                    const labelEl = statEls[i].querySelector('.stat-label');
                    if (numEl) { numEl.dataset.count = s.count; numEl.textContent = '0'; }
                    if (labelEl) labelEl.textContent = s.label;
                }
            });
            // Buttons
            const btns = document.querySelectorAll('.hero-buttons a');
            if (btns[0]) { btns[0].textContent = hero.btnPrimary.text; btns[0].href = hero.btnPrimary.link; }
            if (btns[1]) { btns[1].textContent = hero.btnSecondary.text; btns[1].href = hero.btnSecondary.link; }
        }

        // Leadership
        const leadership = getSectionContent('leadership');
        const leaderGrid = document.querySelector('.leadership-grid');
        if (leadership && leaderGrid) {
            leaderGrid.innerHTML = leadership.map(p => `
                <div class="leader-card">
                    <div class="leader-avatar"><i class="${p.icon}"></i></div>
                    <h3>${escapeHtml(p.name)}</h3>
                    <p class="leader-role">${escapeHtml(p.role)}</p>
                    ${p.contact ? '<p><i class="fas fa-envelope"></i> ' + escapeHtml(p.contact) + '</p>' : ''}
                </div>`).join('');
        }

        // Enrollment banner
        const enrollment = getSectionContent('enrollment');
        if (enrollment) {
            const bannerText = document.querySelector('#enrollment .banner-text');
            const bannerBtn = document.querySelector('#enrollment .btn');
            if (bannerText) {
                bannerText.innerHTML = '<h2>' + enrollment.title + '</h2><p>' + enrollment.text + '</p>';
            }
            if (bannerBtn) {
                bannerBtn.textContent = enrollment.btnText;
                bannerBtn.href = enrollment.btnLink;
            }
        }

        // Projects
        const projects = getSectionContent('projects');
        const projGrid = document.querySelector('.projects-grid');
        if (projects && projGrid) {
            projGrid.innerHTML = projects.map(p => `
                <div class="project-card">
                    <span class="project-badge">${escapeHtml(p.badge)}</span>
                    <h3>${escapeHtml(p.title)}</h3>
                    <p>${escapeHtml(p.desc)}</p>
                </div>`).join('');
        }

        // Plans
        const plans = getSectionContent('plans');
        const plansGrid = document.querySelector('.plans-grid');
        if (plans && plansGrid) {
            plansGrid.innerHTML = plans.map(p => `
                <div class="plan-card">
                    <div class="plan-icon"><i class="${p.icon}"></i></div>
                    <h3>${escapeHtml(p.title)}</h3>
                    <p>${escapeHtml(p.desc)}</p>
                    <span class="plan-tag">${escapeHtml(p.tag)}</span>
                </div>`).join('');
        }

        // Poradenství
        const poradenstvi = getSectionContent('poradenstvi');
        const poradGrid = document.querySelector('.poradenstvi-grid');
        if (poradenstvi && poradGrid) {
            const cards = poradGrid.querySelectorAll('.poradenstvi-card');
            if (cards[0]) cards[0].innerHTML = poradenstvi.jak;
            if (cards[1]) cards[1].innerHTML = poradenstvi.sluzby;
        }

        // Orgány
        const organy = getSectionContent('organy');
        const orgGrid = document.querySelector('.organy-grid');
        if (organy && orgGrid) {
            const cards = orgGrid.querySelectorAll('.organy-card');
            if (cards[0]) {
                const iconEl = cards[0].querySelector('.organy-icon');
                const iconHtml = iconEl ? iconEl.outerHTML : '';
                cards[0].innerHTML = iconHtml + organy.krpds;
            }
            if (cards[1]) {
                const iconEl = cards[1].querySelector('.organy-icon');
                const iconHtml = iconEl ? iconEl.outerHTML : '';
                cards[1].innerHTML = iconHtml + organy.parlament;
            }
        }

        // Kontakt Extra
        const kontaktExtra = getSectionContent('kontaktExtra');
        const kontGrid = document.querySelector('.kontakt-tabs-grid');
        if (kontaktExtra && kontGrid) {
            kontGrid.innerHTML = kontaktExtra.map(c => `
                <div class="kontakt-block">
                    <h3><i class="${c.icon}"></i> ${escapeHtml(c.title)}</h3>
                    <ul class="contact-detail-list">${c.content}</ul>
                </div>`).join('');
        }

        // Ukraine
        const ukraine = getSectionContent('ukraine');
        const uaGrid = document.querySelector('.ukraine-grid');
        const uaHeader = document.querySelector('.ukraine-header');
        if (ukraine && uaGrid) {
            if (uaHeader) {
                const h2 = uaHeader.querySelector('h2');
                if (h2) h2.textContent = ukraine.header;
            }
            uaGrid.innerHTML = ukraine.cards.map(c => `
                <div class="ukraine-card">
                    <h3><i class="${c.icon}"></i> ${escapeHtml(c.title)}</h3>
                    ${c.content}
                </div>`).join('');
        }

        // Footer
        const footer = getSectionContent('footer');
        if (footer) {
            const footerDesc = document.querySelector('.footer-col p:first-of-type');
            const footerLinks = document.querySelector('.footer-col:nth-child(2) ul');
            if (footerDesc && footerDesc.closest('.footer-col').querySelector('h4')) {
                // Find the footer description paragraph (after h4 in first column)
                const firstCol = document.querySelector('.footer-grid .footer-col');
                if (firstCol) {
                    const descP = firstCol.querySelectorAll('p');
                    descP.forEach(p => {
                        if (!p.querySelector('i') && p.textContent.includes('Tvořivá')) {
                            p.textContent = footer.desc;
                        }
                    });
                }
            }
        }
    }
    loadSectionContent();

    // --- Hero Carousel ---
    function initHeroCarousel() {
        const track = document.getElementById('carouselTrack');
        const dotsContainer = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        if (!track || !dotsContainer) return;

        const articles = getArticles();
        // Prioritize articles with images, then sort by date
        const withImages = articles.filter(a => a.image).sort((a, b) => new Date(b.date) - new Date(a.date));
        const withoutImages = articles.filter(a => !a.image).sort((a, b) => new Date(b.date) - new Date(a.date));
        const sorted = [...withImages, ...withoutImages].slice(0, 10);
        if (sorted.length === 0) return;

        // Build slides
        track.innerHTML = sorted.map((article, i) => {
            const gradBg = `linear-gradient(135deg, ${article.color || '#667eea'}, ${adjustColor(article.color || '#667eea', -40)})`;
            const bgStyle = article.image
                ? `background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('${article.image}'); background-size: cover; background-position: center;`
                : `background:${gradBg};`;
            const dateStr = new Date(article.date).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
            const iconHtml = article.image ? '' : `<div class="carousel-slide-image"><i class="${article.icon || 'fas fa-newspaper'}"></i></div>`;
            const categoryLabels = { akce: 'Akce', sport: 'Sport', druzina: 'Družina', jidelna: 'Jídelna', zapisy: 'Zápisy', ekologie: 'Ekologie', vzdelavani: 'Vzdělávání', soutez: 'Soutěž', projekt: 'Projekt' };
            const catLabel = categoryLabels[article.category] || article.category || '';
            return `
                <div class="carousel-slide${i === 0 ? ' active' : ''}" style="${bgStyle}" data-index="${i}">
                    ${iconHtml}
                    <div class="carousel-slide-body">
                        ${catLabel ? `<div class="carousel-slide-category">${catLabel}</div>` : ''}
                        <div class="carousel-slide-date">${dateStr}</div>
                        <div class="carousel-slide-title">${escapeHtml(article.title)}</div>
                        <div class="carousel-slide-summary">${escapeHtml(article.summary || '')}</div>
                        <span class="carousel-slide-cta">Číst více →</span>
                    </div>
                </div>`;
        }).join('');

        // Build dots
        dotsContainer.innerHTML = sorted.map((_, i) =>
            `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
        ).join('');

        let current = 0;
        let autoTimer = null;
        const total = sorted.length;
        const slides = track.querySelectorAll('.carousel-slide');
        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        function goTo(idx) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (idx + total) % total;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        function startAuto() {
            stopAuto();
            autoTimer = setInterval(() => goTo(current + 1), 5000);
        }
        function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

        prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
        nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });
        dots.forEach(dot => {
            dot.addEventListener('click', () => { goTo(+dot.dataset.index); startAuto(); });
        });

        // Click slide → open article modal
        track.addEventListener('click', (e) => {
            const slide = e.target.closest('.carousel-slide');
            if (slide) {
                const idx = parseInt(slide.dataset.index);
                if (!isNaN(idx) && sorted[idx]) {
                    openArticleModal(sorted[idx].id);
                }
            }
        });

        startAuto();
    }
    initHeroCarousel();

    // --- Tabs (Družina, Jídelna) ---
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.dataset.tab;
            const wrapper = this.closest('.tabs-wrapper');
            // Deactivate all in this wrapper
            wrapper.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            wrapper.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            // Activate selected
            this.classList.add('active');
            const content = wrapper.querySelector('#' + targetId);
            if (content) content.classList.add('active');
        });
    });

    // Open correct tab if URL hash targets a tab-content
    function openTabByHash() {
        const hash = window.location.hash.replace('#', '');
        if (!hash) return;
        const target = document.getElementById(hash);
        if (target && target.classList.contains('tab-content')) {
            const wrapper = target.closest('.tabs-wrapper');
            if (wrapper) {
                wrapper.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                wrapper.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                target.classList.add('active');
                const btn = wrapper.querySelector(`[data-tab="${hash}"]`);
                if (btn) btn.classList.add('active');
                // Scroll to the wrapper
                setTimeout(() => {
                    const offset = 90;
                    const top = wrapper.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }, 100);
            }
        }
    }
    openTabByHash();
    window.addEventListener('hashchange', openTabByHash);

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
