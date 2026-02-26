// Translations Object
const translations = {
    fr: {
        meta: { title: "ExactShape Solutions - Numérisation & Reconstruction 3D" },
        nav: {
            activity: "Activité",
            commitment: "Engagement",
            projects: "Projets",
            method: "Méthode",
            contact: "Contact"
        },
        hero: {
            title: "Numérisation & <span class=\"accent\">Reconstruction 3D</span>",
            tagline: "De la pièce au modèle 3D",
            subtitle: "Une approche méthodique.<br>Des modèles 3D exploitables et adaptés à vos projets.",
            cta: "Discutons de votre projet"
        },
        presentation: {
            title: "Au service de vos projets",
            subtitle: "ExactShape Solutions accompagne vos besoins en numérisation et reconstruction 3D",
            card1: {
                title: "Scan 3D",
                text: "Scan 3D d’une souris ergonomique (maillage brut)."
            },
            card2: {
                title: "Rétro-ingénierie",
                text: "Reconstruction d’une vitre de feu de position cassée, à partir du scan du feu complet."
            },
            card3: {
                title: "Modélisation CAO",
                text: "Modélisation CAO et étude de mouvement d’un mécanisme actionné par vérin."
            },
            card4: {
                title: "Pièce non mesurable",
                text: "Capturer la géométrie d'une pièce complexe, difficile d'accès ou impossible à mesurer avec des outils classiques."
            },
            card5: {
                title: "Ajouts",
                text: "Modification d'une pièce de connexion de tubes par ajout d'une extension."
            }
        },
        engagement: {
            title: "Engagements",
            subtitle: "Une méthode rigoureuse pour un résultat conforme ",
            step1: {
                title: "Vos besoins",
                text: "Chaque projet commence par une compréhension claire de vos objectifs et de vos contraintes techniques. Cette étape est essentielle pour garantir un résultat aligné avec vos attentes."
            },
            step2: {
                title: "Cadrage",
                text: "Nous établissons ensemble les critères de qualité et les spécifications techniques du livrable, pour une base de travail solide et partagée."
            },
            step3: {
                title: "Ajustements intégrés",
                text: "La démarche inclut des validations intermédiaires et des ajustements si nécessaire, pour garantir que le résultat final correspond exactement à votre besoin."
            },
            step4: {
                title: "Résultat exploitable",
                text: "Le modèle livré est pensé pour être directement utilisable dans votre chaîne de production, modification ou fabrication."
            }
        },
        projects: {
            title: "Projets clients",
            subtitle: "Cas concrets et réponses techniques",
            common: {
                need: "Besoin",
                work: "Travail réalisé"
            },
            card1: {
                title: "Pièce cassée ou introuvable",
                need: "Remplacer une pièce qui n'est plus disponible ou dont les plans n'existent pas.",
                work: "Scan 3D de la pièce existante (ou des fragments), rétro-ingénierie et modélisation CAO pour permettre la refabrication."
            },
            card2: {
                title: "Adaptation d'une pièce",
                need: "Modifier une pièce existante pour l'adapter à un nouveau contexte ou à de nouvelles contraintes.",
                work: "Numérisation de la pièce d'origine, modélisation CAO et intégration des modifications requises pour le nouveau cahier des charges."
            },
            card3: {
                title: "Alignement de scan existant",
                need: "Exploiter un scan 3D déjà réalisé mais non référencé ou mal orienté.",
                work: "Mise en référence du scan dans un système de coordonnées cohérent, nettoyage et préparation pour utilisation en CAO."
            },
            card4: {
                title: "Pièce non mesurable",
                need: "Capturer la géométrie d'une pièce complexe, difficile d'accès ou impossible à mesurer avec des outils classiques.",
                work: "Scan 3D haute précision et transformation en modèle CAO exploitable pour analyse, modification ou fabrication."
            },
            card5: {
                title: "Titre du projet 5",
                need: "Modification d'une pièce de connexion de tubes.",
                work: "Ajout d'une extension"
            }
        },
        method: {
            title: "Une approche méthodique",
            subtitle: "Un processus clair et transparent, du 1er contact à la livraison",
            step1: {
                title: "1. Compréhension du besoin",
                text: "Échange initial pour clarifier vos objectifs, contraintes techniques et contexte d'utilisation du modèle final."
            },
            step2: {
                title: "2. Approche",
                text: "Proposition d'une méthode adaptée (scan, rétro-ingénierie, modélisation, méthode hybride) et validation du cadre de travail."
            },
            step3: {
                title: "3. Travail et ajustements",
                text: "Réalisation du projet avec des points de validation intermédiaires pour garantir l'alignement avec vos attentes."
            },
            step4: {
                title: "4. Livraison du résultat",
                text: "Remise du modèle 3D final dans le format souhaité, prêt à être intégré dans votre processus de travail."
            }
        },
        contact: {
            title: "Parlons de votre projet",
            text: "Vous avez un besoin en numérisation, une pièce manquante ou une reconstruction 3D ? Décrivez-moi votre projet, nous échangerons sans engagement pour définir ensemble la meilleure approche.",
            cta: "Me contacter"
        },
        footer: {
            text: "&copy; 2026 ExactShape Solutions - Numérisation & Reconstruction 3D"
        }
    },
    en: {
        meta: { title: "ExactShape Solutions - Scanning & 3D Reconstruction" },
        nav: {
            activity: "Services",
            commitment: "Commitment",
            projects: "Projects",
            method: "Method",
            contact: "Contact"
        },
        hero: {
            title: "Scanning & <span class=\"accent\">3D Reconstruction</span>",
            tagline: "From Part to 3D Model",
            subtitle: "A methodical approach.<br>Usable 3D models adapted to your projects.",
            cta: "Let's discuss your project"
        },
        presentation: {
            title: "At the Service of Your Projects",
            subtitle: "ExactShape Solutions supports your scanning and 3D reconstruction needs",
            card1: {
                title: "3D Scanning",
                text: "3D scan of an ergonomic mouse (raw mesh)."
            },
            card2: {
                title: "Reverse Engineering",
                text: "Reconstruction of a broken fire glass from the full fire scan."
            },
            card3: {
                title: "CAD Modeling",
                text: "CAD modeling and motion study of a mechanism operated by a cylinder."
            },
            card4: {
                title: "Titre de la carte 4",
                text: "Description de la carte 4 (à modifier)."
            },
            card5: {
                title: "Titre de la carte 5",
                text: "Description de la carte 5 (à modifier)."
            }
        },
        engagement: {
            title: "Commitments",
            subtitle: "A rigorous method for a compliant result",
            step1: {
                title: "Your needs",
                text: "Every project starts with a clear understanding of your objectives and technical constraints. This step is essential to ensure a result that aligns with your expectations."
            },
            step2: {
                title: "Framework",
                text: "We establish quality criteria and technical specifications together, ensuring a solid and shared foundation."
            },
            step3: {
                title: "Integrated Adjustments",
                text: "The process includes intermediate validations and adjustments if necessary, ensuring the final result matches your needs exactly."
            },
            step4: {
                title: "Usable Result",
                text: "The delivered model is designed to be directly usable in your production, modification, or manufacturing chain."
            }
        },
        projects: {
            title: "Client Projects",
            subtitle: "Concrete cases and technical responses",
            common: {
                need: "Need",
                work: "Work Performed"
            },
            card1: {
                title: "Broken or Obsolete Part",
                need: "Replace a part that is no longer available or for which no blueprints exist.",
                work: "3D scan of the existing part (or fragments), reverse engineering, and CAD modeling to enable remanufacturing."
            },
            card2: {
                title: "Part Adaptation",
                need: "Modify an existing part to adapt it to a new context or new constraints.",
                work: "Digitization of the original part, CAD modeling, and integration of required modifications for the new specifications."
            },
            card3: {
                title: "Existing Scan Alignment",
                need: "Utilize a 3D scan already performed but not referenced or poorly oriented.",
                work: "Referencing the scan in a coherent coordinate system, cleaning, and preparation for CAD use."
            },
            card4: {
                title: "Non-Measurable Part",
                need: "Capture the geometry of a complex part, difficult to access or impossible to measure with standard tools.",
                work: "High-precision 3D scan and transformation into a usable CAD model for analysis, modification, or manufacturing."
            },
            card5: {
                title: "Titre du projet 5",
                need: "Description du besoin pour le projet 5.",
                work: "Description de la solution pour le projet 5."
            }
        },
        method: {
            title: "My Workflow",
            subtitle: "A clear and transparent process, from first contact to delivery",
            step1: {
                title: "1. Understanding Needs",
                text: "Initial exchange to clarify your objectives, technical constraints, and usage context of the final model."
            },
            step2: {
                title: "2. Approach",
                text: "Proposal of a suitable method (scan, reverse engineering, modeling, hybrid method) and validation of the framework."
            },
            step3: {
                title: "3. Work & Adjustments",
                text: "Project execution with intermediate validation points to ensure alignment with your expectations."
            },
            step4: {
                title: "4. Result Delivery",
                text: "Delivery of the final 3D model in the desired format, ready to be integrated into your workflow."
            }
        },
        contact: {
            title: "Let's talk about your project",
            text: "Do you have a need for scanning, a missing piece or 3D reconstruction? Describe your project to me, and we will discuss without obligation to define the best approach together.",
            cta: "Contact Me"
        },
        footer: {
            text: "&copy; 2026 ExactShape Solutions - Scanning & 3D Reconstruction"
        }
    }
};

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Parallax effect on hero
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Language Switch Logic
const langSwitch = document.getElementById('langSwitch');
let currentLang = 'fr';

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let content = translations[lang];
        
        // Traverse the translation object using the key path (e.g., "nav.activity")
        for (const k of keys) {
            if (content[k]) {
                content = content[k];
            } else {
                content = null;
                break;
            }
        }

        if (content) {
            // Use innerHTML to preserve HTML tags (like spans in the Hero title)
            element.innerHTML = content;
        }
    });
}

langSwitch.addEventListener('click', () => {
    if (currentLang === 'fr') {
        currentLang = 'en';
        langSwitch.textContent = 'FR';
        document.documentElement.lang = 'en';
    } else {
        currentLang = 'fr';
        langSwitch.textContent = 'EN';
        document.documentElement.lang = 'fr';
    }
    updateContent(currentLang);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation de la grille avec effet de scroll
const gridFloor = document.querySelector('.grid-floor');
let lastScrollTop = 0;

function animateGrid() {
    const scrollTop = window.scrollY;
    
    // Déplacement de la grille en fonction du scroll (effet parallaxe)
    const backgroundPos = (scrollTop * 0.01) % 80;
    
    if (gridFloor) {
        gridFloor.style.backgroundPositionY = `${backgroundPos}px`;
        
        // Rotation subtile de la grille pendant le scroll
        const rotation = 60 + (scrollTop * 0.01);
        gridFloor.style.transform = `translate(-50%, -50%) rotateX(${Math.min(rotation, 70)}deg)`;
    }
    
    requestAnimationFrame(animateGrid);
}

animateGrid();

function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    // Moins de particules sur mobile pour performances
    const particleCount = window.innerWidth > 768 ? 30 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Ajouter des variantes de taille aléatoirement
        const rand = Math.random();
        if (rand < 0.3) particle.classList.add('small');
        else if (rand > 0.7) particle.classList.add('large');
        
        // Position horizontale aléatoire
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        
        // Dérive horizontale aléatoire pendant la montée
        const drift = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--drift', drift + 'px');
        
        // Délai de départ aléatoire
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        container.appendChild(particle);
    }
}

// ====================================
// 2. WIREFRAME 3D (avec Three.js)
// ====================================
function createWireframe() {
    const container = document.getElementById('wireframe-container');
    if (!container || typeof THREE === 'undefined') return;
    
    // Création de la scène 3D
    const scene = new THREE.Scene();
    
    // Caméra
    const camera = new THREE.PerspectiveCamera(
        75, // Angle de vue
        container.offsetWidth / container.offsetHeight, // Ratio
        0.1, // Distance minimale
        1000 // Distance maximale
    );
    camera.position.z = 5;
    
    // Renderer (moteur de rendu)
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, // Fond transparent
        antialias: true // Lissage des bords
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0); // Fond transparent
    container.appendChild(renderer.domElement);
    
    // Géométrie : Icosaèdre (forme complexe à 20 faces)
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    
    // Matériau wireframe (fil de fer)
    const material = new THREE.MeshBasicMaterial({
        color: 0xE95625, // Orange (votre couleur accent)
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    
    const wireframe = new THREE.Mesh(geometry, material);
    scene.add(wireframe);
    
    // Ajouter des points lumineux aux sommets
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = geometry.attributes.position.array;
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const pointsMaterial = new THREE.PointsMaterial({
        color: 0xE95625,
        size: 0.1,
        transparent: true,
        opacity: 0.8
    });
    
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);
    
    // Animation de construction progressive
    let progress = 0;
    
    // Boucle d'animation
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotation continue
        wireframe.rotation.x += 0.005;
        wireframe.rotation.y += 0.007;
        points.rotation.x += 0.005;
        points.rotation.y += 0.007;
        
        // Effet de pulsation (construction)
        progress += 0.01;
        const scale = 1 + Math.sin(progress) * 0.1;
        wireframe.scale.set(scale, scale, scale);
        points.scale.set(scale, scale, scale);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Adapter la taille si la fenêtre change
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
    });
}

function createInteractiveMesh() {
    const container = document.getElementById('mesh-container');
    if (!container || typeof THREE === 'undefined') return;
    
    // Scène
    const scene = new THREE.Scene();
    
    // Caméra
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    // On recule un peu la caméra pour voir plus large
    camera.position.z = 40;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Netteté écran rétina
    container.appendChild(renderer.domElement);
    
    // --- GÉOMÉTRIE ---
    // On augmente considérablement la taille (300 au lieu de 100)
    // On augmente la densité des segments pour que les vagues soient fluides
    const geometry = new THREE.PlaneGeometry(500, 500, 50, 50);
    
    // Matériau
    const material = new THREE.MeshBasicMaterial({
        color: 0x242C5E, // Bleu foncé
        wireframe: true,
        transparent: true,
        opacity: 0.5 // Légèrement plus transparent pour la subtilité
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2.8; // Inclinaison
    scene.add(mesh);

    // --- INTERACTION (RAYCASTER) ---
    // Création d'un plan invisible pour détecter la souris parfaitement
    const hitGeometry = new THREE.PlaneGeometry(500, 500, 2, 2);
    const hitMaterial = new THREE.MeshBasicMaterial({ visible: false }); // Invisible
    const hitPlane = new THREE.Mesh(hitGeometry, hitMaterial);
    hitPlane.rotation.x = mesh.rotation.x; // Même inclinaison que le mesh visible
    scene.add(hitPlane);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(9999, 9999); // Hors écran par défaut
    const pointOfIntersection = new THREE.Vector3();

    // Écouter le mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        // Coordonnées normalisées (-1 à +1)
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Stocker les positions initiales pour éviter la déformation permanente
    const positionAttribute = geometry.attributes.position;
    const initialPositions = positionAttribute.array.slice();

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001; // Temps écoulé
        
        // 1. Raycasting : Où est la souris dans l'espace 3D ?
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(hitPlane);
        
        if (intersects.length > 0) {
            pointOfIntersection.copy(intersects[0].point);
        }

        // 2. Mettre à jour les sommets (Vertices)
        for (let i = 0; i < positionAttribute.count; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            // Position d'origine
            const ox = initialPositions[ix];
            const oy = initialPositions[iy];

            // A. Vague automatique (fond de l'océan)
            // On combine deux sinus pour un effet plus organique
            const waveHeight = Math.sin(ox * 0.1 + time) * 1.5 + Math.cos(oy * 0.08 + time) * 1.5;

            
            let mouseEffect = 0;
            if (intersects.length > 0) {

                const dx = ox - pointOfIntersection.x; 
                // Pour le Y, à cause de la rotation, le Y monde correspond au Y local projeté
                // Ici on utilise simplement les coordonnées du plan "à plat"
                // On triche un peu : on prend le point d'intersection converti dans le référentiel du plan
                const localPoint = hitsToLocal(pointOfIntersection, mesh);
                
                const dist = Math.sqrt(Math.pow(ox - localPoint.x, 2) + Math.pow(oy - localPoint.y, 2));
                
                // Rayon d'effet de 25 unités, force max de 8
                mouseEffect = Math.max(0, 25 - dist) / 25; 
                mouseEffect = Math.pow(mouseEffect, 2) * 10; // Lissage exponentiel (plus joli)
            }

            // Appliquer la hauteur (Z)
            positionAttribute.setZ(i, waveHeight + mouseEffect);
        }
        
        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
    }
    
    // Fonction utilitaire pour convertir un point Monde en point Local
    function hitsToLocal(worldPoint, meshObject) {
        const localPoint = worldPoint.clone();
        meshObject.worldToLocal(localPoint);
        return localPoint;
    }
    
    animate();
    
    // Responsive
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

window.addEventListener('load', function() {
    console.log('Page chargée');
    
    // Particules (réduisez le nombre si besoin dans la fonction createParticles)
    createParticles();
    
    if (typeof THREE !== 'undefined') {
        // --- MODIFICATION ICI ---
        // On lance le wireframe (balle orange) UNIQUEMENT sur ordinateur (> 768px)
        if (window.innerWidth > 768) {
            createWireframe();
            createInteractiveMesh();
        }
        // ------------------------
    } else {
        console.error('Three.js non chargé !');
    }
});

function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        // Hauteur totale de la page
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Position actuelle du scroll
        const scrollPosition = window.scrollY;
        
        // Calcul du pourcentage (0 à 100)
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        
        // Application de la largeur
        progressBar.style.width = `${scrollPercentage}%`;
    });
}

initProgressBar();
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const logoImg = document.querySelector('.logo img');
const footerLogoImg = document.querySelector('.footer-logo');

// Chemins des images (Ajustez si vos dossiers sont différents)
const logos = {
    dark: {
        nav: 'logo+name.png',       // Logo blanc pour fond sombre
        footer: 'logo+name.png'
    },
    light: {
        nav: 'logo+name_dark.png',  // Logo bleu pour fond clair (votre fichier fourni)
        footer: 'logo+name_dark.png' 
    }
};

// Icônes SVG
const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

function updateThreeJSMeshColor(isLight) {
    const canvasContainer = document.getElementById('mesh-container');
    if(canvasContainer) {
        canvasContainer.style.opacity = isLight ? '0.3' : '1';
    }
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    themeSwitch.innerHTML = isLight ? sunIcon : moonIcon;

    // MODIFICATION ICI : On met à jour les 3 logos
    if (isLight) {
        logoImg.src = logos.light.nav;
        footerLogoImg.src = logos.light.footer;
        if (mobileLogoImg) mobileLogoImg.src = logos.light.nav;
    } else {
        logoImg.src = logos.dark.nav;
        footerLogoImg.src = logos.dark.footer;
        if (mobileLogoImg) mobileLogoImg.src = logos.dark.nav;
    }

    updateThreeJSMeshColor(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// MODIFICATION ICI : Vérification de la préférence au chargement
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeSwitch.innerHTML = sunIcon;
    logoImg.src = logos.light.nav;
    footerLogoImg.src = logos.light.footer;
    if (mobileLogoImg) mobileLogoImg.src = logos.light.nav; // AJOUT ICI
    updateThreeJSMeshColor(true);
}

/**
 * Système de Carrousel Centré Reutilisable
 * @param {string} wrapperId - ID du conteneur principal (ex: 'carousel-presentation')
 * @param {string} dotsId - ID du conteneur des points (ex: 'dots-presentation')
 */
function initCenteredCarousel(wrapperId, dotsId) {
    const wrapper = document.getElementById(wrapperId);
    const dotsContainer = document.getElementById(dotsId);
    if (!wrapper || !dotsContainer) return;

    const track = wrapper.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const prevBtn = wrapper.querySelector('.prev');
    const nextBtn = wrapper.querySelector('.next');
    
    let currentIndex = 0; // Commence au premier élément, ou 1 pour centrer le 2ème

    // 1. Création des Dots
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = index === currentIndex ? 'dot active' : 'dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(dotsContainer.children);

    // 2. Fonction principale de mise à jour
    function updateCarousel() {
        // Récupérer les dimensions
        const trackWidth = wrapper.querySelector('.carousel-viewport').offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = 30; // Doit correspondre au gap CSS

        // Calculer le centre : (LargeurVue / 2) - (LargeurCarte / 2)
        // Cela nous donne l'espace vide à gauche pour que la carte soit centrée
        const centerOffset = (trackWidth / 2) - (cardWidth / 2);
        
        // Calculer la position à atteindre
        // On décale de (LargeurCarte + gap) * index, puis on ajoute l'offset pour centrer
        const moveAmount = (cardWidth + gap) * currentIndex;
        const translateValue = -moveAmount + centerOffset;

        // Appliquer le mouvement
        track.style.transform = `translateX(${translateValue}px)`;

        // Gérer les classes Active (Style Visuel)
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Mettre à jour les dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 3. Navigation
    function goToSlide(index) {
        if (index < 0) index = cards.length - 1; // Boucle vers la fin
        if (index >= cards.length) index = 0;    // Boucle vers le début
        currentIndex = index;
        updateCarousel();
    }

    if(prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if(nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // 4. Swipe Tactile (Touch Events)
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) goToSlide(currentIndex + 1); // Swipe Gauche
        if (touchEndX > touchStartX + 50) goToSlide(currentIndex - 1); // Swipe Droite
    }

    // 5. Initialisation et Resize
    // On attend un peu que le DOM soit bien calculé
    setTimeout(() => {
        goToSlide(2); // On commence par la 2ème carte pour faire joli (centré)
    }, 100);

    window.addEventListener('resize', updateCarousel);
}

// Lancement au chargement de la page
window.addEventListener('load', () => {
    initCenteredCarousel('carousel-presentation', 'dots-presentation');
    initCenteredCarousel('carousel-projets', 'dots-projets');
});

window.addEventListener('load', function() {
    console.log('Page chargée');
    
    // 1. Les particules de fond
    createParticles();

    // 2. Les carrousels (celui du haut et celui des projets)
    initCenteredCarousel('carousel-presentation', 'dots-presentation');
    initCenteredCarousel('carousel-projects', 'dots-projects');

    // 3. Le slider Avant/Après (ajouté tout à l'heure)
    initComparisonSliders();

    // 4. La lecture vidéo au survol (NOUVEL AJOUT ICI) <---
    initVideoHover();
    
    // 5. La 3D (Wireframe orange)
    if (typeof THREE !== 'undefined') {
        if (window.innerWidth > 768) {
            createWireframe();
            createInteractiveMesh();
        }
    } else {
        console.error('Three.js non chargé !');
    }
});

/* ====================================
   4. GESTION VIDÉO AU SURVOL
   ==================================== */
function initVideoHover() {
    // On cible toutes les vidéos qui sont dans des cartes de présentation ou projet
    const videos = document.querySelectorAll('.presentation-card video, .project-card video');

    videos.forEach(video => {
        // Sécurité : on s'assure qu'elle est en pause au chargement
        video.pause();
        
        // On remet le temps à 0 pour commencer proprement
        video.currentTime = 0;

        // On cherche la carte parente pour déclencher l'action sur toute la zone
        const card = video.closest('.presentation-card') || video.closest('.project-card');

        if (card) {
            // Au survol : Lecture
            card.addEventListener('mouseenter', () => {
                // play() renvoie une promesse, c'est une bonne pratique de gérer les erreurs
                // (ex: si l'utilisateur quitte la carte trop vite)
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Lecture interrompue ou empêchée");
                    });
                }
            });

            // En quittant : Pause
            card.addEventListener('mouseleave', () => {
                video.pause();
                // Optionnel : remettre la vidéo au début quand on quitte
                // video.currentTime = 0; 
            });
        }
    });
}


function initComparisonSliders() {
    const containers = document.querySelectorAll('.comparison-container');

    containers.forEach(container => {
        const wrapper = container.querySelector('.img-before-wrapper');
        const imgBefore = container.querySelector('.img-before');
        const handle = container.querySelector('.slider-handle');

        // NOUVEAU : Variable pour savoir si on est en train de cliquer/glisser
        let isDragging = false;

        function adjustImageWidth() {
            if(imgBefore) {
                // On utilise setProperty pour forcer le !important en JS
                imgBefore.style.setProperty('width', container.offsetWidth + 'px', 'important');
            }
        }

        // Fonction de déplacement
        function moveSlider(e) {
            // NOUVEAU : Si on ne clique pas, on ne fait rien
            if (!isDragging) return;

            const rect = container.getBoundingClientRect();
            // Gérer souris ou tactile
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            
            // Calculer la position X relative au conteneur
            let x = clientX - rect.left;

            // Limiter pour ne pas sortir du cadre
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            // Calculer le pourcentage
            const percentage = (x / rect.width) * 100;

            // Appliquer le style
            wrapper.style.width = percentage + '%';
            handle.style.left = percentage + '%';
        }

        // --- NOUVEAUX ÉCOUTEURS D'ÉVÉNEMENTS ---

        // Événements SOURIS (Ordinateur)
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            moveSlider(e); // Permet d'actualiser la position dès qu'on clique
        });
        container.addEventListener('mousemove', moveSlider);
        container.addEventListener('mouseup', () => { isDragging = false; });
        container.addEventListener('mouseleave', () => { isDragging = false; }); // Arrête le glissement si la souris sort du cadre

        // Événements TACTILES (Mobile/Tablette)
        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            e.stopPropagation(); // <-- BLOQUE le signal : le carrousel ne sait pas qu'on touche l'écran
            moveSlider(e);
        }, { passive: true });

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.stopPropagation(); // <-- BLOQUE le signal pendant le mouvement
            moveSlider(e);
        }, { passive: false });

        container.addEventListener('touchend', (e) => { 
            isDragging = false; 
            e.stopPropagation(); // <-- BLOQUE le signal à la fin : empêche le carrousel de tourner
        });

        container.addEventListener('touchcancel', (e) => { 
            isDragging = false; 
            e.stopPropagation();
        });
        
        // Ajustement initial et au redimensionnement
        window.addEventListener('resize', adjustImageWidth);
        adjustImageWidth();
        
        // Petit hack pour le carrousel
        setInterval(adjustImageWidth, 1000); 
    });
}

// Modification de ton bloc window load existant :
window.addEventListener('load', function() {
    console.log('Page chargée');
    
    // Tes fonctions existantes
    createParticles();
    initCenteredCarousel('carousel-presentation', 'dots-presentation');
    initCenteredCarousel('carousel-projects', 'dots-projects');
    
    // NOUVELLE FONCTION
    initComparisonSliders();

    if (typeof THREE !== 'undefined' && window.innerWidth > 768) {
        createWireframe();
        createInteractiveMesh();
    }
});

const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a'); // Tous les liens du menu

if (burgerMenu) {
    // Ouvrir / Fermer le menu au clic sur le burger
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });

    // Fermer le menu automatiquement quand on clique sur un lien
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burgerMenu.classList.remove('toggle');
            }
        });
    });
}