// Smooth Scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate on scroll - fade in elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('.section, .feature-card, .team-card, .gallery-item, .benefit-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation untuk stats (jika ada)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-image');
galleryItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

// === FIXED HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Tutup menu saat klik link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Parallax effect pada hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < 500) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// Copy email on click (jika ada)
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email berhasil disalin!');
    });
};

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.opacity = '0.7';
                link.style.fontWeight = 'normal';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.opacity = '1';
                    link.style.fontWeight = 'bold';
                }
            });
        }
    });
});

// Add hover effect untuk CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #f0f8ff, white)';
    });
    ctaButton.addEventListener('mouseleave', function() {
        this.style.background = 'white';
    });
}

// Team card interactive effect
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid #2989d8';
        this.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// Console log untuk developer
console.log('%c🌊 AGNIVOLT - From Micro Hydro to Mega Change', 'color: #2989d8; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped by UNS Industrial Engineering Team', 'color: #666; font-size: 12px;');

// Water wave effect on section hover
document.querySelectorAll('.feature-card, .tech-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 40px rgba(41, 137, 216, 0.3)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    });
});

// === Auto Scroll Galeri Produk ===
const gallery = document.querySelector('.gallery-grid');
if (gallery) {
    let scrollDirection = 1;
    let isHovering = false;
    let speed = 1;

    function autoScroll() {
        if (!isHovering) {
            gallery.scrollLeft += scrollDirection * speed;
            if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
                scrollDirection = -1;
            } else if (gallery.scrollLeft <= 0) {
                scrollDirection = 1;
            }
        }
        requestAnimationFrame(autoScroll);
    }

    gallery.addEventListener('mouseenter', () => isHovering = true);
    gallery.addEventListener('mouseleave', () => isHovering = false);

    autoScroll();
}

// Create bubbles animation
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    if (!bubblesContainer) return;
    
    const numberOfBubbles = 15;
    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 40 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 5 + 8) + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        
        bubblesContainer.appendChild(bubble);
    }
}

// Jalankan saat page selesai load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    createBubbles();
});

// Stagger Animation untuk Tech Items
const techItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.tech-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = 'all 0.6s ease';
    techItemsObserver.observe(item);
});

// Check Mark Animation saat scroll
const benefitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icon = entry.target.querySelector('.benefit-icon');
            icon.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.benefit-item').forEach(item => {
    benefitObserver.observe(item);
});

// Gallery Zoom Animation
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('zoom-in');
            }, index * 100);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.gallery-item').forEach(item => {
    galleryObserver.observe(item);
});

// Enhanced CTA Button
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.animationPlayState = 'paused';
    });
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.animationPlayState = 'running';
    });
}

console.log('%c✨ Animasi tambahan berhasil dimuat!', 'color: #3ba5d1; font-weight: bold;');