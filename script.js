/* ===================================
   Mobile Menu Toggle
   =================================== */

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/* ===================================
   Set Active Navigation Link
   =================================== */

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call function on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

/* ===================================
   Scroll to Top Button
   =================================== */

let scrollTopButton = document.getElementById('scrollTopBtn');

// Create scroll to top button if it doesn't exist
if (!scrollTopButton) {
    scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scrollTopBtn';
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg,#ff4da6,#ff80bf);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 99;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(255,77,166,0.4);
    `;
    document.body.appendChild(scrollTopButton);
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll to top functionality
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect
scrollTopButton.addEventListener('mouseover', () => {
    scrollTopButton.style.transform = 'scale(1.1)';
    scrollTopButton.style.background = 'linear-gradient(135deg,#ff66b3,#ff99cc)';
});

scrollTopButton.addEventListener('mouseout', () => {
    scrollTopButton.style.transform = 'scale(1)';
    scrollTopButton.style.background = 'linear-gradient(135deg,#ff4da6,#ff80bf)';
});

/* ===================================
   Form Input Validation
   =================================== */

const inputFields = document.querySelectorAll('input, textarea');

inputFields.forEach(field => {
    field.addEventListener('blur', (e) => {
        if (e.target.hasAttribute('required') && e.target.value.trim() === '') {
            e.target.style.borderColor = '#ff4da6';
        } else {
            e.target.style.borderColor = 'inherit';
        }
    });
    
    field.addEventListener('focus', (e) => {
        e.target.style.borderColor = '#ff66b3';
        e.target.style.boxShadow = '0 0 5px rgba(255,77,166,0.5)';
    });
});

/* ===================================
   Add Fade-in Animation Keyframes
   =================================== */

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .hero {
        animation: slideIn 0.8s ease-in-out;
        background: linear-gradient(135deg,#ff4da6,#ff99cc);
        color:white;
    }

    .feature-card,
    .trainee-card,
    .project-card{
        border-top:4px solid #ff4da6;
        transition:0.3s;
        box-shadow:0 5px 15px rgba(255,77,166,0.2);
    }

    .feature-card:hover,
    .trainee-card:hover,
    .project-card:hover{
        transform:translateY(-6px);
        box-shadow:0 10px 25px rgba(255,77,166,0.4);
    }

    .nav-menu a.active{
        color:#ff4da6;
        font-weight:bold;
    }

    button{
        background:#ff4da6;
        color:white;
    }

    button:hover{
        background:#ff66b3;
    }
`;
document.head.appendChild(style);
