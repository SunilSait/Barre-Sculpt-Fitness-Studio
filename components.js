/**
 * Barre & Sculpt Fitness Studio — Shared Components & Utilities
 * Handles: Nav, Footer, Theme, RTL, Animations, Tabs, Counters, Accordion, Dashboard
 */

/* ─── THEME ────────────────────────────────────────────── */
(function initThemeEarly() {
    const saved = localStorage.getItem('bs_theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) document.documentElement.classList.add('dark');
    const dir = localStorage.getItem('bs_dir');
    if (dir === 'rtl') document.documentElement.setAttribute('dir', 'rtl');
})();

function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    if (document.body) document.body.classList.toggle('dark', isDark);
}

function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    localStorage.setItem('bs_theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
    updateThemeIcons();
}

function toggleDir() {
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('bs_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-indicator').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}

const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon').forEach(el => {
        el.innerHTML = isDark ? SUN_SVG : MOON_SVG;
    });
}

function togglePwd(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!input) return;
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    if (icon) {
        icon.innerHTML = show
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    }
}

/* ─── LOGO SVG ─────────────────────────────────────────── */
const LOGO_SVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#262626"/>
    <path d="M30 25 L30 75" stroke="#9B8EC1" stroke-width="5" stroke-linecap="round"/>
    <path d="M70 25 L70 75" stroke="#9B8EC1" stroke-width="5" stroke-linecap="round"/>
    <path d="M30 40 L70 40" stroke="#9B8EC1" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="58" r="12" stroke="#9B8EC1" stroke-width="3.5" fill="none"/>
    <path d="M50 50 L50 46" stroke="#9B8EC1" stroke-width="3" stroke-linecap="round"/>
    <path d="M44 64 L40 72" stroke="#9B8EC1" stroke-width="3" stroke-linecap="round"/>
    <path d="M56 64 L60 72" stroke="#9B8EC1" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const LOGO_SVG_DARK = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#9B8EC1"/>
    <path d="M30 25 L30 75" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <path d="M70 25 L70 75" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <path d="M30 40 L70 40" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="58" r="12" stroke="#fff" stroke-width="3.5" fill="none"/>
    <path d="M50 50 L50 46" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M44 64 L40 72" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M56 64 L60 72" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
</svg>`;

/* ─── NAV LINKS ────────────────────────────────────────── */
const NAV_LINKS = [
    { href: 'index.html', label: 'Home 1' },
    { href: 'home2.html', label: 'Home 2' },
    { href: 'classes.html', label: 'Class Schedule' },
    { href: 'instructors.html', label: 'Instructors' },
    { href: 'pricing.html', label: 'Membership' },
    { href: 'contact.html', label: 'Contact' },
];

/* ─── ICONS & ASSETS ───────────────────────────────────── */
const MENU_ICON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const CLOSE_ICON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

/* ─── BUILD NAVBAR ─────────────────────────────────────── */
function buildNav() {
    const wrap = document.getElementById('main-nav');
    if (!wrap) return;

    const isDash = window.location.pathname.includes('/dashboard');
    const base = isDash ? '../' : '';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    wrap.innerHTML = `
<header class="main-header" id="main-header">
    <nav class="nav-inner" aria-label="Main navigation">
        <a href="${base}index.html" class="nav-logo" aria-label="Barre & Sculpt Home">
            <div class="nav-logo-icon">
                ${LOGO_SVG}
            </div>
            <div class="nav-logo-text">
                <span class="brand-top">Barre & Sculpt</span>
                <span class="brand-bottom">Fitness Studio</span>
            </div>
        </a>

        <ul class="nav-links" role="list">
            ${NAV_LINKS.map(link => {
                const isActive = currentPage === link.href;
                return `<li><a href="${base}${link.href}" class="nav-link${isActive ? ' active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${link.label}</a></li>`;
            }).join('')}
        </ul>

        <div class="nav-right">
            <button onclick="toggleDir()" class="nav-icon-btn desktop-only" title="Toggle RTL/LTR" aria-label="Toggle text direction">
                <span class="dir-indicator" style="font-size:0.625rem;font-weight:700;">RTL</span>
            </button>
            <button onclick="toggleTheme()" class="nav-icon-btn desktop-only" title="Toggle dark/light mode" aria-label="Toggle dark mode">
                <span class="theme-icon">${MOON_SVG}</span>
            </button>
            <a href="${base}dashboard/index.html" class="btn btn-secondary btn-sm desktop-only">Dashboard</a>
            <a href="${base}login.html" class="btn btn-primary btn-sm desktop-only">Sign In</a>
            <button class="mobile-menu-btn" id="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="mobile-menu-icon">${MENU_ICON_SVG}</span>
            </button>
        </div>
    </nav>

    <!-- Mobile Backdrop -->
    <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-links">
            ${NAV_LINKS.map(link => {
                const isActive = currentPage === link.href;
                return `<a href="${base}${link.href}" class="mobile-nav-link${isActive ? ' active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${link.label}</a>`;
            }).join('')}
        </div>
        <div class="mobile-nav-actions">
            <a href="${base}dashboard/index.html" class="btn btn-secondary btn-sm">Dashboard</a>
            <a href="${base}login.html" class="btn btn-primary btn-sm">Sign In</a>
        </div>
        <div class="mobile-nav-utils">
            <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle RTL/LTR" aria-label="Toggle text direction">
                <span class="dir-indicator" style="font-size:0.625rem;font-weight:700;">RTL</span>
            </button>
            <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle theme" aria-label="Toggle dark mode">
                <span class="theme-icon">${MOON_SVG}</span>
            </button>
        </div>
    </div>
</header>`;

    window.addEventListener('scroll', () => {
        const h = document.getElementById('main-header');
        if (h) h.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    if (!isDash) {
        document.body.style.paddingTop = 'var(--nav-height)';
    }

    if (localStorage.getItem('bs_dir') === 'rtl') {
        document.querySelectorAll('.dir-indicator').forEach(el => el.textContent = 'LTR');
    }
    updateThemeIcons();

    // Auto-close menu on link click
    wrap.querySelectorAll('.mobile-menu a').forEach(a => {
        a.addEventListener('click', () => closeMobileMenu());
    });
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobile-menu-btn');
    const iconWrap = btn ? (btn.querySelector('.mobile-menu-icon') || btn) : null;
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        closeMobileMenu();
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (iconWrap) iconWrap.innerHTML = CLOSE_ICON_SVG;
        document.body.classList.add('menu-locked');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobile-menu-btn');
    const iconWrap = btn ? (btn.querySelector('.mobile-menu-icon') || btn) : null;
    if (!menu || !menu.classList.contains('open')) return;

    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (iconWrap) iconWrap.innerHTML = MENU_ICON_SVG;
    document.body.classList.remove('menu-locked');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;

    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;

    closeMobileMenu();
});

// Close mobile menu on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Close mobile menu on window resize above 1024px
window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        closeMobileMenu();
    }
});

/* ─── BUILD FOOTER ─────────────────────────────────────── */
function buildFooter() {
    const wrap = document.getElementById('main-footer');
    if (!wrap) return;
    const isDash = window.location.pathname.includes('/dashboard');
    const base = isDash ? '../' : '';

    wrap.innerHTML = `
<footer class="main-footer">
    <div class="footer-inner">
        <div class="footer-grid">
            <!-- Col 1: Brand & Socials -->
            <div class="footer-brand">
                <a href="${base}index.html" class="nav-logo footer-logo" aria-label="Barre & Sculpt Home">
                    <div class="nav-logo-icon">
                        ${LOGO_SVG}
                    </div>
                    <div class="nav-logo-text">
                        <span class="brand-top" style="color:#fff;">Barre & Sculpt</span>
                        <span class="brand-bottom">Fitness Studio</span>
                    </div>
                </a>
                <p>A boutique fitness studio offering barre, sculpt, and pilates-inspired classes designed to lengthen, tone, and transform your body.</p>
                <div class="footer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="YouTube">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A1A1A"/></svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="TikTok">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.89 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.14 15.7 6.34 6.34 0 0 0 9.48 22a6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.77 1.53V7.27a4.85 4.85 0 0 1-1-.58z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="footer-col">
                <h3 class="footer-heading">Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="${base}index.html" class="footer-link">Home 1 — Classic</a></li>
                    <li><a href="${base}home2.html" class="footer-link">Home 2 — Studio Modern</a></li>
                    <li><a href="${base}classes.html" class="footer-link">Class Schedule</a></li>
                    <li><a href="${base}instructors.html" class="footer-link">Our Instructors</a></li>
                    <li><a href="${base}pricing.html" class="footer-link">Membership Plans</a></li>
                    <li><a href="${base}contact.html" class="footer-link">Contact Studio</a></li>
                </ul>
            </div>

            <!-- Col 3: Programs & Studio -->
            <div class="footer-col">
                <h3 class="footer-heading">Programs & Studio</h3>
                <ul class="footer-links">
                    <li><a href="${base}classes.html" class="footer-link">Barre Essentials</a></li>
                    <li><a href="${base}classes.html" class="footer-link">Sculpt & Tone</a></li>
                    <li><a href="${base}classes.html" class="footer-link">Pilates Reformer</a></li>
                    <li><a href="${base}classes.html" class="footer-link">Stretch & Restore</a></li>
                    <li><a href="${base}coming-soon.html" class="footer-link">Coming Soon</a></li>
                    <li><a href="${base}404.html" class="footer-link">404 Error Page</a></li>
                </ul>
            </div>

            <!-- Col 4: Studio Location & Hours -->
            <div class="footer-col footer-col-contact">
                <h3 class="footer-heading">Studio Visit</h3>
                <div class="footer-contact-list">
                    <div class="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>128 Harmony Lane, Suite 200<br>New York, NY 10012</span>
                    </div>
                    <div class="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.13.96.34 1.9.65 2.82a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.92.31 1.86.52 2.82.65A2 2 0 0 1 21.72 17z"/></svg>
                        <a href="tel:+12125550347">+1 (212) 555-0347</a>
                    </div>
                    <div class="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <a href="mailto:hello@barresculpt.com">hello@barresculpt.com</a>
                    </div>
                    <div class="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>Mon–Fri: 6AM–9PM &bull; Sat: 7AM–6PM</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <p class="footer-copyright">&copy; ${new Date().getFullYear()} Barre & Sculpt Fitness Studio. All rights reserved.</p>
            <div class="footer-bottom-links">
                <a href="${base}coming-soon.html">Privacy Policy</a>
                <a href="${base}coming-soon.html">Terms of Service</a>
                <a href="${base}coming-soon.html">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>`;
}

/* ─── BACK TO TOP ──────────────────────────────────────── */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── SCROLL ANIMATIONS ───────────────────────────────── */
function initScrollAnimations() {
    const selectors = '.reveal,.reveal-left,.reveal-right,.stagger-item,.stat-card';
    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            observer.observe(el);
        }
    });
}

/* ─── COUNT-UP ─────────────────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1800;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = target + suffix;
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
        });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
}

/* ─── ACCORDION ────────────────────────────────────────── */
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('[data-acc-icon]');
    const isOpen = content.classList.contains('open');

    const parent = btn.closest('section') || document.body;
    parent.querySelectorAll('.accordion-content.open').forEach(c => {
        c.classList.remove('open');
        c.style.maxHeight = null;
        const ic = c.previousElementSibling.querySelector('[data-acc-icon]');
        if (ic) ic.style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
}

/* ─── DASHBOARD SIDEBAR ────────────────────────────────── */
function toggleSidebar() {
    const sidebar = document.getElementById('dash-sidebar');
    const overlay = document.getElementById('dash-overlay');
    if (!sidebar) return;
    const isOpen = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    if (overlay) overlay.classList.toggle('active', !isOpen);
    document.body.style.overflow = (!isOpen) ? 'hidden' : '';
}

function closeSidebar() {
    const sidebar = document.getElementById('dash-sidebar');
    const overlay = document.getElementById('dash-overlay');
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

/* ─── DASHBOARD TABS ───────────────────────────────────── */
function initDashTabs() {
    document.querySelectorAll('.dash-nav-item[data-tab]').forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.dataset.tab;
            document.querySelectorAll('.dash-nav-item[data-tab]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.dash-tab-content').forEach(t => t.classList.remove('active'));
            const target = document.getElementById('tab-' + tabId);
            if (target) target.classList.add('active');
            const title = document.getElementById('dashHeaderTitle');
            if (title) {
                const labels = {
                    overview: 'Overview',
                    bookings: 'Book Classes',
                    attendance: 'Attendance History',
                    membership: 'Membership',
                    payments: 'Payments',
                    settings: 'Account Settings'
                };
                title.innerHTML = `<span class="dash-title-prefix">Dashboard </span>${labels[tabId] || tabId}`;
            }
            if (window.innerWidth < 1024) closeSidebar();
        });
    });
}

/* ─── DASHBOARD TOAST & HELPERS ───────────────────────── */
function showDashToast(message) {
    let toast = document.getElementById('dashToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'dashToast';
        toast.className = 'dash-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>${message}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

function filterDashClasses(category, el) {
    if (el) {
        document.querySelectorAll('.dash-filter-pill').forEach(p => p.classList.remove('active'));
        el.classList.add('active');
    }
    const cards = document.querySelectorAll('.dash-class-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ─── NOTIFICATIONS ────────────────────────────────────── */
function initNotifications() {
    const btn = document.getElementById('notifBtn');
    const dropdown = document.getElementById('notifDropdown');
    if (!btn || !dropdown) return;
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
}

/* ─── LOGOUT MODAL ─────────────────────────────────────── */
function initLogout() {
    const btn = document.getElementById('logoutTriggerBtn');
    const modal = document.getElementById('logoutModal');
    const cancel = document.getElementById('logoutCancel');
    const confirm = document.getElementById('logoutConfirm');
    if (!btn || !modal) return;
    btn.addEventListener('click', () => modal.classList.add('open'));
    if (cancel) cancel.addEventListener('click', () => modal.classList.remove('open'));
    if (confirm) confirm.addEventListener('click', () => { window.location.href = '../login.html'; });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
}

/* ─── INIT ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    buildFooter();
    initBackToTop();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            initScrollAnimations();
            initCounters();
        });
    });

    // Dashboard-specific
    initDashTabs();
    initNotifications();
    initLogout();

    // Finalize theme
    const saved = localStorage.getItem('bs_theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDark);
    updateThemeIcons();

    if (localStorage.getItem('bs_dir') === 'rtl') {
        document.querySelectorAll('.dir-indicator').forEach(el => el.textContent = 'LTR');
    }
});

