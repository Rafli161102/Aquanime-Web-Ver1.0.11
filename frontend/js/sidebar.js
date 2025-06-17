document.addEventListener('DOMContentLoaded', function () {
    // Cari hamburger menu dengan id yang benar di semua halaman
    let hamburgerMenu = document.getElementById('hamburger-menu');
    if (!hamburgerMenu) {
        // Fallback untuk halaman yang pakai id="sidebar" (misal index.html)
        hamburgerMenu = document.getElementById('sidebar');
    }
    let sidebar = null;
    let sidebarOverlay = null;

    // Fungsi untuk mendapatkan path relatif dari halaman saat ini
    function getRelativePath(target) {
        // Ambil path saat ini
        const currentPath = window.location.pathname.replace(/\\/g, '/');
        // Hitung berapa banyak folder naik ke root
        const depth = currentPath.split('/').length - 2; // -2: buang '' awal & nama file
        // Jika sudah di root (index.html), langsung return target
        if (depth <= 0) return target;
        // Jika target sudah absolute (misal http), return langsung
        if (/^(https?:)?\/\//.test(target)) return target;
        // Jika target sudah mulai dengan '/', buang '/' di depan
        const cleanTarget = target.replace(/^\//, '');
        // Buat prefix ../ sebanyak depth
        let prefix = '';
        for (let i = 0; i < depth; i++) prefix += '../';
        return prefix + cleanTarget;
    }

    // MENU INDEPENDENT: Ubah sesuai kebutuhan
    const sidebarItems = [
        { label: 'Beranda', href: 'index.html' },
        { label: 'Tentang', href: 'pages/tentang.html' },
        { label: 'Proyek', href: 'pages/proyek.html' },
        { label: 'Portal', href: 'pages/portal.html' },
        { label: 'Kontak', href: 'pages/kontak.html' }
    ];

    function renderSidebarContent() {
        // Ambil menu dari navbar utama (bukan dari sidebarItems statis)
        let navLinks = document.querySelector('#nav-links');
        let menuHtml = '';
        if (navLinks) {
            menuHtml = Array.from(navLinks.children).map(li => {
                const a = li.querySelector('a');
                if (!a) return '';
                const href = a.getAttribute('href');
                const text = a.textContent;
                const dataLang = a.getAttribute('data-lang-key') ? ` data-lang-key="${a.getAttribute('data-lang-key')}"` : '';
                return `<li><a href="${href}" class="sidebar-link"${dataLang} tabindex="0">${text}</a></li>`;
            }).join('');
        } else {
            menuHtml = `<li><span style="color:red;">Menu tidak tersedia</span></li>`;
        }

        let html = `
            <button class="close-sidebar-btn" aria-label="Tutup Menu">&times;</button>
            <div class="sidebar-content">
                <ul style="list-style:none;margin:380px 0 0 0;padding:0;display:flex;flex-direction:column;align-items:flex-start;gap:18px;font-size:1.25em;font-weight:500;">
                    ${menuHtml}
                </ul>
            </div>
        `;
        // Social icons (optional): clone if you want them in sidebar
        const nav = document.querySelector('header nav');
        const socialIconsContainer = nav ? nav.querySelector('.social-icons') : null;
        if (socialIconsContainer) {
            const clonedSocialIcons = socialIconsContainer.cloneNode(true);
            clonedSocialIcons.classList.remove('social-icons');
            clonedSocialIcons.classList.add('sidebar-social-icons');
            html += `<div class="sidebar-social-icons-wrapper" style="margin:32px 0 0 18px;">${clonedSocialIcons.outerHTML}</div>`;
        }
        return html;
    }

    function ensureSidebar() {
        // Remove old sidebar if exists
        if (sidebar) sidebar.remove();
        sidebar = document.createElement('nav');
        sidebar.id = 'hamburger-sidebar';
        sidebar.className = 'hamburger-sidebar';
        sidebar.innerHTML = renderSidebarContent();
        document.body.appendChild(sidebar);

        setTimeout(() => sidebar.classList.add('open'), 10);

        // Overlay
        if (!sidebarOverlay) {
            sidebarOverlay = document.createElement('div');
            sidebarOverlay.id = 'hamburger-sidebar-overlay';
            sidebarOverlay.className = 'hamburger-sidebar-overlay';
            document.body.appendChild(sidebarOverlay);
        }
        sidebarOverlay.classList.add('active');

        attachSidebarListeners();
    }

    function attachSidebarListeners() {
        const closeBtn = sidebar.querySelector('.close-sidebar-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

        sidebar.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                closeSidebar();
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 350);
            });
            link.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeSidebar();
                    setTimeout(() => {
                        window.location.href = this.getAttribute('href');
                    }, 350);
                }
            });
        });

        // Social icon links
        sidebar.querySelectorAll('.sidebar-social-icons a').forEach(socialLink => {
            socialLink.addEventListener('click', function (e) {
                e.preventDefault();
                closeSidebar();
                window.open(this.getAttribute('href'), '_blank');
            });
            socialLink.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeSidebar();
                    window.open(this.getAttribute('href'), '_blank');
                }
            });
        });

        // Overlay click
        if (sidebarOverlay) {
            sidebarOverlay.onclick = closeSidebar;
        }
    }

    function openSidebar() {
        ensureSidebar();
        document.body.classList.add('sidebar-open');
        if (hamburgerMenu) hamburgerMenu.classList.add('is-active');
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
        if (hamburgerMenu) hamburgerMenu.classList.remove('is-active');
        setTimeout(() => {
            if (sidebar) sidebar.remove();
        }, 350);
    }

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', openSidebar);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebar();
    });

    // Responsive: Hamburger only for mobile, hide on desktop
    function handleResponsiveMenu() {
        if (window.innerWidth >= 993) {
            if (sidebar) sidebar.remove();
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            document.body.classList.remove('sidebar-open');
            if (hamburgerMenu) hamburgerMenu.style.display = 'none';
        } else {
            if (hamburgerMenu) hamburgerMenu.style.display = '';
        }
    }
    window.addEventListener('resize', handleResponsiveMenu);
    handleResponsiveMenu();
});