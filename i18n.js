// Internationalization System
const i18n = {
    currentLanguage: 'cs',
    
    // Translation strings
    translations: {
        cs: {
            // Navigation
            'nav.services': 'Naše služby',
            'nav.industries': 'Odvětví',
            'nav.projects': 'Projekty',
            'nav.about': 'O nás',
            'nav.ma': 'Fúze a akvizice',
            'nav.consulting': 'Podnikové poradenství a oceňování',
            
            // Newsletter
            'newsletter.title': 'Jste investor a chcete nové příležitosti do e-mailu?',
            'newsletter.subtitle': 'Vyplňte náš nezávazný dotazník',
            'newsletter.button': 'NEZÁVAZNÝ DOTAZNÍK',
            'newsletter.highlight': 'nezávazný',
            
            // Chatbot
            'chatbot.title': 'Máte dotazy?',
            'chatbot.placeholder': 'Napište vaši zprávu...',
            'chatbot.send': 'Poslat',
            'chatbot.greeting': 'Dobrý den! Jak vám mohu pomoci? Zajímáte se o naše služby v oblasti M&A?',
            
            // Footer
            'footer.privacy': 'Zásady zpracování a ochrany osobních údajů',
            
            // Common
            'contact.email': 'Email',
            'contact.address': 'Adresa'
        },
        
        en: {
            // Navigation
            'nav.services': 'Our Services',
            'nav.industries': 'Industries',
            'nav.projects': 'Projects',
            'nav.about': 'About Us',
            'nav.ma': 'Mergers & Acquisitions',
            'nav.consulting': 'Corporate Advisory & Valuation',
            
            // Newsletter
            'newsletter.title': 'Are you an investor looking for new opportunities?',
            'newsletter.subtitle': 'Fill out our non-binding questionnaire',
            'newsletter.button': 'NON-BINDING QUESTIONNAIRE',
            'newsletter.highlight': 'non-binding',
            
            // Chatbot
            'chatbot.title': 'Questions?',
            'chatbot.placeholder': 'Type your message...',
            'chatbot.send': 'Send',
            'chatbot.greeting': 'Hello! How can I help you? Are you interested in our M&A services?',
            
            // Footer
            'footer.privacy': 'Privacy Policy',
            
            // Common
            'contact.email': 'Email',
            'contact.address': 'Address'
        },
        
        de: {
            // Navigation
            'nav.services': 'Unsere Dienstleistungen',
            'nav.industries': 'Branchen',
            'nav.projects': 'Projekte',
            'nav.about': 'Über uns',
            'nav.ma': 'Fusionen & Übernahmen',
            'nav.consulting': 'Unternehmensberatung & Bewertung',
            
            // Newsletter
            'newsletter.title': 'Sind Sie Investor und möchten neue Möglichkeiten per E-Mail?',
            'newsletter.subtitle': 'Füllen Sie unseren unverbindlichen Fragebogen aus',
            'newsletter.button': 'UNVERBINDLICHER FRAGEBOGEN',
            'newsletter.highlight': 'unverbindlichen',
            
            // Chatbot
            'chatbot.title': 'Fragen?',
            'chatbot.placeholder': 'Nachricht eingeben...',
            'chatbot.send': 'Senden',
            'chatbot.greeting': 'Hallo! Wie kann ich Ihnen helfen? Interessieren Sie sich für unsere M&A-Dienstleistungen?',
            
            // Footer
            'footer.privacy': 'Datenschutzrichtlinie',
            
            // Common
            'contact.email': 'E-Mail',
            'contact.address': 'Adresse'
        },
        
        fr: {
            // Navigation
            'nav.services': 'Nos Services',
            'nav.industries': 'Secteurs',
            'nav.projects': 'Projets',
            'nav.about': 'À propos',
            'nav.ma': 'Fusions & Acquisitions',
            'nav.consulting': 'Conseil & Évaluation d\'entreprise',
            
            // Newsletter
            'newsletter.title': 'Êtes-vous investisseur et souhaitez de nouvelles opportunités par e-mail?',
            'newsletter.subtitle': 'Remplissez notre questionnaire sans engagement',
            'newsletter.button': 'QUESTIONNAIRE SANS ENGAGEMENT',
            'newsletter.highlight': 'sans engagement',
            
            // Chatbot
            'chatbot.title': 'Questions?',
            'chatbot.placeholder': 'Tapez votre message...',
            'chatbot.send': 'Envoyer',
            'chatbot.greeting': 'Bonjour! Comment puis-je vous aider? Êtes-vous intéressé par nos services M&A?',
            
            // Footer
            'footer.privacy': 'Politique de confidentialité',
            
            // Common
            'contact.email': 'Email',
            'contact.address': 'Adresse'
        },
        
        es: {
            // Navigation
            'nav.services': 'Nuestros Servicios',
            'nav.industries': 'Sectores',
            'nav.projects': 'Proyectos',
            'nav.about': 'Sobre nosotros',
            'nav.ma': 'Fusiones y Adquisiciones',
            'nav.consulting': 'Consultoría y Valoración Empresarial',
            
            // Newsletter
            'newsletter.title': '¿Es usted inversor y quiere nuevas oportunidades por email?',
            'newsletter.subtitle': 'Complete nuestro cuestionario sin compromiso',
            'newsletter.button': 'CUESTIONARIO SIN COMPROMISO',
            'newsletter.highlight': 'sin compromiso',
            
            // Chatbot
            'chatbot.title': '¿Preguntas?',
            'chatbot.placeholder': 'Escriba su mensaje...',
            'chatbot.send': 'Enviar',
            'chatbot.greeting': '¡Hola! ¿Cómo puedo ayudarle? ¿Está interesado en nuestros servicios M&A?',
            
            // Footer
            'footer.privacy': 'Política de Privacidad',
            
            // Common
            'contact.email': 'Email',
            'contact.address': 'Dirección'
        },
        
        it: {
            // Navigation
            'nav.services': 'I Nostri Servizi',
            'nav.industries': 'Settori',
            'nav.projects': 'Progetti',
            'nav.about': 'Chi siamo',
            'nav.ma': 'Fusioni e Acquisizioni',
            'nav.consulting': 'Consulenza e Valutazione Aziendale',
            
            // Newsletter
            'newsletter.title': 'Sei un investitore e vuoi nuove opportunità via email?',
            'newsletter.subtitle': 'Compila il nostro questionario non vincolante',
            'newsletter.button': 'QUESTIONARIO NON VINCOLANTE',
            'newsletter.highlight': 'non vincolante',
            
            // Chatbot
            'chatbot.title': 'Domande?',
            'chatbot.placeholder': 'Scrivi il tuo messaggio...',
            'chatbot.send': 'Invia',
            'chatbot.greeting': 'Ciao! Come posso aiutarti? Sei interessato ai nostri servizi M&A?',
            
            // Footer
            'footer.privacy': 'Informativa sulla Privacy',
            
            // Common
            'contact.email': 'Email',
            'contact.address': 'Indirizzo'
        }
    },
    
    // Get translation
    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    },
    
    // Set language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updatePage();
            localStorage.setItem('language', lang);
        }
    },
    
    // Update page content
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update newsletter button href
        const newsletterBtn = document.querySelector('.newsletter-btn');
        if (newsletterBtn) {
            const subject = this.currentLanguage === 'cs' 
                ? 'Nezávazný dotazník - zájem o investiční příležitosti'
                : 'Non-binding questionnaire - interest in investment opportunities';
            newsletterBtn.href = `mailto:info@adnp.cz?subject=${encodeURIComponent(subject)}`;
        }
    },
    
    // Initialize
    init() {
        const savedLang = localStorage.getItem('language') || 'cs';
        this.setLanguage(savedLang);
        
        // Create language selector
        this.createLanguageSelector();
    },
    
    // Create language selector
    createLanguageSelector() {
        const languages = [
            { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'it', name: 'Italiano', flag: '🇮🇹' }
        ];
        
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <div class="language-toggle">
                <span class="current-language">${languages.find(l => l.code === this.currentLanguage).flag}</span>
                <span class="dropdown-arrow">▼</span>
            </div>
            <div class="language-dropdown">
                ${languages.map(lang => `
                    <div class="language-option ${lang.code === this.currentLanguage ? 'active' : ''}" data-lang="${lang.code}">
                        <span class="flag">${lang.flag}</span>
                        <span class="name">${lang.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add to navigation
        const navRight = document.querySelector('.nav-right');
        if (navRight) {
            navRight.insertBefore(selector, navRight.firstChild);
        }
        
        // Add event listeners
        const toggle = selector.querySelector('.language-toggle');
        const dropdown = selector.querySelector('.language-dropdown');
        
        toggle.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
        
        selector.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                dropdown.classList.remove('active');
                
                // Update current language display
                const currentLang = languages.find(l => l.code === lang);
                toggle.querySelector('.current-language').textContent = currentLang.flag;
                
                // Update active state
                selector.querySelectorAll('.language-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!selector.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});