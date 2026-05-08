/* ===================================
   ABCCA — Enhanced script.js
   =================================== */

/* Mobile Menu Toggle */
const menuToggle = document.getElementById('menuToggle');
const navMenu    = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity   = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity   = '1';
            spans[2].style.transform = 'none';
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelectorAll('span').forEach(s => {
                s.style.transform = 'none';
                s.style.opacity   = '1';
            });
        });
    });
}

/* Scroll-to-Top Button */
let scrollTopBtn = document.getElementById('scrollTopBtn');
if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.title = 'Back to top';
    document.body.appendChild(scrollTopBtn);
}

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Intersection Observer — fade-in on scroll */
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.feature-card, .partner-card, .detail-item, .outcome-item, .benefit-item, .requirement-item, .project-card, .partner-card-big, .stat-box'
).forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `.visible { opacity: 1 !important; transform: none !important; }`;
    document.head.appendChild(style);
});

/* Input focus enhancement */
document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', e => {
        if (e.target.hasAttribute('required') && !e.target.value.trim()) {
            e.target.style.borderColor = '#e8457a';
        } else {
            e.target.style.borderColor = '';
        }
    });
});
