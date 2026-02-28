/**
 * Portfolio — Junjie Wu
 * script.js — Interactivity, animations & dynamic features
 *
 * Features: Smooth scroll, scroll-reveal, skill bars, project tilt,
 *           Instagram carousel auto-scroll, dynamic durations
 *
 * © 2025 Junjie Wu
 */

// ===================================
// SMOOTH SCROLLING & ANIMATIONS
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Scroll reveal for .reveal elements
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});

// ===================================
// SKILL BARS ANIMATION
// ===================================

const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            bar.style.transition = 'width 1.5s ease-out';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===================================
// PROJECT CARDS SUBTLE TILT EFFECT
// ===================================

const projectCards = document.querySelectorAll('.project-showcase');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 50;
        const rotateY = (centerX - x) / 50;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const footerCopyright = document.querySelector('.footer-copyright');
if (footerCopyright) {
    const currentYear = new Date().getFullYear();
    footerCopyright.innerHTML = footerCopyright.innerHTML.replace('2025', currentYear);
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener('keydown', (e) => {
    // Press 'h' to go to top
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press '?' to show keyboard shortcuts
    if (e.key === '?') {
        console.log('%cAtajos de teclado:', 'font-weight: bold; font-size: 14px; color: #00d9ff;');
        console.log('H - Ir al inicio');
        console.log('? - Mostrar atajos');
    }
});

// ===================================
// ACCESSIBILITY IMPROVEMENTS
// ===================================

// Add ARIA labels dynamically
document.querySelectorAll('.project-showcase').forEach((card, index) => {
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Proyecto ${index + 1}`);
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c👋 ¡Hola!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%c¿Curioseando el código? Me gusta tu actitud 😉', 'font-size: 14px; color: #a0aec0;');
console.log('%cSi quieres hablar sobre datos, ingeniería o proyectos, escríbeme a junjiesm.w@outlook.com', 'font-size: 12px; color: #cbd5e1;');
console.log('%c\nStack de este portfolio: HTML5 + CSS3 + JavaScript Vanilla', 'font-size: 11px; color: #00d9ff; font-style: italic;');

// ===================================
// PAGE LOAD COMPLETE
// ===================================

window.addEventListener('load', () => {
    console.log('%c✅ Portfolio cargado correctamente', 'color: #10b981; font-weight: bold;');
});

// ===================================
// MEDIA CAROUSEL AUTO-SCROLL
// ===================================
(function () {
    const grid = document.querySelector('.media-grid');
    const dots = document.querySelectorAll('.media-dot');
    if (!grid || dots.length === 0) return;

    const items = grid.querySelectorAll('.media-item');
    let currentIndex = 0;
    let autoScrollInterval;
    let isPaused = false;

    function scrollToIndex(index) {
        const item = items[index];
        if (!item) return;
        const gridRect = grid.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const scrollLeft = item.offsetLeft - grid.offsetLeft - (gridRect.width / 2) + (itemRect.width / 2);
        grid.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        scrollToIndex(currentIndex);
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (!isPaused) nextSlide();
        }, 5000);
    }

    // Dot click navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            scrollToIndex(index);
        });
    });

    // Update dots on manual scroll
    grid.addEventListener('scroll', () => {
        const scrollCenter = grid.scrollLeft + grid.offsetWidth / 2;
        let closest = 0;
        let minDist = Infinity;
        items.forEach((item, i) => {
            const itemCenter = item.offsetLeft - grid.offsetLeft + item.offsetWidth / 2;
            const dist = Math.abs(scrollCenter - itemCenter);
            if (dist < minDist) { minDist = dist; closest = i; }
        });
        if (closest !== currentIndex) {
            currentIndex = closest;
            updateDots();
        }
    });

    // Pause on hover / touch
    grid.addEventListener('mouseenter', () => { isPaused = true; });
    grid.addEventListener('mouseleave', () => { isPaused = false; });
    grid.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    grid.addEventListener('touchend', () => {
        isPaused = false;
    });

    startAutoScroll();
})();

// ===================================
// DYNAMIC EXPERIENCE DURATIONS
// ===================================
(function () {
    function calculateDuration(startDate, endDate) {
        const start = new Date(startDate);
        const end = endDate === 'now' ? new Date() : new Date(endDate);

        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0 && remainingMonths > 0) {
            return `${years} año${years > 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
        } else if (years > 0) {
            return `${years} año${years > 1 ? 's' : ''}`;
        } else {
            return `${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const el = (id) => document.getElementById(id);
        if (el('current-duration')) el('current-duration').textContent = calculateDuration('2025-07-01', 'now');
        if (el('intern-duration')) el('intern-duration').textContent = calculateDuration('2025-02-01', '2025-07-01');
        if (el('total-duration')) el('total-duration').textContent = calculateDuration('2025-02-01', 'now');
    });
})();
