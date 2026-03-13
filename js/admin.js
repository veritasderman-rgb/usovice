// ===== ADMIN PANEL JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {

    // --- Authentication ---
    const DEFAULT_USER = 'admin';
    const DEFAULT_PASS = 'skola2026';

    function getCredentials() {
        const stored = localStorage.getItem('zs_admin_credentials');
        if (stored) return JSON.parse(stored);
        return { user: DEFAULT_USER, pass: DEFAULT_PASS };
    }

    function isLoggedIn() {
        return sessionStorage.getItem('zs_admin_logged') === 'true';
    }

    function showApp() {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminApp').style.display = 'flex';
        loadDashboard();
    }

    if (isLoggedIn()) showApp();

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('loginUser').value;
        const pass = document.getElementById('loginPass').value;
        const creds = getCredentials();
        if (user === creds.user && pass === creds.pass) {
            sessionStorage.setItem('zs_admin_logged', 'true');
            document.getElementById('loginError').style.display = 'none';
            showApp();
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        sessionStorage.removeItem('zs_admin_logged');
        location.reload();
    });

    // --- Navigation ---
    const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const pageTitle = document.getElementById('pageTitle');

    const sectionTitles = {
        dashboard: 'Přehled',
        articles: 'Správa článků',
        pages: 'Úprava stránek',
        gallery: 'Galerie',
        contacts: 'Kontakty',
        settings: 'Nastavení'
    };

    function navigateTo(sectionName) {
        sections.forEach(s => s.classList.remove('active'));
        sidebarLinks.forEach(l => l.classList.remove('active'));

        const target = document.getElementById('section-' + sectionName);
        if (target) {
            target.classList.add('active');
            // Also hide article editor when navigating away
            const editor = document.getElementById('section-article-editor');
            if (sectionName !== 'article-editor') {
                editor.style.display = 'none';
            }
        }

        sidebarLinks.forEach(l => {
            if (l.dataset.section === sectionName) l.classList.add('active');
        });

        pageTitle.textContent = sectionTitles[sectionName] || sectionName;

        // Load section data
        if (sectionName === 'dashboard') loadDashboard();
        if (sectionName === 'articles') loadArticles();
        if (sectionName === 'gallery') loadGalleryAdmin();

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(this.dataset.section);
        });
    });

    // Sidebar toggle (mobile)
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('open');
        });
    }

    // Quick actions
    document.querySelectorAll('.action-btn[data-action]').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            if (action === 'new-article') {
                navigateTo('articles');
                openArticleEditor();
            } else if (action === 'edit-about') {
                navigateTo('pages');
                openPageEditor('about');
            } else if (action === 'edit-druzina') {
                navigateTo('pages');
                openPageEditor('druzina');
            } else if (action === 'edit-jidelna') {
                navigateTo('pages');
                openPageEditor('jidelna');
            }
        });
    });

    // --- Toast ---
    function showToast(message, type) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = 'toast visible ' + (type || '');
        setTimeout(() => { toast.className = 'toast'; }, 3000);
    }

    // --- Dashboard ---
    function loadDashboard() {
        const articles = getArticles();
        document.getElementById('statArticles').textContent = articles.length;

        const recent = document.getElementById('recentArticles');
        const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        recent.innerHTML = sorted.map(a => {
            const d = new Date(a.date).toLocaleDateString('cs-CZ');
            return `<div class="article-item" style="margin-bottom:4px;">
                <div class="article-icon" style="background:${a.color || '#667eea'}"><i class="${a.icon || 'fas fa-newspaper'}"></i></div>
                <div class="article-info"><h4>${escapeHtml(a.title)}</h4><p>${d}</p></div>
            </div>`;
        }).join('');
    }

    // --- Articles ---
    function loadArticles() {
        const articles = getArticles();
        const list = document.getElementById('articlesList');
        const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

        list.innerHTML = sorted.map(a => {
            const d = new Date(a.date).toLocaleDateString('cs-CZ');
            return `<div class="article-item">
                <div class="article-icon" style="background:${a.color || '#667eea'}"><i class="${a.icon || 'fas fa-newspaper'}"></i></div>
                <div class="article-info">
                    <h4>${escapeHtml(a.title)}</h4>
                    <p>${d} · ${a.category || 'ostatní'}</p>
                </div>
                <div class="article-actions">
                    <button title="Upravit" onclick="editArticle(${a.id})"><i class="fas fa-edit"></i></button>
                    <button class="delete" title="Smazat" onclick="deleteArticle(${a.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
        }).join('');
    }

    // Article search
    const searchInput = document.getElementById('articleSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const q = this.value.toLowerCase();
            document.querySelectorAll('#articlesList .article-item').forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                item.style.display = title.includes(q) ? 'flex' : 'none';
            });
        });
    }

    // New article button
    document.getElementById('newArticleBtn').addEventListener('click', () => openArticleEditor());

    function openArticleEditor(article) {
        const editorSection = document.getElementById('section-article-editor');
        const articlesSection = document.getElementById('section-articles');
        articlesSection.classList.remove('active');
        editorSection.style.display = 'block';
        editorSection.classList.add('active');

        pageTitle.textContent = article ? 'Upravit článek' : 'Nový článek';

        if (article) {
            document.getElementById('articleId').value = article.id;
            document.getElementById('articleTitle').value = article.title;
            document.getElementById('articleDate').value = article.date;
            document.getElementById('articleCategory').value = article.category || 'ostatni';
            document.getElementById('articleIcon').value = article.icon || 'fas fa-newspaper';
            document.getElementById('articleColor').value = article.color || '#667eea';
            document.getElementById('articleSummary').value = article.summary || '';
            document.getElementById('articleContent').innerHTML = article.content || '';
        } else {
            document.getElementById('articleId').value = '';
            document.getElementById('articleTitle').value = '';
            document.getElementById('articleDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('articleCategory').value = 'akce';
            document.getElementById('articleIcon').value = 'fas fa-newspaper';
            document.getElementById('articleColor').value = '#667eea';
            document.getElementById('articleSummary').value = '';
            document.getElementById('articleContent').innerHTML = '';
        }
    }

    // Back to articles
    document.getElementById('backToArticles').addEventListener('click', function() {
        document.getElementById('section-article-editor').style.display = 'none';
        navigateTo('articles');
    });

    // Save article
    document.getElementById('saveArticle').addEventListener('click', function() {
        const title = document.getElementById('articleTitle').value.trim();
        const date = document.getElementById('articleDate').value;
        const summary = document.getElementById('articleSummary').value.trim();

        if (!title || !date || !summary) {
            showToast('Vyplňte prosím všechna povinná pole.', 'error');
            return;
        }

        const articles = getArticles();
        const id = document.getElementById('articleId').value;

        const articleData = {
            title: title,
            date: date,
            category: document.getElementById('articleCategory').value,
            icon: document.getElementById('articleIcon').value || 'fas fa-newspaper',
            color: document.getElementById('articleColor').value || '#667eea',
            summary: summary,
            content: document.getElementById('articleContent').innerHTML
        };

        if (id) {
            // Update existing
            const idx = articles.findIndex(a => a.id == id);
            if (idx !== -1) {
                articleData.id = parseInt(id);
                articles[idx] = articleData;
            }
        } else {
            // New article
            const maxId = articles.reduce((max, a) => Math.max(max, a.id), 0);
            articleData.id = maxId + 1;
            articles.push(articleData);
        }

        saveArticles(articles);
        showToast('Článek byl uložen!', 'success');
        document.getElementById('section-article-editor').style.display = 'none';
        navigateTo('articles');
    });

    // Edit / Delete article (global functions)
    window.editArticle = function(id) {
        const articles = getArticles();
        const article = articles.find(a => a.id === id);
        if (article) openArticleEditor(article);
    };

    window.deleteArticle = function(id) {
        if (!confirm('Opravdu chcete smazat tento článek?')) return;
        let articles = getArticles();
        articles = articles.filter(a => a.id !== id);
        saveArticles(articles);
        showToast('Článek byl smazán.', 'success');
        loadArticles();
    };

    // --- WYSIWYG toolbar ---
    document.querySelectorAll('.editor-toolbar button[data-cmd]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const cmd = this.dataset.cmd;
            const val = this.dataset.val || null;

            if (cmd === 'createLink') {
                const url = prompt('Zadejte URL odkazu:');
                if (url) document.execCommand(cmd, false, url);
            } else if (cmd === 'formatBlock' && val) {
                document.execCommand(cmd, false, '<' + val + '>');
            } else {
                document.execCommand(cmd, false, val);
            }
        });
    });

    // --- Page Editor ---
    let currentEditPage = null;

    document.querySelectorAll('.edit-page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openPageEditor(this.dataset.page);
        });
    });

    function openPageEditor(pageName) {
        currentEditPage = pageName;
        const modal = document.getElementById('pageEditorModal');
        const content = document.getElementById('pageEditorContent');
        const title = document.getElementById('pageEditorTitle');

        const titles = {
            about: 'Upravit — O škole',
            druzina: 'Upravit — Školní družina',
            jidelna: 'Upravit — Školní jídelna',
            enrollment: 'Upravit — Zápis do 1. tříd'
        };

        title.textContent = titles[pageName] || 'Upravit stránku';

        // Load saved content or default from DOM
        const saved = getEditableContent(pageName);
        if (saved) {
            content.innerHTML = saved;
        } else {
            // Get default content from index.html elements
            const defaults = {
                about: '<p>Základní škola Úšovice je úplná základní škola s 1.–9. ročníkem, která vzdělává více než <strong>565 žáků</strong>. Na prvním stupni jsou zpravidla tři paralelní třídy, na druhém stupni dvě až čtyři třídy v ročníku. Od školního roku 2020/21 funguje i přípravná třída.</p><p>Škola se věnuje žákům nadaným, žákům se speciálními vzdělávacími potřebami i žákům cizincům. Vzdělávací program nese název <strong>„Tvořivá škola — Šance pro každého"</strong>.</p><p>Disponujeme renovovanými dílnami, novými odbornými učebnami chemie, fyziky a přírodních věd, dvěma počítačovými učebnami a řadou mobilních zařízení.</p>',
                druzina: '<h3>Provozní doba</h3><ul><li>Ranní: 6:00 – 8:00</li><li>Odpolední: 11:40 – 16:45</li><li>Kroužky: 15:00 – 16:00 (říjen–květen)</li></ul><h3>Poplatky</h3><p>300 Kč / měsíc. Září–leden: 1 500 Kč (do 31.10.), Únor–červen: 1 500 Kč (do 28.2.).</p>',
                jidelna: '<p>Jídelníček je dostupný v aplikaci Strava.cz. Kontakt na jídelnu: +420 354 623 557. Odhlašování obědů den předem do 14:00.</p>',
                enrollment: '<p>Výsledky zápisu do 1. tříd 2026/2027 byly zveřejněny. Všichni uchazeči přijati s výjimkou jednoho nezletilého žadatele (RQ056).</p>'
            };
            content.innerHTML = defaults[pageName] || '';
        }

        modal.style.display = 'flex';
    }

    document.getElementById('closePageEditor').addEventListener('click', closePageEditor);
    document.getElementById('cancelPageEdit').addEventListener('click', closePageEditor);

    function closePageEditor() {
        document.getElementById('pageEditorModal').style.display = 'none';
        currentEditPage = null;
    }

    document.getElementById('savePageEdit').addEventListener('click', function() {
        if (!currentEditPage) return;
        const content = document.getElementById('pageEditorContent').innerHTML;
        saveEditableContent(currentEditPage, content);
        showToast('Stránka byla uložena!', 'success');
        closePageEditor();
    });

    // Close modal on overlay click
    document.getElementById('pageEditorModal').addEventListener('click', function(e) {
        if (e.target === this) closePageEditor();
    });

    // --- Gallery Admin ---
    function getGalleryItems() {
        const stored = localStorage.getItem('zs_gallery');
        if (stored) return JSON.parse(stored);
        return [
            { id: 1, title: 'VR PROFILAB', desc: 'Profesní orientace s VR', color1: '#667eea', color2: '#764ba2' },
            { id: 2, title: 'Zimní olympiáda', desc: 'Projektový den 5. tříd', color1: '#f093fb', color2: '#f5576c' },
            { id: 3, title: 'Techmania Plzeň', desc: 'Exkurze do science centra', color1: '#4facfe', color2: '#00f2fe' },
            { id: 4, title: 'Den Země', desc: 'Ekologické aktivity', color1: '#43e97b', color2: '#38f9d7' },
            { id: 5, title: 'AJ nás baví', desc: 'Soutěž v angličtině', color1: '#fa709a', color2: '#fee140' },
            { id: 6, title: 'Sférické kino', desc: '360° projekce', color1: '#a18cd1', color2: '#fbc2eb' }
        ];
    }

    function saveGalleryItems(items) {
        localStorage.setItem('zs_gallery', JSON.stringify(items));
    }

    function loadGalleryAdmin() {
        const items = getGalleryItems();
        const grid = document.getElementById('galleryAdminGrid');
        grid.innerHTML = items.map(item => `
            <div class="gallery-admin-item">
                <div class="gallery-admin-preview" style="background:linear-gradient(135deg,${item.color1},${item.color2})">
                    <i class="fas fa-image"></i>
                </div>
                <div class="gallery-admin-body">
                    <input type="text" value="${escapeHtml(item.title)}" placeholder="Název" data-id="${item.id}" data-field="title">
                    <input type="text" value="${escapeHtml(item.desc)}" placeholder="Popis" data-id="${item.id}" data-field="desc">
                    <div class="gallery-admin-actions">
                        <button onclick="saveGalleryItem(${item.id})"><i class="fas fa-save"></i> Uložit</button>
                        <button class="delete" onclick="deleteGalleryItem(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    window.saveGalleryItem = function(id) {
        const items = getGalleryItems();
        const idx = items.findIndex(i => i.id === id);
        if (idx === -1) return;
        const titleInput = document.querySelector(`input[data-id="${id}"][data-field="title"]`);
        const descInput = document.querySelector(`input[data-id="${id}"][data-field="desc"]`);
        if (titleInput) items[idx].title = titleInput.value;
        if (descInput) items[idx].desc = descInput.value;
        saveGalleryItems(items);
        showToast('Galerie uložena!', 'success');
    };

    window.deleteGalleryItem = function(id) {
        if (!confirm('Smazat položku galerie?')) return;
        let items = getGalleryItems();
        items = items.filter(i => i.id !== id);
        saveGalleryItems(items);
        loadGalleryAdmin();
        showToast('Položka smazána.', 'success');
    };

    document.getElementById('addGalleryItem').addEventListener('click', function() {
        const items = getGalleryItems();
        const maxId = items.reduce((max, i) => Math.max(max, i.id), 0);
        items.push({
            id: maxId + 1,
            title: 'Nová položka',
            desc: 'Popis',
            color1: '#667eea',
            color2: '#764ba2'
        });
        saveGalleryItems(items);
        loadGalleryAdmin();
        showToast('Položka přidána!', 'success');
    });

    // --- Contacts ---
    document.getElementById('contactsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const contacts = {
            phone: document.getElementById('contactPhone').value,
            mobile: document.getElementById('contactMobile').value,
            email: document.getElementById('contactEmail').value,
            dataBox: document.getElementById('contactDataBox').value,
            cafeteria: document.getElementById('contactCafeteria').value,
            club: document.getElementById('contactClub').value,
            address: document.getElementById('contactAddress').value
        };
        localStorage.setItem('zs_contacts', JSON.stringify(contacts));
        showToast('Kontakty uloženy!', 'success');
    });

    // Load saved contacts
    const savedContacts = localStorage.getItem('zs_contacts');
    if (savedContacts) {
        const c = JSON.parse(savedContacts);
        if (c.phone) document.getElementById('contactPhone').value = c.phone;
        if (c.mobile) document.getElementById('contactMobile').value = c.mobile;
        if (c.email) document.getElementById('contactEmail').value = c.email;
        if (c.dataBox) document.getElementById('contactDataBox').value = c.dataBox;
        if (c.cafeteria) document.getElementById('contactCafeteria').value = c.cafeteria;
        if (c.club) document.getElementById('contactClub').value = c.club;
        if (c.address) document.getElementById('contactAddress').value = c.address;
    }

    // --- Password Change ---
    document.getElementById('passwordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const current = document.getElementById('currentPassword').value;
        const newPass = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmPassword').value;
        const creds = getCredentials();

        if (current !== creds.pass) {
            showToast('Současné heslo je nesprávné.', 'error');
            return;
        }
        if (newPass !== confirm) {
            showToast('Nová hesla se neshodují.', 'error');
            return;
        }
        if (newPass.length < 4) {
            showToast('Heslo musí mít alespoň 4 znaky.', 'error');
            return;
        }

        creds.pass = newPass;
        localStorage.setItem('zs_admin_credentials', JSON.stringify(creds));
        showToast('Heslo bylo změněno!', 'success');
        this.reset();
    });

    // --- Export / Import ---
    document.getElementById('exportData').addEventListener('click', function() {
        const data = {
            articles: getArticles(),
            gallery: getGalleryItems(),
            contacts: localStorage.getItem('zs_contacts') ? JSON.parse(localStorage.getItem('zs_contacts')) : null,
            pages: {}
        };
        // Collect editable pages
        ['about', 'druzina', 'jidelna', 'enrollment'].forEach(key => {
            const val = getEditableContent(key);
            if (val) data.pages[key] = val;
        });

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'zs-usovice-backup-' + new Date().toISOString().split('T')[0] + '.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exportována!', 'success');
    });

    document.getElementById('importData').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
            try {
                const data = JSON.parse(ev.target.result);
                if (data.articles) saveArticles(data.articles);
                if (data.gallery) saveGalleryItems(data.gallery);
                if (data.contacts) localStorage.setItem('zs_contacts', JSON.stringify(data.contacts));
                if (data.pages) {
                    Object.keys(data.pages).forEach(key => {
                        saveEditableContent(key, data.pages[key]);
                    });
                }
                showToast('Data importována!', 'success');
                loadDashboard();
            } catch (err) {
                showToast('Chyba při importu dat.', 'error');
            }
        };
        reader.readAsText(file);
    });

    document.getElementById('resetData').addEventListener('click', function() {
        if (!confirm('Opravdu chcete obnovit výchozí data? Všechny změny budou ztraceny.')) return;
        localStorage.removeItem('zs_articles');
        localStorage.removeItem('zs_gallery');
        localStorage.removeItem('zs_contacts');
        ['about', 'druzina', 'jidelna', 'enrollment'].forEach(key => {
            localStorage.removeItem('zs_editable_' + key);
        });
        showToast('Data obnovena na výchozí hodnoty.', 'success');
        loadDashboard();
    });

    // --- Utility ---
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text || '';
        return div.innerHTML;
    }
});
