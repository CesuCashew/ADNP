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
            
            // Navigation - Industries detailed
            'nav.real_estate': 'Nemovitosti',
            'nav.it_full': 'Digitální Technologie a IT',
            'nav.retail_full': 'Obchod a retail',
            'nav.logistics_full': 'Doprava a logistika',
            'nav.healthcare': 'Zdravotnictví',
            'nav.gastro_full': 'Gastro, potravinářství a nápoje',
            'nav.crypto': 'Kryptoměny',
            'nav.finance_full': 'Finanční služby',
            'nav.construction_full': 'Stavebnictví a development',
            'nav.automotive_full': 'Automobilový průmysl',
            'nav.materials_full': 'Materiály a těžba',
            'nav.infrastructure_full': 'Infrastruktura a doprava',
            'nav.b2b_full': 'Podnikové služby',
            'nav.manufacturing_full': 'Průmysl a výroba',
            'nav.energy_full': 'Energetika a obnovitelné zdroje',
            
            // Hero Section
            'hero.title': 'Vytváříme synergie v každé transakci',
            'hero.description': 'Jsme tým profesionálů specializujících se na fúze a akvizice. Naše expertíza je o číslech, hloubce porozumění a následném optimálním řešení; uděláme vše pro to, abychom zajistili úspěch vašeho projektu.',
            
            // About Section
            'about.title': 'O NÁS',
            'about.text': 'Vítejte u nás, kde nabízíme precizní a nezávislé poradenství pro středně velké podniky. Každý podnik má svůj unikátní příběh a vizi, a my vám pomůžeme při klíčových rozhodnutích během procesu prodeje a nákupu firem.',
            'about.team': 'Náš tým tvoří více než <strong>30 odborníků</strong> včetně právníků, účetních, transakčních specialistů a daňových poradců.',
            
            // Stats Section
            'stats.title': 'ADNP v číslech',
            'stats.colleagues': 'Kolegů v týmu',
            'stats.projects': 'Dokončených projektů',
            'stats.value': 'Transakční hodnota',
            'stats.unit': 'mld CZK',
            
            // Services Section
            'services.title': 'NAŠE SLUŽBY',
            'services.subtitle': 'Komplexní poradenství pro strategické rozhodnutí vašeho podnikání',
            'services.ma.title': 'FÚZE A AKVIZICE',
            'services.ma.description': 'Dodáváme jedinečná řešení pro strategický prodej a nákup firem s maximalizací hodnoty pro všechny strany.',
            'services.ma.specialization': 'Specializujeme se na:',
            'services.ma.due_diligence': 'Due diligence a analýza rizik',
            'services.ma.valuation': 'Oceňování podniků a aktiv',
            'services.ma.structuring': 'Strukturování transakcí',
            'services.ma.negotiation': 'Vyjednávání podmínek',
            'services.ma.integration': 'Post-merger integrace',
            'services.ma.cross_border': 'Cross-border transakce',
            'services.ma.highlight1_value': '5 mld CZK',
            'services.ma.highlight1_label': 'Transakční hodnota',
            'services.ma.highlight2_value': '100+',
            'services.ma.highlight2_label': 'Dokončených projektů',
            'services.ma.highlight3_value': '15+',
            'services.ma.highlight3_label': 'Odvětví zkušeností',
            'services.consulting.title': 'PODNIKOVÉ PORADENSTVÍ A OCEŇOVÁNÍ',
            'services.consulting.description': 'Rozvíjíme příběh vaší firmy a pomáhámě s klíčovými strategickými rozhodnutími pro dlouhodobý růst.',
            'services.consulting.offers': 'Nabízíme:',
            'services.consulting.planning': 'Strategické plánování a analýzy',
            'services.consulting.valuation': 'Oceňování pro různé účely',
            'services.consulting.modeling': 'Finanční modelování',
            'services.consulting.restructuring': 'Restrukturalizace a optimalizace',
            'services.consulting.investment': 'Příprava na investice',
            'services.consulting.esg': 'ESG poradenství',
            'services.consulting.highlight1_value': '30+',
            'services.consulting.highlight1_label': 'Expertů v týmu',
            'services.consulting.highlight2_value': '10+',
            'services.consulting.highlight2_label': 'Let zkušeností',
            'services.consulting.highlight3_value': '360°',
            'services.consulting.highlight3_label': 'Komplexní přístup',
            'services.more_info': 'Více informací',
            
            // Industries Section
            'industries.title': 'ODVĚTVÍ',
            'industries.subtitle': 'Specializujeme se na široké spektrum odvětví s hlubokým porozuměním specifických potřeb každého sektoru',
            'industries.real_estate': 'Nemovitosti',
            'industries.real_estate_desc': 'Komerční, rezidenční a investiční nemovitosti',
            'industries.it': 'IT',
            'industries.it_desc': 'Software, AI, cloudové služby a inovace',
            'industries.retail': 'Retail',
            'industries.retail_desc': 'E-commerce, maloobchod a distribuce',
            'industries.logistics': 'Logistika',
            'industries.logistics_desc': 'Doprava, skladování a supply chain',
            'industries.healthcare': 'Zdravotnictví',
            'industries.healthcare_desc': 'Medicína, farmacie a zdravotní technologie',
            'industries.gastro': 'Gastro',
            'industries.gastro_desc': 'Restaurace, potravinářství a nápoje',
            'industries.crypto': 'Kryptoměny',
            'industries.crypto_desc': 'Blockchain, DeFi a digitální aktiva',
            'industries.finance': 'Finance',
            'industries.finance_desc': 'Bankovnictví, pojišťovnictví a fintech',
            'industries.construction': 'Stavebnictví',
            'industries.construction_desc': 'Development, infrastruktura a výstavba',
            'industries.automotive': 'Automobily',
            'industries.automotive_desc': 'Automobilový průmysl a komponenty',
            'industries.mining': 'Těžba',
            'industries.mining_desc': 'Suroviny, materiály a zpracování',
            'industries.b2b': 'B2B Služby',
            'industries.b2b_desc': 'Konzultace, účetnictví a HR',
            'industries.manufacturing': 'Průmysl',
            'industries.manufacturing_desc': 'Výroba, automatizace a Průmysl 4.0',
            'industries.energy': 'Energetika',
            'industries.energy_desc': 'Obnovitelné zdroje a energetická řešení',
            'industries.infrastructure': 'Infrastruktura',
            'industries.infrastructure_desc': 'Doprava, telekomunikace a Smart City',
            
            // Projects page
            'projects.title': 'Projekty',
            'projects.hero_title': 'Úspěšné transakce napříč odvětvími',
            'projects.subtitle': 'Úspěšné transakce napříč odvětvími',
            'projects.intro': 'Za několik let našeho působení jsme úspěšně dokončili desítky projektů v oblasti fúzí a akvizic, podnikového poradenství a oceňování společností napříč všemi odvětvími české ekonomiky.',
            'projects.expertise_title': 'Naše expertíza v praxi',
            'projects.expertise_text1': 'Každý projekt přináší jedinečné výzvy a příležitosti. Naší silou je schopnost rychle se orientovat v různých odvětvích a pochopit specifické potřeby každého klienta. Portfolio našich realizovaných projektů odráží šíři našich kompetencí a hloubku expertízy.',
            'projects.expertise_text2': 'V ADNP se zaměřujeme na "vytváření synergií v každé transakci". Každý úspěšně dokončený projekt je důkazem našeho závazku poskytovat klientům maximální hodnotu prostřednictvím strategické analýzy a precizního řízení procesů.',
            'projects.testimonials_title': 'Testimonials klientů',
            'projects.testimonial1': 'ADNP prokázal výjimečnou expertízu při analýze našeho podniku a pomohl nám najít strategického partnera, který perfektně zapadl do našich dlouhodobých plánů.',
            'projects.testimonial1_text': 'ADNP prokázal výjimečnou expertízu při analýze našeho podniku a pomohl nám najít strategického partnera, který perfektně zapadl do našich dlouhodobých plánů.',
            'projects.testimonial1_author': '- Klient z technologického sektoru',
            'projects.testimonial2': 'Profesionalita, rychlost a preciznost. ADNP nám pomohl úspěšně dokončit komplexní transakci v rekordním čase.',
            'projects.testimonial2_text': 'Profesionalita, rychlost a preciznost. ADNP nám pomohl úspěšně dokončit komplexní transakci v rekordním čase.',
            'projects.project_types_title': 'Typy realizovaných projektů',
            'projects.types_title': 'Typy realizovaných projektů',
            'projects.type1': 'Akvizice v technologickém sektoru - IT společnosti, software pro e-commerce',
            'projects.type2': 'Prodej výrobních společností - automobilový průmysl, zahraniční investoři',
            'projects.type3': 'Fúze v oblasti zdravotnictví - poskytovatelé zdravotních služeb',
            'projects.type4': 'Oceňování nemovitostního portfolia - komerční nemovitosti, refinancování',
            'projects.type5': 'Management buy-out v retailu - obchodní řetězce, strukturování financování',
            'projects.type6': 'Restrukturalizace logistických společností - optimalizace procesů',
            'projects.type7': 'Due diligence pro investory - kompletní analýzy rizik a příležitostí',
            'projects.type8': 'Strategické poradenství - dlouhodobé plánování a optimalizace',
            'projects.sectors_title': 'Odvětví našich projektů',
            'projects.sector_tech': 'Technologie a IT',
            'projects.sector_realestate': 'Nemovitosti',
            'projects.sector_manufacturing': 'Výroba a průmysl',
            'projects.sector_healthcare': 'Zdravotnictví',
            'projects.sector_retail': 'Retail a služby',
            'projects.sector_logistics': 'Doprava a logistika',
            'projects.sector_energy': 'Energetika',
            'projects.sector_food': 'Potravinářství',
            'projects.sector1': 'Technologie a IT',
            'projects.sector2': 'Nemovitosti',
            'projects.sector3': 'Výroba a průmysl',
            'projects.sector4': 'Zdravotnictví',
            'projects.sector5': 'Retail a služby',
            'projects.sector6': 'Doprava a logistika',
            'projects.sector7': 'Energetika',
            'projects.sector8': 'Potravinářství',
            'projects.contact_title': 'Chcete konzultovat váš projekt?',
            'projects.contact_text': 'Každý projekt je pro nás jedinečný. Rádi s vámi prodiskutujeme specifika vašeho případu a navrhneme optimální řešení.',
            
            // About us page
            'about_page.title': 'O nás',
            'about_page.subtitle': 'Tým profesionálů s jasnou vizí',
            'about_page.intro': 'ADNP a.s. je česká poradenská společnost specializující se na fúze a akvizice. Nabízíme precizní a nezávislé poradenství pro středně velké podniky napříč různými odvětvími ekonomiky.',
            'about_page.expertise_title': 'Naše expertíza',
            'about_page.expertise_text1': 'Každý podnik má svůj unikátní příběh a vizi, a my pomáháme našim klientům při klíčových rozhodnutích během procesu prodeje a nákupu firem. Naše expertíza je založena na číslech, hloubce porozumění a následném optimálním řešení.',
            'about_page.expertise_text2': 'V ADNP se zaměřujeme na "vytváření synergií v každé transakci". Naším cílem je transformovat obchodní příležitosti a otevírat nové cesty k růstu prostřednictvím strategické analýzy a hlubokého porozumění trhu.',
            'about_page.values_title': 'Naše hodnoty a přístup',
            'about_page.value1_title': 'Optimismus a přátelství',
            'about_page.value1_text': 'Věříme v pozitivní přístup a budování dlouhodobých vztahů s našimi klienty.',
            'about_page.value2_title': 'Spolupráce a angažovanost',
            'about_page.value2_text': 'Pracujeme jako jeden tým s našimi klienty pro dosažení společných cílů.',
            'about_page.value3_title': 'Jasná strategie a realizace',
            'about_page.value3_text': 'Zaměřujeme se na praktická řešení a jejich úspěšnou implementaci.',
            'about_page.value4_title': 'Etika a profesionalita',
            'about_page.value4_text': 'Dodržujeme nejvyšší etické standardy a profesionální postupy.',
            'about_page.team_title': 'Náš tým',
            'about_page.team_intro': 'Více než 30 profesionálů z různých oblastí:',
            'about_page.team1': 'Právníci - specialisté na korporátní právo a M&A transakce',
            'about_page.team2': 'Účetní - experti na finanční analýzy a oceňování',
            'about_page.team3': 'Transakční specialisté - odborníci na řízení složitých procesů',
            'about_page.team4': 'Daňoví poradci - specialisté na optimalizaci struktur',
            'about_page.team5': 'Strategičtí poradci - experti na obchodní plánování',
            'about_page.team6': 'Due diligence specialisté - analytici rizik a příležitostí',
            'about_page.team7': 'Sektoroví specialisté - znalci specifických odvětví',
            'about_page.contact_title': 'Kontaktní údaje',
            
            // Mergers & Acquisitions page
            'ma_page.title': 'Fúze a akvizice',
            'ma_page.subtitle': 'Vytváříme synergie v každé transakci s precizností a strategickou vizí',
            'ma_page.philosophy_title': 'Naše filosofie M&A',
            'ma_page.philosophy_text': 'V ADNP chápeme, že každá fúze nebo akvizice představuje jedinečnou příležitost k vytvoření hodnoty. Náš přístup je založen na hlubokém porozumění obchodním cílům klientů a systematickém řízení celého procesu transakce.',
            'ma_page.expertise_title': 'Naše expertíza',
            'ma_page.strategic_planning_title': 'Strategické plánování',
            'ma_page.strategic_planning_text': 'Identifikace a vyhodnocení M&A příležitostí s důrazem na dlouhodobé strategické cíle',
            'ma_page.strategic_item1': 'Analýza trhu a konkurence',
            'ma_page.strategic_item2': 'Screening cílových společností',
            'ma_page.strategic_item3': 'Vyhodnocení synergií',
            'ma_page.due_diligence_title': 'Due Diligence',
            'ma_page.due_diligence_text': 'Komplexní prověření všech aspektů cílové společnosti s důrazem na identifikaci rizik',
            'ma_page.dd_item1': 'Finanční due diligence',
            'ma_page.dd_item2': 'Právní a regulatorní audit',
            'ma_page.dd_item3': 'Technická a IT analýza',
            'ma_page.valuation_title': 'Oceňování & Strukturování',
            'ma_page.valuation_text': 'Precizní oceňování s využitím moderních metod a optimalizace struktury transakce',
            'ma_page.valuation_item1': 'DCF a multiplikátorové modely',
            'ma_page.valuation_item2': 'Daňově optimalizované struktury',
            'ma_page.valuation_item3': 'Podmínky platby a garance',
            'ma_page.integration_title': 'Post-merger integrace',
            'ma_page.integration_text': 'Systematická integrace společností pro dosažení plánovaných synergií a ROI',
            'ma_page.integration_item1': 'Integrační plánování',
            'ma_page.integration_item2': 'Change management',
            'ma_page.integration_item3': 'Tracking synergií',
            'ma_page.transaction_types_title': 'Typy transakcí, které řídíme',
            'ma_page.transaction1_title': 'Strategické akvizice',
            'ma_page.transaction1_text': 'Nákup společností pro rozšíření tržního podílu nebo portfolia',
            'ma_page.transaction2_title': 'Management buy-outs',
            'ma_page.transaction2_text': 'Transakce vedené managementem pro převzetí kontroly',
            'ma_page.transaction3_title': 'Fúze equals',
            'ma_page.transaction3_text': 'Spojení rovnocenných partnerů pro dosažení synergií',
            'ma_page.transaction4_title': 'Cross-border transakce',
            'ma_page.transaction4_text': 'Mezinárodní M&A s komplexními regulatorními požadavky',
            'ma_page.transaction5_title': 'Joint ventures',
            'ma_page.transaction5_text': 'Strategická partnerství a společné podnikání',
            'ma_page.transaction6_title': 'Exit strategie',
            'ma_page.transaction6_text': 'Prodej společností nebo podílů s maximalizací hodnoty',
            'ma_page.stats_value': '5 mld CZK',
            'ma_page.stats_value_label': 'Celková hodnota řízených transakcí',
            'ma_page.stats_projects': '100+',
            'ma_page.stats_projects_label': 'Úspěšně dokončených M&A projektů',
            'ma_page.stats_industries': '15+',
            'ma_page.stats_industries_label': 'Odvětví s prokázanou expertízou',
            
            // Newsletter
            'newsletter.title': 'Jste investor a chcete nové příležitosti do e-mailu?',
            'newsletter.subtitle': 'Vyplňte náš nezávazný dotazník',
            'newsletter.button': 'NEZÁVAZNÝ DOTAZNÍK',
            'newsletter.highlight': 'nezávazný',
            // Added because HTML uses newsletter.description
            'newsletter.description': 'Vyplňte náš <span class="highlight">nezávazný</span> dotazník',
            
            // Chatbot
            'chatbot.title': 'Máte dotazy?',
            'chatbot.placeholder': 'Napište vaši zprávu...',
            'chatbot.send': 'Poslat',
            'chatbot.greeting': 'Dobrý den! Jak vám mohu pomoci? Zajímáte se o naše služby v oblasti M&A?',
            
            // Footer
            'footer.privacy': 'Zásady zpracování a ochrany osobních údajů',
            // Added footer keys used in HTML
            'footer.company': 'ADNP a.s.',
            'footer.address': 'Opletalova 39, 110 00 Praha 1',
            
            // Common
            'contact.email': 'Email: <a href="mailto:info@adnp.cz">info@adnp.cz</a>',
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
            
            // Navigation - Industries detailed
            'nav.real_estate': 'Real Estate',
            'nav.it_full': 'Digital Technology and IT',
            'nav.retail_full': 'Trade and Retail',
            'nav.logistics_full': 'Transport and Logistics',
            'nav.healthcare': 'Healthcare',
            'nav.gastro_full': 'Gastro, Food Industry and Beverages',
            'nav.crypto': 'Cryptocurrency',
            'nav.finance_full': 'Financial Services',
            'nav.construction_full': 'Construction and Development',
            'nav.automotive_full': 'Automotive Industry',
            'nav.materials_full': 'Materials and Mining',
            'nav.infrastructure_full': 'Infrastructure and Transport',
            'nav.b2b_full': 'Corporate Services',
            'nav.manufacturing_full': 'Industry and Manufacturing',
            'nav.energy_full': 'Energy and Renewable Sources',
            
            // Hero Section
            'hero.title': 'Creating synergies in every transaction',
            'hero.description': 'We are a team of professionals specializing in mergers and acquisitions. Our expertise is about numbers, depth of understanding and subsequent optimal solutions; we will do everything to ensure the success of your project.',
            
            // About Section
            'about.title': 'ABOUT US',
            'about.text': 'Welcome to us, where we offer precise and independent advice for medium-sized companies. Every business has its unique story and vision, and we help you make key decisions during the process of buying and selling companies.',
            'about.team': 'Our team consists of more than <strong>30 experts</strong> including lawyers, accountants, transaction specialists and tax advisors.',
            
            // Stats Section
            'stats.title': 'ADNP in Numbers',
            'stats.colleagues': 'Team Members',
            'stats.projects': 'Completed Projects',
            'stats.value': 'Transaction Value',
            'stats.unit': 'billion CZK',
            
            // Services Section
            'services.title': 'OUR SERVICES',
            'services.subtitle': 'Comprehensive consulting for strategic decisions in your business',
            'services.ma.title': 'MERGERS & ACQUISITIONS',
            'services.ma.description': 'We deliver unique solutions for strategic sale and acquisition of companies with value maximization for all parties.',
            'services.ma.specialization': 'We specialize in:',
            'services.ma.due_diligence': 'Due diligence and risk analysis',
            'services.ma.valuation': 'Business and asset valuation',
            'services.ma.structuring': 'Transaction structuring',
            'services.ma.negotiation': 'Terms negotiation',
            'services.ma.integration': 'Post-merger integration',
            'services.ma.cross_border': 'Cross-border transactions',
            'services.ma.highlight1_value': '5 billion CZK',
            'services.ma.highlight1_label': 'Transaction Value',
            'services.ma.highlight2_value': '100+',
            'services.ma.highlight2_label': 'Completed Projects',
            'services.ma.highlight3_value': '15+',
            'services.ma.highlight3_label': 'Industries Experience',
            'services.consulting.title': 'CORPORATE ADVISORY & VALUATION',
            'services.consulting.description': 'We develop your company\'s story and help with key strategic decisions for long-term growth.',
            'services.consulting.offers': 'We offer:',
            'services.consulting.planning': 'Strategic planning and analysis',
            'services.consulting.valuation': 'Valuation for various purposes',
            'services.consulting.modeling': 'Financial modeling',
            'services.consulting.restructuring': 'Restructuring and optimization',
            'services.consulting.investment': 'Investment preparation',
            'services.consulting.esg': 'ESG advisory',
            'services.consulting.highlight1_value': '30+',
            'services.consulting.highlight1_label': 'Experts in Team',
            'services.consulting.highlight2_value': '10+',
            'services.consulting.highlight2_label': 'Years of Experience',
            'services.consulting.highlight3_value': '360°',
            'services.consulting.highlight3_label': 'Comprehensive Approach',
            'services.more_info': 'More Information',
            
            // Industries Section
            'industries.title': 'INDUSTRIES',
            'industries.subtitle': 'We specialize in a wide range of industries with deep understanding of specific needs of each sector',
            'industries.real_estate': 'Real Estate',
            'industries.real_estate_desc': 'Commercial, residential and investment properties',
            'industries.it': 'IT',
            'industries.it_desc': 'Software, AI, cloud services and innovation',
            'industries.retail': 'Retail',
            'industries.retail_desc': 'E-commerce, retail and distribution',
            'industries.logistics': 'Logistics',
            'industries.logistics_desc': 'Transportation, warehousing and supply chain',
            'industries.healthcare': 'Healthcare',
            'industries.healthcare_desc': 'Medicine, pharmaceuticals and health technology',
            'industries.gastro': 'Gastro',
            'industries.gastro_desc': 'Restaurants, food industry and beverages',
            'industries.crypto': 'Cryptocurrency',
            'industries.crypto_desc': 'Blockchain, DeFi and digital assets',
            'industries.finance': 'Finance',
            'industries.finance_desc': 'Banking, insurance and fintech',
            'industries.construction': 'Construction',
            'industries.construction_desc': 'Development, infrastructure and construction',
            'industries.automotive': 'Automotive',
            'industries.automotive_desc': 'Automotive industry and components',
            'industries.mining': 'Mining',
            'industries.mining_desc': 'Raw materials, materials and processing',
            'industries.b2b': 'B2B Services',
            'industries.b2b_desc': 'Consulting, accounting and HR',
            'industries.manufacturing': 'Manufacturing',
            'industries.manufacturing_desc': 'Production, automation and Industry 4.0',
            'industries.energy': 'Energy',
            'industries.energy_desc': 'Renewable sources and energy solutions',
            'industries.infrastructure': 'Infrastructure',
            'industries.infrastructure_desc': 'Transport, telecommunications and Smart City',
            
            // Projects page
            'projects.title': 'Projects',
            'projects.subtitle': 'Successful transactions across industries',
            'projects.intro': 'Over the years, we have successfully completed dozens of projects in mergers and acquisitions, corporate advisory, and company valuation across all sectors of the Czech economy.',
            'projects.expertise_title': 'Our expertise in practice',
            'projects.expertise_text1': 'Every project brings unique challenges and opportunities. Our strength lies in the ability to quickly navigate different industries and understand the specific needs of each client. Our portfolio reflects the breadth of our competencies and the depth of our expertise.',
            'projects.expertise_text2': 'At ADNP, we focus on "creating synergies in every transaction". Each successfully completed project is proof of our commitment to deliver maximum value through strategic analysis and precise process management.',
            'projects.testimonials_title': 'Client Testimonials',
            'projects.testimonial1_text': 'ADNP demonstrated exceptional expertise in analyzing our business and helped us find a strategic partner that perfectly aligned with our long-term plans.',
            'projects.testimonial1_author': '- Client from the technology sector',
            'projects.testimonial2_text': 'Professionalism, speed, and precision. ADNP helped us successfully complete a complex transaction in record time.',
            'projects.testimonial2_author': '- Client from the manufacturing sector',
            'projects.types_title': 'Types of projects delivered',
            'projects.type1': 'Acquisitions in the technology sector – IT companies, e-commerce software',
            'projects.type2': 'Sale of manufacturing companies – automotive industry, foreign investors',
            'projects.type3': 'Mergers in healthcare – healthcare service providers',
            'projects.type4': 'Valuation of real estate portfolios – commercial properties, refinancing',
            'projects.type5': 'Management buy-out in retail – retail chains, financing structuring',
            'projects.type6': 'Restructuring of logistics companies – process optimization',
            'projects.type7': 'Due diligence for investors – comprehensive risk and opportunity analyses',
            'projects.type8': 'Strategic advisory – long-term planning and optimization',
            'projects.sectors_title': 'Industries of our projects',
            'projects.sector1': 'Technology and IT',
            'projects.sector2': 'Real Estate',
            'projects.sector3': 'Manufacturing and Industry',
            'projects.sector4': 'Healthcare',
            'projects.sector5': 'Retail and Services',
            'projects.sector6': 'Transport and Logistics',
            'projects.sector7': 'Energy',
            'projects.sector8': 'Food Industry',
            'projects.contact_title': 'Would you like to discuss your project?',
            'projects.contact_text': 'Every project is unique to us. We will be happy to discuss the specifics of your case and propose the optimal solution.',

            // About us page
            'about_page.title': 'About Us',
            'about_page.subtitle': 'A team of professionals with a clear vision',
            'about_page.intro': 'ADNP a.s. is a Czech advisory company specializing in mergers and acquisitions. We offer precise and independent consulting for medium-sized companies across various sectors of the economy.',
            'about_page.expertise_title': 'Our Expertise',
            'about_page.expertise_text1': 'Every company has its unique story and vision, and we help our clients make key decisions during the process of buying and selling companies. Our expertise is based on numbers, deep understanding, and optimal solutions.',
            'about_page.expertise_text2': 'At ADNP, we focus on "creating synergies in every transaction". Our goal is to transform business opportunities and open new paths to growth through strategic analysis and deep market understanding.',
            'about_page.values_title': 'Our Values and Approach',
            'about_page.value1_title': 'Optimism and Friendship',
            'about_page.value1_text': 'We believe in a positive attitude and building long-term relationships with our clients.',
            'about_page.value2_title': 'Collaboration and Engagement',
            'about_page.value2_text': 'We work as one team with our clients to achieve common goals.',
            'about_page.value3_title': 'Clear Strategy and Execution',
            'about_page.value3_text': 'We focus on practical solutions and their successful implementation.',
            'about_page.value4_title': 'Ethics and Professionalism',
            'about_page.value4_text': 'We adhere to the highest ethical standards and professional practices.',
            'about_page.team_title': 'Our Team',
            'about_page.team_intro': 'More than 30 professionals from various fields:',
            'about_page.team1': 'Lawyers – specialists in corporate law and M&A transactions',
            'about_page.team2': 'Accountants – experts in financial analysis and valuation',
            'about_page.team3': 'Transaction specialists – experts in managing complex processes',
            'about_page.team4': 'Tax advisors – specialists in optimizing structures',
            'about_page.team5': 'Strategic advisors – experts in business planning',
            'about_page.team6': 'Due diligence specialists – analysts of risks and opportunities',
            'about_page.team7': 'Sector specialists – experts in specific industries',
            'about_page.contact_title': 'Contact Details',

            // Newsletter
            'newsletter.title': 'Are you an investor looking for new opportunities?',
            'newsletter.subtitle': 'Fill out our non-binding questionnaire',
            'newsletter.button': 'NON-BINDING QUESTIONNAIRE',
            'newsletter.highlight': 'non-binding',
            // Added because HTML uses newsletter.description
            'newsletter.description': 'Fill out our <span class="highlight">non-binding</span> questionnaire',
            
            // Chatbot
            'chatbot.title': 'Questions?',
            'chatbot.placeholder': 'Type your message...',
            'chatbot.send': 'Send',
            'chatbot.greeting': 'Hello! How can I help you? Are you interested in our M&A services?',
            
            // Footer
            'footer.privacy': 'Privacy Policy',
            // Added footer keys used in HTML
            'footer.company': 'ADNP a.s.',
            'footer.address': 'Opletalova 39, 110 00 Prague 1',
            
            // Common
            'contact.email': 'Email: <a href="mailto:info@adnp.cz">info@adnp.cz</a>',
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
            
            // Hero Section
            'hero.title': 'Synergien schaffen in jeder Transaktion',
            'hero.description': 'Wir sind ein Team von Fachleuten, die sich auf Fusionen und Übernahmen spezialisiert haben. Unsere Expertise basiert auf Zahlen, tiefem Verständnis und anschließenden optimalen Lösungen; wir werden alles tun, um den Erfolg Ihres Projekts sicherzustellen.',
            
            // About Section
            'about.title': 'ÜBER UNS',
            'about.text': 'Willkommen bei uns, wo wir präzise und unabhängige Beratung für mittelständische Unternehmen anbieten. Jedes Unternehmen hat seine einzigartige Geschichte und Vision, und wir helfen Ihnen bei wichtigen Entscheidungen während des Verkaufs- und Kaufprozesses von Unternehmen.',
            'about.team': 'Unser Team besteht aus mehr als <strong>30 Experten</strong>, darunter Anwälte, Wirtschaftsprüfer, Transaktionsspezialisten und Steuerberater.',
            
            // Stats Section
            'stats.title': 'ADNP in Zahlen',
            'stats.colleagues': 'Teammitglieder',
            'stats.projects': 'Abgeschlossene Projekte',
            'stats.value': 'Transaktionswert',
            'stats.unit': 'Mrd. CZK',
            
            // Services Section
            'services.title': 'UNSERE DIENSTLEISTUNGEN',
            'services.subtitle': 'Umfassende Beratung für strategische Entscheidungen in Ihrem Unternehmen',
            'services.ma.title': 'FUSIONEN & ÜBERNAHMEN',
            'services.ma.description': 'Wir liefern einzigartige Lösungen für den strategischen Verkauf und Kauf von Unternehmen mit Wertmaximierung für alle Parteien.',
            'services.consulting.title': 'UNTERNEHMENSBERATUNG & BEWERTUNG',
            'services.consulting.description': 'Wir entwickeln die Geschichte Ihres Unternehmens und helfen bei wichtigen strategischen Entscheidungen für langfristiges Wachstum.',
            'services.ma.specialization': 'Wir spezialisieren uns auf:',
            'services.ma.due_diligence': 'Due Diligence und Risikoanalyse',
            'services.ma.valuation': 'Unternehmensbewertung und Asset-Bewertung',
            'services.ma.structuring': 'Transaktionsstrukturierung',
            'services.ma.negotiation': 'Verhandlung von Bedingungen',
            'services.ma.integration': 'Post-Merger-Integration',
            'services.ma.cross_border': 'Grenzüberschreitende Transaktionen',
            'services.ma.highlight1_value': '5 Mrd. CZK',
            'services.ma.highlight1_label': 'Transaktionswert',
            'services.ma.highlight2_value': '100+',
            'services.ma.highlight2_label': 'Abgeschlossene Projekte',
            'services.ma.highlight3_value': '15+',
            'services.ma.highlight3_label': 'Branchenerfahrung',
            'services.consulting.offers': 'Wir bieten:',
            'services.consulting.planning': 'Strategische Planung und Analysen',
            'services.consulting.valuation': 'Bewertung für verschiedene Zwecke',
            'services.consulting.modeling': 'Finanzmodellierung',
            'services.consulting.restructuring': 'Restrukturierung und Optimierung',
            'services.consulting.investment': 'Investitionsvorbereitung',
            'services.consulting.esg': 'ESG-Beratung',
            'services.consulting.highlight1_value': '30+',
            'services.consulting.highlight1_label': 'Experten im Team',
            'services.consulting.highlight2_value': '10+',
            'services.consulting.highlight2_label': 'Jahre Erfahrung',
            'services.consulting.highlight3_value': '360°',
            'services.consulting.highlight3_label': 'Ganzheitlicher Ansatz',
            'services.more_info': 'Mehr Informationen',
            
            // Industries Section
            'industries.title': 'BRANCHEN',
            'industries.subtitle': 'Wir spezialisieren uns auf eine breite Palette von Branchen mit tiefem Verständnis der spezifischen Bedürfnisse jedes Sektors',
            'industries.real_estate': 'Immobilien',
            'industries.real_estate_desc': 'Gewerbe-, Wohn- und Anlageimmobilien',
            'industries.it': 'IT',
            'industries.it_desc': 'Software, KI, Cloud-Services und Innovation',
            'industries.retail': 'Einzelhandel',
            'industries.retail_desc': 'E-Commerce, Einzelhandel und Distribution',
            'industries.logistics': 'Logistik',
            'industries.logistics_desc': 'Transport, Lagerung und Lieferkette',
            'industries.healthcare': 'Gesundheitswesen',
            'industries.healthcare_desc': 'Medizin, Pharmazie und Gesundheitstechnologie',
            'industries.gastro': 'Gastronomie',
            'industries.gastro_desc': 'Restaurants, Lebensmittelindustrie und Getränke',
            'industries.crypto': 'Kryptowährungen',
            'industries.crypto_desc': 'Blockchain, DeFi und digitale Assets',
            'industries.finance': 'Finanzwesen',
            'industries.finance_desc': 'Banking, Versicherung und Fintech',
            'industries.construction': 'Bauwesen',
            'industries.construction_desc': 'Development, Infrastruktur und Bau',
            'industries.automotive': 'Automobilindustrie',
            'industries.automotive_desc': 'Automobilindustrie und Komponenten',
            'industries.mining': 'Bergbau',
            'industries.mining_desc': 'Rohstoffe, Materialien und Verarbeitung',
            'industries.b2b': 'B2B-Dienstleistungen',
            'industries.b2b_desc': 'Beratung, Buchhaltung und HR',
            'industries.manufacturing': 'Industrie',
            'industries.manufacturing_desc': 'Produktion, Automatisierung und Industrie 4.0',
            'industries.energy': 'Energiewirtschaft',
            'industries.energy_desc': 'Erneuerbare Quellen und Energielösungen',
            'industries.infrastructure': 'Infrastruktur',
            'industries.infrastructure_desc': 'Verkehr, Telekommunikation und Smart City',
            
            // Projects page
            'projects.title': 'Projekte',
            'projects.subtitle': 'Erfolgreiche Transaktionen branchenübergreifend',
            'projects.intro': 'Im Laufe der Jahre haben wir Dutzende von Projekten in den Bereichen Fusionen und Übernahmen, Unternehmensberatung und Unternehmensbewertung in allen Sektoren der tschechischen Wirtschaft erfolgreich abgeschlossen.',
            'projects.expertise_title': 'Unsere Expertise in der Praxis',
            'projects.expertise_text1': 'Jedes Projekt bringt einzigartige Herausforderungen und Chancen mit sich. Unsere Stärke liegt in der Fähigkeit, sich schnell in verschiedenen Branchen zurechtzufinden und die spezifischen Bedürfnisse jedes Kunden zu verstehen. Unser Portfolio spiegelt die Breite unserer Kompetenzen und die Tiefe unserer Expertise wider.',
            'projects.expertise_text2': 'Bei ADNP konzentrieren wir uns auf „Synergien in jeder Transaktion“. Jedes erfolgreich abgeschlossene Projekt ist ein Beweis für unser Engagement, durch strategische Analyse und präzises Prozessmanagement maximalen Kundennutzen zu liefern.',
            'projects.testimonials_title': 'Kundenstimmen',
            'projects.testimonial1_text': 'ADNP zeigte außergewöhnliche Expertise bei der Analyse unseres Unternehmens und half uns, einen strategischen Partner zu finden, der perfekt zu unseren langfristigen Plänen passte.',
            'projects.testimonial1_author': '- Kunde aus dem Technologiesektor',
            'projects.testimonial2_text': 'Professionalität, Geschwindigkeit und Präzision. ADNP half uns, eine komplexe Transaktion in Rekordzeit erfolgreich abzuschließen.',
            'projects.testimonial2_author': '- Kunde aus dem Industriesektor',
            'projects.types_title': 'Arten realisierter Projekte',
            'projects.type1': 'Akquisitionen im Technologiesektor – IT-Unternehmen, E-Commerce-Software',
            'projects.type2': 'Verkauf von Produktionsunternehmen – Automobilindustrie, ausländische Investoren',
            'projects.type3': 'Fusionen im Gesundheitswesen – Anbieter von Gesundheitsdiensten',
            'projects.type4': 'Bewertung von Immobilienportfolios – Gewerbeimmobilien, Refinanzierung',
            'projects.type5': 'Management-Buy-out im Einzelhandel – Einzelhandelsketten, Finanzierungsstrukturierung',
            'projects.type6': 'Restrukturierung von Logistikunternehmen – Prozessoptimierung',
            'projects.type7': 'Due Diligence für Investoren – umfassende Risiko- und Chancenanalysen',
            'projects.type8': 'Strategische Beratung – langfristige Planung und Optimierung',
            'projects.sectors_title': 'Branchen unserer Projekte',
            'projects.sector1': 'Technologie und IT',
            'projects.sector2': 'Immobilien',
            'projects.sector3': 'Produktion und Industrie',
            'projects.sector4': 'Gesundheitswesen',
            'projects.sector5': 'Einzelhandel und Dienstleistungen',
            'projects.sector6': 'Transport und Logistik',
            'projects.sector7': 'Energiewirtschaft',
            'projects.sector8': 'Lebensmittelindustrie',
            'projects.contact_title': 'Möchten Sie Ihr Projekt besprechen?',
            'projects.contact_text': 'Jedes Projekt ist für uns einzigartig. Gerne besprechen wir die Besonderheiten Ihres Falls und schlagen die optimale Lösung vor.',

            // About us page
            'about_page.title': 'Über uns',
            'about_page.subtitle': 'Ein Team von Profis mit klarer Vision',
            'about_page.intro': 'ADNP a.s. ist ein tschechisches Beratungsunternehmen, das sich auf Fusionen und Übernahmen spezialisiert hat. Wir bieten präzise und unabhängige Beratung für mittelständische Unternehmen in verschiedenen Branchen.',
            'about_page.expertise_title': 'Unsere Expertise',
            'about_page.expertise_text1': 'Jedes Unternehmen hat seine einzigartige Geschichte und Vision. Wir unterstützen unsere Kunden bei Schlüsselentscheidungen während des Kauf- und Verkaufsprozesses von Unternehmen. Unsere Expertise basiert auf Zahlen, tiefem Verständnis und optimalen Lösungen.',
            'about_page.expertise_text2': 'Bei ADNP konzentrieren wir uns auf „Synergien in jeder Transaktion“. Unser Ziel ist es, Geschäftschancen zu transformieren und durch strategische Analysen und tiefes Marktverständnis neue Wege zum Wachstum zu eröffnen.',
            'about_page.values_title': 'Unsere Werte und unser Ansatz',
            'about_page.value1_title': 'Optimismus und Freundschaft',
            'about_page.value1_text': 'Wir glauben an eine positive Einstellung und den Aufbau langfristiger Beziehungen zu unseren Kunden.',
            'about_page.value2_title': 'Zusammenarbeit und Engagement',
            'about_page.value2_text': 'Wir arbeiten als ein Team mit unseren Kunden zusammen, um gemeinsame Ziele zu erreichen.',
            'about_page.value3_title': 'Klare Strategie und Umsetzung',
            'about_page.value3_text': 'Wir konzentrieren uns auf praktische Lösungen und deren erfolgreiche Implementierung.',
            'about_page.value4_title': 'Ethik und Professionalität',
            'about_page.value4_text': 'Wir halten die höchsten ethischen Standards und professionellen Vorgehensweisen ein.',
            'about_page.team_title': 'Unser Team',
            'about_page.team_intro': 'Mehr als 30 Fachleute aus verschiedenen Bereichen:',
            'about_page.team1': 'Juristen – Spezialisten für Gesellschaftsrecht und M&A-Transaktionen',
            'about_page.team2': 'Buchhalter – Experten für Finanzanalysen und Bewertungen',
            'about_page.team3': 'Transaktionsspezialisten – Experten für die Steuerung komplexer Prozesse',
            'about_page.team4': 'Steuerberater – Spezialisten für die Optimierung von Strukturen',
            'about_page.team5': 'Strategieberater – Experten für Unternehmensplanung',
            'about_page.team6': 'Due-Diligence-Spezialisten – Analytiker für Risiken und Chancen',
            'about_page.team7': 'Branchenspezialisten – Experten für spezifische Industrien',
            'about_page.contact_title': 'Kontaktangaben',

            // Newsletter
            'newsletter.title': 'Sind Sie Investor und möchten neue Möglichkeiten per E-Mail?',
            'newsletter.subtitle': 'Füllen Sie unseren unverbindlichen Fragebogen aus',
            'newsletter.button': 'UNVERBINDLICHER FRAGEBOGEN',
            'newsletter.highlight': 'unverbindlichen',
            // Added because HTML uses newsletter.description
            'newsletter.description': 'Füllen Sie unseren <span class="highlight">unverbindlichen</span> Fragebogen aus',
            
            // Chatbot
            'chatbot.title': 'Fragen?',
            'chatbot.placeholder': 'Nachricht eingeben...',
            'chatbot.send': 'Senden',
            'chatbot.greeting': 'Hallo! Wie kann ich Ihnen helfen? Interessieren Sie sich für unsere M&A-Dienstleistungen?',
            
            // Footer
            'footer.privacy': 'Datenschutzrichtlinie',
            'footer.company': 'ADNP a.s.',
            'footer.address': 'Opletalova 39, 110 00 Prag 1',
            
            // Common
            'contact.email': 'E-Mail: <a href="mailto:info@adnp.cz">info@adnp.cz</a>',
            'contact.address': 'Adresse'
        },
        
        uk: {
            // Navigation
            'nav.services': 'Наші послуги',
            'nav.industries': 'Галузі',
            'nav.projects': 'Проєкти',
            'nav.about': 'Про нас',
            'nav.ma': 'Злиття та поглинання',
            'nav.consulting': 'Корпоративне консультування та оцінка',
            
            // Hero Section
            'hero.title': 'Створюємо синергії в кожній транзакції',
            'hero.description': 'Ми команда професіоналів, що спеціалізується на злиттях та поглинаннях. Наша експертиза ґрунтується на цифрах, глибокому розумінні та подальших оптимальних рішеннях; ми зробимо все для забезпечення успіху вашого проєкту.',
            
            // About Section
            'about.title': 'ПРО НАС',
            'about.text': 'Ласкаво просимо до нас, де ми пропонуємо точне та незалежне консультування для середніх підприємств. Кожен бізнес має свою унікальну історію та бачення, і ми допомагаємо вам приймати ключові рішення під час процесу продажу та купівлі компаній.',
            'about.team': 'Наша команда складається з більш ніж <strong>30 експертів</strong>, включаючи юристів, бухгалтерів, спеціалістів з транзакцій та податкових консультантів.',
            
            // Stats Section
            'stats.title': 'ADNP у цифрах',
            'stats.colleagues': 'Членів команди',
            'stats.projects': 'Завершених проєктів',
            'stats.value': 'Вартість транзакцій',
            'stats.unit': 'млрд CZK',
            
            // Services Section
            'services.title': 'НАШІ ПОСЛУГИ',
            'services.subtitle': 'Комплексне консультування для стратегічних рішень у вашому бізнесі',
            'services.ma.title': 'ЗЛИТТЯ ТА ПОГЛИНАННЯ',
            'services.ma.description': 'Ми надаємо унікальні рішення для стратегічного продажу та придбання компаній з максимізацією вартості для всіх сторін.',
            'services.consulting.title': 'КОРПОРАТИВНЕ КОНСУЛЬТУВАННЯ ТА ОЦІНКА',
            'services.consulting.description': 'Ми розвиваємо історію вашої компанії та допомагаємо з ключовими стратегічними рішеннями для довгострокового зростання.',
            'services.ma.specialization': 'Ми спеціалізуємося на:',
            'services.ma.due_diligence': 'Due diligence та аналіз ризиків',
            'services.ma.valuation': 'Оцінка підприємств та активів',
            'services.ma.structuring': 'Структурування транзакцій',
            'services.ma.negotiation': 'Ведення переговорів',
            'services.ma.integration': 'Пост-злиття інтеграція',
            'services.ma.cross_border': 'Міжнародні транзакції',
            'services.ma.highlight1_value': '5 млрд CZK',
            'services.ma.highlight1_label': 'Вартість транзакцій',
            'services.ma.highlight2_value': '100+',
            'services.ma.highlight2_label': 'Завершених проєктів',
            'services.ma.highlight3_value': '15+',
            'services.ma.highlight3_label': 'Галузей досвіду',
            'services.consulting.offers': 'Ми пропонуємо:',
            'services.consulting.planning': 'Стратегічне планування та аналіз',
            'services.consulting.valuation': 'Оцінка для різних цілей',
            'services.consulting.modeling': 'Фінансове моделювання',
            'services.consulting.restructuring': 'Реструктуризація та оптимізація',
            'services.consulting.investment': 'Підготовка до інвестицій',
            'services.consulting.esg': 'ESG консультування',
            'services.consulting.highlight1_value': '30+',
            'services.consulting.highlight1_label': 'Експертів у команді',
            'services.consulting.highlight2_value': '10+',
            'services.consulting.highlight2_label': 'Років досвіду',
            'services.consulting.highlight3_value': '360°',
            'services.consulting.highlight3_label': 'Комплексний підхід',
            'services.more_info': 'Більше інформації',
            
            // Industries Section
            'industries.title': 'ГАЛУЗІ',
            'industries.subtitle': 'Ми спеціалізуємося на широкому спектрі галузей з глибоким розумінням специфічних потреб кожного сектору',
            'industries.real_estate': 'Нерухомість',
            'industries.real_estate_desc': 'Комерційна, житлова та інвестиційна нерухомість',
            'industries.it': 'IT',
            'industries.it_desc': 'Програмне забезпечення, ШІ, хмарні сервіси та інновації',
            'industries.retail': 'Роздрібна торгівля',
            'industries.retail_desc': 'E-commerce, роздрібна торгівля та дистрибуція',
            'industries.logistics': 'Логістика',
            'industries.logistics_desc': 'Транспорт, складування та ланцюг поставок',
            'industries.healthcare': 'Охорона здоров\'я',
            'industries.healthcare_desc': 'Медицина, фармацевтика та медичні технології',
            'industries.gastro': 'Гастрономія',
            'industries.gastro_desc': 'Ресторани, харчова промисловість та напої',
            'industries.crypto': 'Криптовалюти',
            'industries.crypto_desc': 'Blockchain, DeFi та цифрові активи',
            'industries.finance': 'Фінанси',
            'industries.finance_desc': 'Банківська справа, страхування та fintech',
            'industries.construction': 'Будівництво',
            'industries.construction_desc': 'Девелопмент, інфраструктура та будівництво',
            'industries.automotive': 'Автомобільна галузь',
            'industries.automotive_desc': 'Автомобільна промисловість та компоненти',
            'industries.mining': 'Видобуток',
            'industries.mining_desc': 'Сировина, матеріали та обробка',
            'industries.b2b': 'B2B послуги',
            'industries.b2b_desc': 'Консалтинг, бухгалтерія та HR',
            'industries.manufacturing': 'Промисловість',
            'industries.manufacturing_desc': 'Виробництво, автоматизація та Індустрія 4.0',
            'industries.energy': 'Енергетика',
            'industries.energy_desc': 'Відновлювані джерела та енергетичні рішення',
            'industries.infrastructure': 'Інфраструктура',
            'industries.infrastructure_desc': 'Транспорт, телекомунікації та розумне місто',
            
            // Projects page
            'projects.title': 'Проєкти',
            'projects.subtitle': 'Успішні транзакції в різних галузях',
            'projects.intro': 'За роки нашої діяльності ми успішно завершили десятки проєктів у сферах M&A, корпоративного консалтингу та оцінки компаній у всіх секторах чеської економіки.',
            'projects.expertise_title': 'Наша експертиза на практиці',
            'projects.expertise_text1': 'Кожен проєкт приносить унікальні виклики та можливості. Наша сила — швидко орієнтуватися в різних галузях і розуміти специфічні потреби кожного клієнта. Портфоліо реалізованих проєктів відображає широту наших компетенцій і глибину експертизи.',
            'projects.expertise_text2': 'В ADNP ми зосереджуємося на «створенні синергії в кожній транзакції». Кожен успішно завершений проєкт є доказом нашої відданості надавати клієнтам максимальну цінність завдяки стратегічному аналізу та точному управлінню процесами.',
            'projects.testimonials_title': 'Відгуки клієнтів',
            'projects.testimonial1_text': 'ADNP продемонстрував виняткову експертизу в аналізі нашого бізнесу та допоміг знайти стратегічного партнера, який ідеально відповідав нашим довгостроковим планам.',
            'projects.testimonial1_author': '- Клієнт з технологічного сектору',
            'projects.testimonial2_text': 'Професійність, швидкість і точність. ADNP допоміг нам успішно завершити складну угоду в рекордні терміни.',
            'projects.testimonial2_author': '- Клієнт з виробничого сектору',
            'projects.types_title': 'Типи реалізованих проєктів',
            'projects.type1': 'Поглинання в технологічному секторі – IT-компанії, програмне забезпечення для e-commerce',
            'projects.type2': 'Продаж виробничих компаній – автомобільна промисловість, іноземні інвестори',
            'projects.type3': 'Злиття в галузі охорони здоров’я – постачальники медичних послуг',
            'projects.type4': 'Оцінка портфеля нерухомості – комерційна нерухомість, рефінансування',
            'projects.type5': 'Management buy-out у ритейлі – торговельні мережі, структурування фінансування',
            'projects.type6': 'Реструктуризація логістичних компаній – оптимізація процесів',
            'projects.type7': 'Due diligence для інвесторів – комплексний аналіз ризиків і можливостей',
            'projects.type8': 'Стратегічне консультування – довгострокове планування та оптимізація',
            'projects.sectors_title': 'Галузі наших проєктів',
            'projects.sector1': 'Технології та IT',
            'projects.sector2': 'Нерухомість',
            'projects.sector3': 'Виробництво та промисловість',
            'projects.sector4': 'Охорона здоров’я',
            'projects.sector5': 'Ритейл і послуги',
            'projects.sector6': 'Транспорт і логістика',
            'projects.sector7': 'Енергетика',
            'projects.sector8': 'Харчова промисловість',
            'projects.contact_title': 'Хочете обговорити ваш проєкт?',
            'projects.contact_text': 'Кожен проєкт для нас унікальний. Із задоволенням обговоримо особливості вашого випадку та запропонуємо оптимальне рішення.',

            // About us page
            'about_page.title': 'Про нас',
            'about_page.subtitle': 'Команда професіоналів із чітким баченням',
            'about_page.intro': 'ADNP a.s. — чеська консалтингова компанія, що спеціалізується на злиттях і поглинаннях. Ми пропонуємо точні та незалежні консультації для середніх компаній у різних секторах економіки.',
            'about_page.expertise_title': 'Наша експертиза',
            'about_page.expertise_text1': 'Кожен бізнес має свою унікальну історію та бачення, і ми допомагаємо клієнтам у ключових рішеннях під час процесу купівлі-продажу компаній. Наша експертиза ґрунтується на цифрах, глибокому розумінні та оптимальних рішеннях.',
            'about_page.expertise_text2': 'В ADNP ми зосереджуємося на «створенні синергії в кожній транзакції». Наша мета — перетворювати бізнес-можливості та відкривати нові шляхи зростання завдяки стратегічному аналізу та глибокому розумінню ринку.',
            'about_page.values_title': 'Наші цінності та підхід',
            'about_page.value1_title': 'Оптимізм і дружелюбність',
            'about_page.value1_text': 'Ми віримо в позитивне ставлення та побудову довгострокових відносин із клієнтами.',
            'about_page.value2_title': 'Співпраця та залученість',
            'about_page.value2_text': 'Працюємо як одна команда з клієнтами для досягнення спільних цілей.',
            'about_page.value3_title': 'Чітка стратегія та реалізація',
            'about_page.value3_text': 'Зосереджуємося на практичних рішеннях та їх успішному впровадженні.',
            'about_page.value4_title': 'Етика і професіоналізм',
            'about_page.value4_text': 'Дотримуємося найвищих етичних стандартів і професійних практик.',
            'about_page.team_title': 'Наша команда',
            'about_page.team_intro': 'Понад 30 професіоналів із різних сфер:',
            'about_page.team1': 'Юристи — фахівці з корпоративного права та M&A-транзакцій',
            'about_page.team2': 'Бухгалтери — експерти з фінансового аналізу та оцінки',
            'about_page.team3': 'Транзакційні спеціалісти — експерти з управління складними процесами',
            'about_page.team4': 'Податкові консультанти — спеціалісти з оптимізації структур',
            'about_page.team5': 'Стратегічні консультанти — експерти з бізнес-планування',
            'about_page.team6': 'Фахівці з due diligence — аналітики ризиків і можливостей',
            'about_page.team7': 'Секторальні спеціалісти — знавці специфічних галузей',
            'about_page.contact_title': 'Контактні дані',
            
            // Newsletter
            'newsletter.title': 'Ви інвестор і хочете отримувати нові можливості на email?',
            'newsletter.subtitle': 'Заповніть наш необов\'язковий опитувальник',
            'newsletter.button': 'НЕОБОВ\'ЯЗКОВИЙ ОПИТУВАЛЬНИК',
            'newsletter.highlight': 'необов\'язковий',
            // Added because HTML uses newsletter.description
            'newsletter.description': 'Заповніть наш <span class="highlight">необов\'язковий</span> опитувальник',
            
            // Chatbot
            'chatbot.title': 'Є питання?',
            'chatbot.placeholder': 'Напишіть ваше повідомлення...',
            'chatbot.send': 'Надіслати',
            'chatbot.greeting': 'Добрий день! Як я можу вам допомогти? Вас цікавлять наші послуги M&A?',
            
            // Footer
            'footer.privacy': 'Політика конфіденційності',
            'footer.company': 'ADNP a.s.',
            'footer.address': 'Opletalova 39, 110 00 Прага 1',
            
            // Common
            'contact.email': 'Email: <a href="mailto:info@adnp.cz">info@adnp.cz</a>',
            'contact.address': 'Адреса'
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
                // Use innerHTML for translations with HTML tags, otherwise textContent
                if (translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
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
            { code: 'cs', name: 'Čeština', flag: 'CZ' },
            { code: 'en', name: 'English', flag: 'GB' },
            { code: 'de', name: 'Deutsch', flag: 'DE' },
            { code: 'uk', name: 'Українська', flag: 'UA' }
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
        
        // Add to navigation - insert before theme switcher
        const navRight = document.querySelector('.nav-right');
        const themeSwitcher = document.querySelector('.theme-switch-wrapper');
        if (navRight && themeSwitcher) {
            navRight.insertBefore(selector, themeSwitcher);
        } else if (navRight) {
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