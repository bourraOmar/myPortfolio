// Preloader Logic
let preloaderTimeout;
let progressValue = 0;
let progressInterval;
let isPageLoaded = false;

// Hide preloader after animations complete
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        console.log('Preloader hidden at:', new Date().getTime());
    }
}

// Simulate actual progress loading
const loaderProgress = document.getElementById('loaderProgress');
const preloader = document.getElementById('preloader');

if (loaderProgress && preloader) {
    // The bar needs a delay before it starts (to match the old CSS delay of 1s)
    setTimeout(() => {
        progressInterval = setInterval(() => {
            if (progressValue >= 90) {
                // Wait at 90% until the page actually loads
                clearInterval(progressInterval);
            } else {
                // Add random increments for a realistic feel
                progressValue += Math.random() * 15;
                if (progressValue > 90) progressValue = 90;
                loaderProgress.style.width = progressValue + '%';
            }
        }, 200);
    }, 1000);
}

// Wait for window actual load
window.addEventListener('load', () => {
    console.log('Window loaded at:', new Date().getTime());
    isPageLoaded = true;
    
    if (loaderProgress) {
        // Stop the interval and force to 100%
        clearInterval(progressInterval);
        
        // Wait for the 1s delay (original splitBar animation start delay) before finishing immediately
        setTimeout(() => {
            loaderProgress.style.width = '100%';
            loaderProgress.style.opacity = '0';
            
            // Hide the preloader 0.8s after bar finishes
            setTimeout(hidePreloader, 800);
        }, 1000); 
    } else {
        hidePreloader();
    }
});

// Fallback to hide preloader after 5s max
setTimeout(() => {
    hidePreloader();
}, 5000);

// Allow clicking on preloader to skip it
document.addEventListener('click', (e) => {
    if (e.target.closest('#preloader')) {
        hidePreloader();
    }
});

// Fallback: hide preloader after max 5 seconds
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        console.log('Force hiding preloader after 5 seconds');
        hidePreloader();
    }
}, 5000);

// Language Switcher Logic
const langBtn = document.getElementById('langBtn');
const langDropdown = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-menu a');
const currentLangSpan = document.getElementById('currentLang');

if (langBtn && langDropdown) {
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active styling
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Map the selected code to uppercase letters for the button
            const langCode = option.getAttribute('data-lang').toUpperCase();
            if (currentLangSpan) {
                currentLangSpan.textContent = langCode;
            }
            
            // Hide menu
            langDropdown.classList.remove('active');
            
            // Apply translations dynamically without modifying HTML by mapping selectors
            applyTranslations(langCode.toLowerCase());
            console.log('Language switched to:', langCode.toLowerCase());
        });
    });
}

// Mobile Menu Toggle Logic
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-menu-open');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-menu-open');
        }
    });
}

function applyTranslations(lang) {
    if (!translations || !translations[lang]) return;
    const t = translations[lang];

    const map = {
        // Nav
        ".nav-links li:nth-child(1) a": t.nav_about,
        ".nav-links li:nth-child(2) a": t.nav_education,
        ".nav-links li:nth-child(3) a": t.nav_certifications,
        ".nav-links li:nth-child(4) a": t.nav_tools,
        ".nav-links li:nth-child(5) a": t.nav_works,
        ".nav-links li:nth-child(6) a": t.nav_collab,
        // Hero/Badge
        ".badge": t.hero_badge,
        ".sub-headline": t.hero_headline,
        ".hero-desc": t.hero_desc,
        ".hero-actions .primary-btn": t.btn_view_projects,
        ".my-story": t.btn_my_story,
        // Contact Section
        ".about-contact .label": t.contact_label,
        ".contact-headline": t.contact_title,
        ".about-contact .dim-text": t.contact_desc,
        ".contact-info .contact-label": t.email_me_at,
        ".big-quote": t.quote,
        // Stats
        ".stat-box:nth-child(1) .stat-desc": t.stat_years,
        ".stat-box:nth-child(3) .stat-desc": t.stat_projects,
        ".stat-box:nth-child(5) .stat-desc": t.stat_creative,
        // Categories
        ".categories .card:nth-child(1) h3": t.cat_fs_dev,
        ".categories .card:nth-child(1) p": t.cat_fs_tech,
        ".categories .card:nth-child(2) h3": t.cat_ui_designer,
        ".categories .card:nth-child(3) h3": t.cat_backend,
        // About Me
        "#about .portfolio-title .label": t.about_discovery,
        "#about .portfolio-title h2": t.about_title,
        "#about .about-me-text p:nth-child(1)": t.about_p1,
        "#about .about-me-text p:nth-child(2)": t.about_p2,
        "#about .about-me-text p:nth-child(3)": t.about_p3,
        "#about .about-me-info-block:nth-child(1) .about-me-label": t.about_lang_label,
        "#about .about-me-info-block:nth-child(1) .about-me-value": t.about_lang_val,
        "#about .about-me-info-block:nth-child(2) .about-me-label": t.about_loc_label,
        "#about .about-me-info-block:nth-child(2) .about-me-value": t.about_loc_val,
        // Education
        "#education .portfolio-title .label": t.edu_label,
        "#education .portfolio-title h2": t.edu_title,
        "#education .timeline-item:nth-child(1) .timeline-title": t.edu_1_title,
        "#education .timeline-item:nth-child(1) .timeline-school": t.edu_1_school,
        "#education .timeline-item:nth-child(1) .timeline-desc": t.edu_1_desc,
        "#education .timeline-item:nth-child(2) .timeline-title": t.edu_2_title,
        "#education .timeline-item:nth-child(2) .timeline-school": t.edu_2_school,
        "#education .timeline-item:nth-child(2) .timeline-desc": t.edu_2_desc,
        "#education .timeline-item:nth-child(3) .timeline-title": t.edu_3_title,
        "#education .timeline-item:nth-child(3) .timeline-school": t.edu_3_school,
        "#education .timeline-item:nth-child(3) .timeline-desc": t.edu_3_desc,
        "#education .timeline-item:nth-child(4) .timeline-title": t.edu_4_title,
        "#education .timeline-item:nth-child(4) .timeline-school": t.edu_4_school,
        "#education .timeline-item:nth-child(4) .timeline-desc": t.edu_4_desc,
        // Certifications
        "#certifications .portfolio-title .label": t.cert_label,
        "#certifications .portfolio-title h2": t.cert_title,
        ".cert-grid .cert-card:nth-child(1) .cert-title": t.cert_1_title,
        ".cert-grid .cert-card:nth-child(2) .cert-title": t.cert_2_title,
        ".cert-grid .cert-card:nth-child(3) .cert-title": t.cert_3_title,
        ".cert-grid .cert-card:nth-child(1) .cert-btn": t.cert_btn,
        ".cert-grid .cert-card:nth-child(2) .cert-btn": t.cert_btn,
        ".cert-grid .cert-card:nth-child(3) .cert-btn": t.cert_btn,
        // Technologies
        "#technologies .tech-label": t.tech_label,
        "#technologies .tech-title": t.tech_title,
        "#technologies .tech-subtitle": t.tech_subtitle,
        "#technologies .tech-category:nth-child(1) .category-header h3": t.tech_backend,
        "#technologies .tech-category:nth-child(2) .category-header h3": t.tech_frontend,
        "#technologies .tech-category:nth-child(3) .category-header h3": t.tech_database,
        "#technologies .tech-category:nth-child(4) .category-header h3": t.tech_vcs,
        "#technologies .tech-category:nth-child(5) .category-header h3": t.tech_uiux,
        "#technologies .tech-category:nth-child(6) .category-header h3": t.tech_pm,
        "#technologies .tech-category:nth-child(7) .category-header h3": t.tech_design,
        // Portfolio
        "#works .portfolio-title .label": t.port_label,
        "#works .portfolio-title h2": t.port_title,
        "#works .explore": t.port_explore,
        ".project-container .project-card:nth-child(1) h3": t.port_1_title,
        ".project-container .project-card:nth-child(1) .project-info p:first-of-type": t.port_1_desc,
        ".project-container .project-card:nth-child(1) .project-link": t.port_1_btn,
        ".project-container .project-card:nth-child(2) h3": t.port_2_title,
        ".project-container .project-card:nth-child(2) .project-info p:first-of-type": t.port_2_desc,
        ".project-container .project-card:nth-child(2) .project-link": t.port_2_btn,
        ".project-container .project-card:nth-child(3) h3": t.port_3_title,
        ".project-container .project-card:nth-child(3) .project-info p:first-of-type": t.port_3_desc,
        ".project-container .project-card:nth-child(3) .project-link": t.port_3_btn,
        // Footer
        ".footer-cta .label": t.footer_label,
        ".footer-title": t.footer_title,
        ".footer-desc": t.footer_desc,
        ".form-header h3": t.footer_cv_title,
        ".form-header p": t.footer_cv_desc,
        ".submit-btn": t.footer_cv_btn,
        ".footer-bottom p:nth-child(1)": t.footer_rights,
        ".footer-bottom p:nth-child(2)": t.footer_built
    };

    // Selectors where we should preserve child elements (like icons)
    const preserveChildrenSelectors = [
        ".my-story",
        ".primary-btn",
        ".project-link",
        ".submit-btn"
    ];

    for (let selector in map) {
        if(map[selector]) {
            const el = document.querySelector(selector);
            if(el) {
                // Check if we should preserve child elements
                const shouldPreserveChildren = preserveChildrenSelectors.some(s => el.matches(s));
                
                // Check if translation contains HTML tags
                const hasHTML = map[selector].includes('<') || map[selector].includes('&');
                
                if (hasHTML) {
                    // Use innerHTML for content with HTML
                    el.innerHTML = map[selector];
                } else if (shouldPreserveChildren && el.childNodes.length > 0) {
                    // For buttons with icons, only update text and preserve children
                    let firstTextNode = null;
                    for (let node of el.childNodes) {
                        if (node.nodeType === 3) {
                            firstTextNode = node;
                            break;
                        }
                    }
                    if (firstTextNode) {
                        firstTextNode.textContent = map[selector];
                    } else {
                        el.insertAdjacentText('afterbegin', map[selector] + ' ');
                    }
                } else {
                    // Use textContent for plain text elements
                    el.textContent = map[selector];
                }
            }
        }
    }

    // Set Arabic styling if necessary (RTL)
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.fontFamily = "'Cairo', 'Inter', sans-serif";
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
        document.body.style.fontFamily = "'Inter', sans-serif";
    }
}

// Initialize with French by default when page loads
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('fr');
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScrollTop = scrollTop;
});

// Update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Portfolio Slider
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');

    if (track && slides.length > 0) {
        let currentPosition = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            track.style.transform = `translateX(-${currentPosition * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentPosition]) {
                dots[currentPosition].classList.add('active');
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentPosition = (currentPosition + 1) % totalSlides;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentPosition = index;
                updateSlider();
            });
        });
    }
});

// Certificate Modal Logic
function openCertModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImage");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
        // Optional: lock body scroll
        document.body.style.overflow = "hidden";
    }
}

function closeCertModal(event) {
    // Only close if clicking the close btn or the dark background, not the image itself
    if (event.target.id === 'certModal' || event.target.className === 'cert-modal-close') {
        const modal = document.getElementById("certModal");
        if (modal) {
            modal.style.display = "none";
            // Unlock body scroll
            document.body.style.overflow = "auto";
        }
    }
}

// Project Modal Logic
const projectData = {
    'farmops_web': {
        title: 'FarmOps Dashboard',
        lang: 'Next.js & Nest.js',
        stars: '15 stars',
        desc: {
            en: 'Intelligent real-time farm management solution.',
            fr: 'Solution de gestion agricole intelligente en temps réel.',
            ar: 'حل ذكي لإدارة المزارع في الوقت الفعلي.'
        },
        challenge: {
            en: 'Building the FarmOps web platform required processing large volumes of real-time sensor data from fields while providing a seamless, fast dashboard experience. We needed to ensure offline capabilities and high scalability.',
            fr: 'Créer la plateforme web FarmOps nécessitait de traiter de gros volumes de données de capteurs en temps réel provenant des champs tout en offrant une expérience de tableau de bord fluide et rapide. Nous devions garantir des capacités hors ligne et une grande évolutivité.',
            ar: 'تطلب بناء منصة FarmOps معالجة كميات كبيرة من بيانات أجهزة الاستشعار في الوقت الفعلي من الحقول مع توفير تجربة لوحة تحكم سلسة وسريعة. احتجنا إلى ضمان قدرات العمل دون اتصال وقابلية التوسع.'
        },
        solution: {
            en: 'Leveraging Next.js for SSR performance and a Nest.js microservices architecture, we implemented a robust WebSocket system for live data. MongoDB handles unstructured sensor metrics efficiently.',
            fr: 'En utilisant Next.js pour les performances SSR et une architecture de microservices Nest.js, nous avons mis en place un système WebSocket robuste pour les données en direct. MongoDB gère efficacement les métriques de capteurs non structurées.',
            ar: 'بالاستفادة من Next.js للأداء و Nest.js كبنية خدمات مصغرة، قمنا بتنفيذ نظام WebSocket قوي للبيانات الحية. تتعامل MongoDB مع مقاييس المستشعرات غير المهيكلة بكفاءة.'
        },
        tags: ['Web', 'Dashboard', 'IoT', 'Real-time'],
        demoLink: 'farmops-web.html',
        sourceLink: 'https://github.com/bourraOmar/FarmOps'
    },
    'farmops_mobile': {
        title: 'FarmOps Mobile',
        lang: 'React Native',
        stars: '12 stars',
        desc: {
            en: 'Farm management right in your pocket. Mobile companion app.',
            fr: 'La gestion agricole directement dans votre poche. Application mobile.',
            ar: 'إدارة مزرعتك مباشرة من جيبك. تطبيق الهاتف المحمول.'
        },
        challenge: {
            en: 'Farmers needed a way to manage tasks and log data in deep field areas where internet connectivity is severely limited or non-existent, without losing unsynced records.',
            fr: 'Les agriculteurs avaient besoin d\'un moyen de gérer les tâches et d\'enregistrer les données dans des zones reculées où la connectivité Internet est limitée ou inexistante, sans perdre les enregistrements non synchronisés.',
            ar: 'احتاج المزارعون إلى طريقة لإدارة المهام وتسجيل البيانات في المناطق الميدانية حيث يكون الاتصال بالإنترنت محدودًا أو منعدمًا، دون فقدان السجلات غير المتزامنة.'
        },
        solution: {
            en: 'Developed a React Native (Expo) app utilizing SQLite for local persistence. A background sync worker uploads cached data automatically once a stable connection is restored.',
            fr: 'Développement d\'une application React Native (Expo) utilisant SQLite pour la persistance locale. Un travailleur de synchronisation en arrière-plan télécharge automatiquement les données mises en cache une fois la connexion rétablie.',
            ar: 'تم تطوير تطبيق React Native باستخدام SQLite للتخزين المحلي. يقوم عامل مزامنة في الخلفية بتحميل البيانات المخزنة مؤقتًا تلقائيًا بمجرد استعادة الاتصال المستقر.'
        },
        tags: ['Mobile', 'iOS', 'Android', 'Offline-First'],
        demoLink: 'farmops-mobile.html',
        sourceLink: 'https://github.com/bourraOmar/FarmOps'
    },
    'auto_rent_pro': {
        title: 'Auto Rent Pro',
        lang: 'Laravel & Tailwind',
        stars: '24 stars',
        desc: {
            en: 'Complete car rental and fleet management platform.',
            fr: 'Plateforme complète de location de voitures et de gestion de flotte.',
            ar: 'منصة متكاملة لتأجير السيارات وإدارة أسطول المركبات.'
        },
        challenge: {
            en: 'Managing complex car fleet schedules, preventing double-booking overlaps, and creating an intuitive booking flow for end-users while providing detailed analytics for fleet managers.',
            fr: 'Gérer des calendriers complexes de flotte de voitures, empêcher les surréservations et créer un flux de réservation intuitif pour les utilisateurs tout en fournissant des analyses détaillées aux gestionnaires.',
            ar: 'إدارة جداول أسطول السيارات المعقدة، ومنع تداخل الحجوزات المزدوجة، وإنشاء مسار حجز بديهي للمستخدمين مع توفير تحليلات مفصلة لمديري الأسطول.'
        },
        solution: {
            en: 'Built on Laravel 11, utilizing Eloquent ORM for advanced conflict-checking queries. Tailwind CSS ensures a highly responsive, clean UI. PostgreSQL handles complex transactional data integrity.',
            fr: 'Construit sur Laravel 11, utilisant Eloquent ORM pour des requêtes avancées de vérification des conflits. Tailwind CSS assure une interface utilisateur réactive. PostgreSQL gère l\'intégrité des données.',
            ar: 'مبني على Laravel 11، باستخدام Eloquent ORM لاستعلامات التحقق من التعارض المتقدمة. يضمن Tailwind CSS واجهة مستخدم استجابة للغاية. يتعامل PostgreSQL مع سلامة البيانات.'
        },
        tags: ['Web', 'SaaS', 'Management', 'Booking'],
        demoLink: 'auto-rent-pro.html',
        sourceLink: 'https://github.com/bourraOmar/FillRouge'
    }
};

function openProjectModal(event, projectId) {
    if (event) event.preventDefault();
    
    const modal = document.getElementById('projectModal');
    const data = projectData[projectId];
    if (!modal || !data) return;

    // Detect current language from document.html lang
    const currentLang = document.documentElement.lang || 'fr';
    
    // UI Translation Strings
    const uiTranslations = {
        en: { chal: 'The Challenge', sol: 'The Solution', tech: 'TECHNOLOGIES', links: 'LINKS & RESOURCES', btn: 'View Demo', code: 'Source Code' },
        fr: { chal: 'Le Défi', sol: 'La Solution', tech: 'TECHNOLOGIES', links: 'LIENS & RESSOURCES', btn: 'Voir la Démo', code: 'Code Source' },
        ar: { chal: 'التحدي', sol: 'الحل', tech: 'التقنيات', links: 'روابط وموارد', btn: 'عرض المشروع', code: 'شفرة المصدر' }
    };
    const ui = uiTranslations[currentLang] || uiTranslations.en;

    // Populate data
    document.getElementById('pm-title').textContent = data.title;
    document.getElementById('pm-lang').textContent = data.lang;
    
    // Populate translated text
    document.getElementById('pm-desc').textContent = data.desc[currentLang];
    document.getElementById('pm-challenge').textContent = data.challenge[currentLang];
    document.getElementById('pm-solution').textContent = data.solution[currentLang];
    
    // UI Labels
    document.getElementById('pm-lbl-challenge').textContent = ui.chal;
    document.getElementById('pm-lbl-solution').textContent = ui.sol;
    document.getElementById('pm-lbl-tech').textContent = ui.tech;
    document.getElementById('pm-lbl-links').textContent = ui.links;
    document.getElementById('pm-lbl-btn').textContent = ui.btn;
    document.getElementById('pm-lbl-code').textContent = ui.code;
    
    // Map Tags
    const tagsContainer = document.getElementById('pm-tech-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'pm-tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Setup links
    document.getElementById('pm-demolink').href = data.demoLink;
    document.getElementById('pm-sourcelink').href = data.sourceLink;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal || event.target.closest('.pm-close')) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});
